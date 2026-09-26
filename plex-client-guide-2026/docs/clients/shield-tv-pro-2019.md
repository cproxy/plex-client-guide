# NVIDIA Shield TV Pro 2019 + Plex

## Summary

Still the simplest native-Plex client in this guide for users who need TrueHD Atmos and DTS:X bitstream passthrough.

### Strong points

- 4K HEVC / HDR10
- Dolby Vision P5/P7/P8 in community testing
- TrueHD / TrueHD Atmos passthrough
- DTS-HD MA / DTS:X passthrough
- Gigabit Ethernet
- Native Plex Android TV app

### Limitations

- No HDR10+
- Dolby Vision Profile 7 does **not** mean FEL is processed; treat Shield P7 as DV output without full FEL reconstruction
- No AV1 hardware decode
- Current 2026 Plex Android TV releases have had DTS + refresh-rate switching and Dolby Vision refresh-rate switching regressions

### Suggested Plex settings

- Original quality
- Direct Play: On
- Direct Stream: On
- Force Direct Play: Off
- Passthrough: HDMI
- Refresh-rate switching: On normally; disable temporarily if affected by current DTS regression
- Burn subtitles: Automatic

Sources:
- https://www.nvidia.com/en-us/shield/
- https://github.com/NT-Lists/Docs/blob/master/Plex-Compatibility-Matrix.md
- https://forums.plex.tv/t/dts-and-dts-master-audio/939324/39
- https://forums.plex.tv/t/new-experience-on-android-tv-refresh-rate-switching-does-not-work-for-24-fps-dolby-vision/941946
