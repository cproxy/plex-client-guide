# Fire TV Stick 4K Max Gen 2 + Plex

A very capable low-cost Plex endpoint with some important audio caveats.

## Hardware/platform strengths

Amazon documents 4K HEVC, AV1, HDR10, HDR10+, HLG and Dolby Vision support on current high-end Fire TV sticks. Community Plex testing shows P5/P7/P8 Dolby Vision and TrueHD/Atmos playback on the tested Gen 2 device.

## Caveats

- NT-Lists reports DTS but not DTS-HD MA or DTS:X.
- September 2026 Plex users continue to report DTS-HD MA failures on current Fire TV app builds.
- Current app releases have also had refresh-rate-related regressions.

Sources:
- https://developer.amazon.com/docs/device-specs/device-specifications-fire-tv-streaming-media-player.html
- https://github.com/NT-Lists/Docs/blob/master/Plex-Compatibility-Matrix.md
- https://forums.plex.tv/t/firestick-app-update-3rd-sep-2026/942476
