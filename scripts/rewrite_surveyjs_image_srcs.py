#!/usr/bin/env python3
import csv, json, re, sys, os

# Usage:
#   python rewrite_surveyjs_image_srcs.py in_survey.json mapping.csv out_survey.json stimuli_subdir
#
# Example:
#   python rewrite_surveyjs_image_srcs.py Emotional_Episodic_Memory_Effects_Part2_surveyjs.json stimuli/mapping.csv Part2_local_images.json stimuli

in_survey = sys.argv[1]
mapping_csv = sys.argv[2]
out_survey = sys.argv[3]
subdir = sys.argv[4] if len(sys.argv) > 4 else "stimuli"

with open(in_survey, "r", encoding="utf-8") as f:
    survey = json.load(f)

# Build mapping from stim_page -> local_file
m = {}
with open(mapping_csv, newline="", encoding="utf-8") as f:
    r = csv.DictReader(f)
    for row in r:
        m[row["stim_page"]] = row["local_file"]

img_re = re.compile(r'(<img\b[^>]*\bsrc=")([^"]+)(")', flags=re.IGNORECASE)

for page in survey.get("pages", []):
    name = page.get("name","")
    if name in m:
        local = f'{subdir}/{m[name]}'
        for el in page.get("elements", []):
            if el.get("type") == "html" and "html" in el:
                # Replace the first img src on that page
                def repl(match):
                    return match.group(1) + local + match.group(3)
                el["html"] = img_re.sub(repl, el["html"], count=1)
                break

with open(out_survey, "w", encoding="utf-8") as f:
    json.dump(survey, f, ensure_ascii=False, indent=2)

print(f"Wrote: {out_survey}")
