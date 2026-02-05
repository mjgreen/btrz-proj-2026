mkdir compressed

Get-ChildItem *.mp4 | ForEach-Object {
  ffmpeg -i "$($_.Name)" -map 0:v:0 -map 0:a? `
    -c:v libx264 -preset slow -crf 23 `
    -pix_fmt yuv420p -movflags +faststart `
    -c:a aac -b:a 96k `
    "compressed\$($_.BaseName)_web.mp4"
}
