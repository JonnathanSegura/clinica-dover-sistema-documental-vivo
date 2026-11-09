#!/usr/bin/env python3
"""Cruce call center -> etapas de Kommo (embudo "Dover - Atención"), versión Python/CSV.

Por defecto es SIMULACIÓN (no escribe nada). Para aplicar: --apply.

Variables de entorno (nunca versionar valores reales):
  KOMMO_SUBDOMAIN    subdominio de la cuenta Kommo
  KOMMO_TOKEN        token de larga duración (para simular basta permiso de lectura)
  KOMMO_PIPELINE_ID  id numérico del embudo principal

Uso:
  python kommo_sync_callcenter.py --csv mes.csv            # simulación
  python kommo_sync_callcenter.py --csv mes.csv --apply    # escribe

La hoja se exporta como CSV (pestaña del mes) con columnas: Telefono, Estado del Lead, Valor Factura.
"""
import argparse
import csv
import datetime
import os
import re
import sys

import requests

# Mapeo Estado del call center -> clave de etapa (confirmar con gerencia antes de --apply)
MAPA = {
    "venta": "ganado",
    "venta sin cobro": "ganado",
    "no asiste": "perdido",
    "negociación": "conv",
    "negociacion": "conv",
}
# Orden de avance: solo se mueve hacia adelante, nunca hacia atrás
ORDEN = ["nuevo", "conv", "agendada", "ganado", "perdido"]


def norm(p):
    """Normaliza un teléfono a sus últimos 10 dígitos (llave de cruce)."""
    d = re.sub(r"\D", "", p or "")
    return d[-10:] if len(d) >= 10 else ""


def api(sub, tok):
    s = requests.Session()
    s.headers["Authorization"] = f"Bearer {tok}"
    base = f"https://{sub}.kommo.com/api/v4"

    def get(path, **params):
        r = s.get(base + path, params=params, timeout=60)
        if r.status_code == 204:
            return {}
        r.raise_for_status()
        return r.json()

    def patch(path, body):
        r = s.patch(base + path, json=body, timeout=60)
        r.raise_for_status()
        return r.json()

    return get, patch


def stage_ids(get, pipeline):
    d = get(f"/leads/pipelines/{pipeline}/statuses")["_embedded"]["statuses"]
    out = {}
    for s in d:
        n = s["name"].lower()
        if n == "nuevo":
            out["nuevo"] = s["id"]
        elif n.startswith("en conversaci"):
            out["conv"] = s["id"]
        elif n.startswith("cita agendada"):
            out["agendada"] = s["id"]
        elif n.startswith("cita completada"):
            out["ganado"] = s["id"]
        elif n in ("perdido", "cita cancelada – perdido"):
            out["perdido"] = s["id"]
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--csv", required=True)
    ap.add_argument("--apply", action="store_true")
    a = ap.parse_args()
    sub, tok = os.environ["KOMMO_SUBDOMAIN"], os.environ["KOMMO_TOKEN"]
    pipeline = os.environ["KOMMO_PIPELINE_ID"]
    get, patch = api(sub, tok)
    ids = stage_ids(get, pipeline)
    inv = {v: k for k, v in ids.items()}
    falta = [k for k in ("nuevo", "conv", "ganado", "perdido") if k not in ids]
    if falta:
        sys.exit(f"No encontré etapas: {falta}")

    # 1) hoja -> {teléfono: etapa objetivo más avanzada}
    objetivo = {}
    with open(a.csv, newline="", encoding="utf-8") as f:
        for r in csv.DictReader(f):
            p = norm(r.get("Telefono"))
            est = (r.get("Estado del Lead") or "").strip().lower()
            tgt = MAPA.get(est)
            if p and tgt and (p not in objetivo or ORDEN.index(tgt) > ORDEN.index(objetivo[p])):
                objetivo[p] = tgt

    # 2) leads del embudo con su teléfono
    leads, page = [], 1
    while True:
        d = get("/leads", **{"filter[pipeline_id]": pipeline, "limit": 250, "page": page, "with": "contacts"})
        got = d.get("_embedded", {}).get("leads", [])
        leads += got
        if len(got) < 250:
            break
        page += 1
    cids = sorted({c["id"] for l in leads for c in l["_embedded"].get("contacts", [])})
    tel = {}
    for i in range(0, len(cids), 50):
        params = {"limit": 250}
        params.update({f"filter[id][{j}]": c for j, c in enumerate(cids[i:i + 50])})
        for c in get("/contacts", **params).get("_embedded", {}).get("contacts", []):
            for fld in c.get("custom_fields_values") or []:
                if fld.get("field_code") == "PHONE":
                    for v in fld["values"]:
                        tel.setdefault(norm(str(v["value"])), set()).add(c["id"])
    por_contacto = {}
    for l in leads:
        for c in l["_embedded"].get("contacts", []):
            por_contacto.setdefault(c["id"], []).append(l)

    # 3) decidir movimientos (solo hacia adelante)
    cambios, log = [], []
    for p, tgt in objetivo.items():
        for cid in tel.get(p, ()):
            for l in por_contacto.get(cid, ()):
                actual = inv.get(l["status_id"], "otro")
                if actual not in ORDEN or tgt not in ids:
                    continue
                if ORDEN.index(tgt) > ORDEN.index(actual):
                    cambios.append({"id": l["id"], "status_id": ids[tgt]})
                    log.append((l["id"], p[-4:], actual, tgt))  # solo últimos 4 dígitos en el log
    hoy = datetime.date.today().isoformat()
    print(f"[{hoy}] teléfonos en hoja con estado mapeado: {len(objetivo)} | leads a mover: {len(cambios)}")
    for x in log:
        print("  lead %s tel ***%s: %s -> %s" % x)
    if a.apply and cambios:
        for i in range(0, len(cambios), 50):
            patch("/leads", cambios[i:i + 50])
        print("APLICADO")
    else:
        print("SIMULACIÓN: no se escribió nada (usa --apply)")


if __name__ == "__main__":
    main()
