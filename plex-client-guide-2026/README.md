# Plex Client Guide (2026)

A community-maintained, evidence-first guide to Plex playback clients.

**Last verified:** 2026-09-26

This project exists because older all-in-one Plex client guides have become stale or fragmented. The goal here is to keep three different questions separate:

1. **What the hardware supports**
2. **What the current Plex/player app supports**
3. **What actually works in tested real-world playback**

That distinction matters. A device may advertise Dolby Vision or Dolby Atmos and still fail to Direct Play a specific profile, container, subtitle format, or lossless-audio combination in Plex.

## Quick matrix

Legend: ✅ verified/strong evidence · ⚠️ partial, converted, model-dependent, or current bug · ❌ not supported · ? not adequately verified

| Client | 4K HEVC | HDR10 | HDR10+ | DV P5 | DV P7 | P7 FEL processing | DV P8 | TrueHD | TrueHD Atmos | DTS-HD MA | DTS:X | AV1 | PGS without video transcode | Notes |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| NVIDIA Shield TV Pro 2019 + Plex | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ✅ | ✅ passthrough | ✅ passthrough | ✅ passthrough | ✅ passthrough | ❌ | ✅/⚠️ | Strong native Plex client; current 2026 Android-TV player regressions noted below |
| Apple TV 4K 3rd gen + Plex | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ⚠️ converted | ❌ | ⚠️ converted | ❌ | ? | ✅/⚠️ | Excellent UI/platform; not a bitstream-lossless home-theater endpoint |
| Apple TV 4K 3rd gen + Infuse | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ as LPCM | ❌ (TrueHD Atmos metadata lost) | ✅ as LPCM | ❌ | ? | ✅ | Better local-file compatibility than native Plex on Apple TV |
| Fire TV Stick 4K Max Gen 2 + Plex | ✅ | ✅ | ✅ | ✅ | ✅/⚠️ | ❌ | ✅ | ✅/⚠️ | ✅/⚠️ | ❌/⚠️ | ❌ | ✅ | ✅/⚠️ | Very capable for price; Plex 2026 DTS-HD issues reported |
| Google TV Streamer 4K + Plex | ✅ | ✅ | ✅ | ✅ | ? | ? | ? | ? | ? | ? | ? | ? | ✅/⚠️ | Hardware advertises DV/Atmos, but lossless bitstream support is not officially documented |
| Chromecast with Google TV 4K + Plex | ✅ | ✅ | ✅ | ✅ | ? | ? | ? | ? | ? | ? | ? | ? | ✅/⚠️ | Older/slower; 2026 Plex Android TV regressions reported |
| onn. 4K Pro (2026) + Plex | ✅ | ✅ | ? | ✅ | ? | ? | ? | ? | ? | ? | ? | ? | ✅/⚠️ | Great value; current Plex behavior needs more controlled testing |
| Roku Ultra (current) + Plex | ✅ | ✅ | ✅ | ✅ | ? | ❌/? | ? | ❌ | ❌ | ❌ | ❌/? | ? | ❌ | PGS generally forces burn-in/video transcode; not ideal for remux libraries |
| Ugoos AM6B+ + CoreELEC + PM4K | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ passthrough | ✅ passthrough | ✅ passthrough | ✅ passthrough | ? | ✅ | Best-documented Plex-path option here for UHD-BD DV P7 FEL + lossless audio |
| Zidoo Z9X Pro-class + PlexToZidoo/PM4K | ✅ | ✅ | ✅ | ✅ | ✅ | ⚠️ generally BL+RPU, not full FEL processing | ✅ | ✅ | ✅ | ✅ | ✅ | ? | ✅ | Excellent local playback; Plex integration relies on external-player bridge |
| LG webOS (recent 4K models) + Plex | ✅ | ✅ | model-dependent | model-dependent | model-dependent | ❌ | model-dependent | ❌/transcode | ❌ | model-dependent/mostly ❌ recent sets | ❌ | model-dependent | ✅ on webOS 4+ UHD | Convenient, but TV-model/firmware limitations dominate |
| Samsung Tizen (2016+) + Plex | ✅ | ✅ | model-dependent | ❌ (Samsung does not support DV) | ❌ | ❌ | ❌ | ❌/transcode | ❌ | ❌ recent sets | ❌ | model-dependent; Plex profile may lag | ⚠️ | Good basic client; poor choice for DV/lossless-audio remux libraries |

> **Important:** “DV P7 works” does **not** automatically mean the enhancement layer (FEL) is processed. The Shield and many media players can trigger Dolby Vision from Profile 7 while ignoring the FEL enhancement layer. Ugoos AM6B+ under CoreELEC is notable because FEL processing is supported.

## Practical choices by requirement

- **Native Plex + lossless bitstream audio:** NVIDIA Shield TV Pro 2019 remains the simplest well-tested option.
- **Full UHD Blu-ray Dolby Vision P7 FEL + TrueHD Atmos/DTS:X:** Ugoos AM6B+ + CoreELEC + PM4K is the strongest documented combination in this guide.
- **Apple ecosystem / polished UI:** Apple TV 4K + Infuse. TrueHD/DTS-HD can be decoded losslessly to LPCM, but TrueHD Atmos and DTS:X object metadata are not preserved.
- **Low-cost HDR/DV endpoint:** Fire TV Stick 4K Max Gen 2 is unusually capable, but DTS-HD/DTS:X support is weak and current Plex releases have had audio/refresh-rate regressions.
- **Built-in TV app:** convenient, but expect more audio transcoding and model-specific restrictions.

## Recommended Plex baseline settings

For clients that expose these options:

- **Local quality:** Original / Maximum
- **Direct Play:** On
- **Direct Stream:** On
- **Force Direct Play:** Off by default; use only as a troubleshooting tool
- **Audio passthrough:** HDMI / On when your playback chain supports it
- **Refresh-rate switching:** On normally, **but see current Android TV/Fire TV regressions below**
- **Resolution switching:** Optional. Leave off unless you specifically want the TV/projector to perform scaling.
- **Subtitle burn-in:** Automatic is the safe default. Prefer SRT when you want to avoid subtitle-triggered video transcodes on limited clients.

## Current Plex player caveats (September 2026)

The current production Android/iOS/Android TV/tvOS/Fire TV release is Plex **2026.18.0**, while **2026.19.0** is in beta as of this guide's verification date.

Notable active/recent issues:

- Android TV users reported **DTS audio going silent when refresh-rate or resolution switching was enabled**. Plex lists a fix in the 2026.19.0 beta.
- Android TV users also reported **23.976/24 fps Dolby Vision failing to trigger refresh-rate switching**, including Shield, Chromecast with Google TV, Google TV Streamer, and onn. 4K Pro reports.
- Fire TV users have reported **DTS-HD MA passthrough failures** in current 2026 builds even when playback is otherwise Direct Play.
- The new Apple TV app has current PGS rendering regressions reported against HDR content.

These are app-version bugs, not necessarily permanent hardware limitations. This repo therefore tracks **hardware capability** separately from **current Plex behavior**.

## Project layout

- [`docs/matrix.md`](docs/matrix.md) — detailed matrix and definitions
- [`docs/settings.md`](docs/settings.md) — baseline Plex configuration guidance
- [`docs/current-known-issues.md`](docs/current-known-issues.md) — time-sensitive client regressions
- [`docs/clients/`](docs/clients/) — per-client notes
- [`data/clients.csv`](data/clients.csv) — machine-editable matrix
- [`docs/methodology.md`](docs/methodology.md) — evidence/confidence rules
- [`CONTRIBUTING.md`](CONTRIBUTING.md) — how to submit test results

## Primary sources

This repo prioritizes manufacturer specifications, Plex documentation/release notes, active player projects, and reproducible community test matrices.

- Plex Android TV settings: https://support.plex.tv/articles/settings-android-tv/
- Plex Apple TV settings: https://support.plex.tv/articles/settings-plex-for-apple-tv/
- Plex Roku settings: https://support.plex.tv/articles/204275243-settings-plex-for-roku/
- Plex smart-TV format support: https://support.plex.tv/articles/203810286-what-media-formats-are-supported/
- Plex TV/mobile release notes: https://forums.plex.tv/t/plex-for-mobile-tvs-android-mobile-ios-android-tv-tvos-fire-tv/909610
- NT-Lists Plex compatibility matrix: https://github.com/NT-Lists/Docs/blob/master/Plex-Compatibility-Matrix.md
- PM4K/PlexMod: https://github.com/pannal/plex-for-kodi
- CoreELEC: https://github.com/CoreELEC/CoreELEC
- NVIDIA Shield: https://www.nvidia.com/en-us/shield/
- Apple TV 4K specs: https://www.apple.com/apple-tv-4k/specs/
- Google streaming-device specs: https://support.google.com/chromecast/answer/3046409
- Roku Ultra specs: https://www.roku.com/en-us/products/players/roku-ultra
- Amazon Fire TV device specs: https://developer.amazon.com/docs/device-specs/device-specifications-fire-tv-streaming-media-player.html

## License

Documentation is released under CC BY 4.0. See [`LICENSE`](LICENSE).
