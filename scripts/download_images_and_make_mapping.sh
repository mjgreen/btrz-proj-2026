#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   bash download_images_and_make_mapping.sh part2_image_url_map.csv stimuli
#
# Creates:
#   <outdir>/stim_001.<ext> ... (files)
#   <outdir>/mapping.csv  (stim_page,url,local_file)

MAPCSV="${1:-part2_image_url_map.csv}"
OUTDIR="${2:-stimuli}"

mkdir -p "$OUTDIR"
OUTMAP="$OUTDIR/mapping.csv"
echo "stim_page,url,local_file" > "$OUTMAP"

i=0
tail -n +2 "$MAPCSV" | while IFS=, read -r stim_page url; do
  i=$((i+1))
  tmp="$OUTDIR/_tmp_download"
  # Download (follow redirects)
  curl -L --fail --silent --show-error "$url" -o "$tmp"

  # Detect mime type
  mime=$(file -b --mime-type "$tmp" || true)

  ext="bin"
  case "$mime" in
    image/jpeg) ext="jpg" ;;
    image/png) ext="png" ;;
    image/webp) ext="webp" ;;
    image/gif) ext="gif" ;;
    image/svg+xml) ext="svg" ;;
  esac

  fname=$(printf "stim_%03d.%s" "$i" "$ext")
  mv "$tmp" "$OUTDIR/$fname"

  echo "$stim_page,$url,$fname" >> "$OUTMAP"
  echo "Saved $OUTDIR/$fname ($mime)"
done

echo ""
echo "Done."
echo "Mapping written to: $OUTMAP"
