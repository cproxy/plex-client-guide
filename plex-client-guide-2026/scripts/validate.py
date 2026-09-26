#!/usr/bin/env python3
import csv
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parents[1]
errors = []

csv_path = ROOT / "data" / "clients.csv"
with csv_path.open(newline="", encoding="utf-8") as f:
    rows = list(csv.DictReader(f))

required = {"client", "player", "confidence", "last_verified"}
if not rows:
    errors.append("data/clients.csv has no data rows")
else:
    missing = required - set(rows[0])
    if missing:
        errors.append(f"data/clients.csv missing columns: {sorted(missing)}")
    for i, row in enumerate(rows, start=2):
        for field in required:
            if not row.get(field, "").strip():
                errors.append(f"data/clients.csv row {i}: empty {field}")

link_re = re.compile(r"\[[^\]]+\]\(([^)]+)\)")
for md in ROOT.rglob("*.md"):
    text = md.read_text(encoding="utf-8")
    for target in link_re.findall(text):
        if target.startswith(("http://", "https://", "mailto:", "#")):
            continue
        target_path = (md.parent / target.split("#", 1)[0]).resolve()
        if not target_path.exists():
            errors.append(f"{md.relative_to(ROOT)}: broken relative link {target}")

if errors:
    print("Validation failed:")
    for error in errors:
        print(f"- {error}")
    sys.exit(1)

print(f"OK: {len(rows)} client rows; Markdown relative links valid")
