# Detailed compatibility matrix

**Verified:** 2026-09-26

## Definitions

- **Direct Play:** Plex sends the original container/audio/video without conversion.
- **Direct Stream:** Plex remuxes compatible streams to a different container without re-encoding the video.
- **Passthrough:** compressed audio bitstream reaches the AVR/soundbar intact.
- **LPCM:** player decodes lossless audio locally and sends uncompressed PCM. This can preserve the lossless channel audio while losing object metadata such as TrueHD Atmos or DTS:X.
- **DV P7 trigger:** device can output Dolby Vision from a Profile 7 source.
- **FEL processing:** device actually processes the Profile 7 Full Enhancement Layer. Do not treat this as equivalent to merely triggering Dolby Vision.

## Status vocabulary

- `Yes` — supported with strong official or repeatable test evidence
- `No` — unsupported or known to require conversion
- `Converted to LPCM` — lossless codec can be decoded locally, but not bitstreamed
- `Core only` — only the lossy DTS core survives
- `Triggers DV; FEL ignored` — Profile 7 can produce DV output but the enhancement layer is not processed
- `Model-dependent` — varies by TV/device generation or firmware
- `Current-app bug` — hardware is capable, but a current Plex release has a known/reported regression
- `Unknown` — insufficient evidence; contributions welcome

## Matrix

| Client | Dolby Vision | P7 FEL | HDR10+ | TrueHD/Atmos | DTS-HD/DTS:X | PGS | Network | Confidence |
|---|---|---|---|---|---|---|---|---|
| Shield TV Pro 2019 / Plex | P5/P7/P8 | Triggers DV; FEL ignored | No | Passthrough | Passthrough | Supported in Android player; behavior can vary with app version | GbE | High |
| Apple TV 4K 3rd / Plex | P5; native Plex matrix does not show P7/P8 | No | Yes | No bitstream | No bitstream | Player-rendered, but current 2026 rendering bugs reported | GbE on 128GB model | High |
| Apple TV 4K 3rd / Infuse | P5/P8 | No | Yes | TrueHD decoded to LPCM; TrueHD Atmos metadata not retained | DTS-HD decoded to LPCM; DTS:X metadata not retained | Yes | GbE on 128GB model | High |
| Fire TV Stick 4K Max Gen 2 / Plex | P5/P7/P8 seen in community matrix | No FEL evidence | Yes | TrueHD/Atmos reported working in matrix; app-version dependent | DTS core; DTS-HD/X problematic | Generally supported | Wi-Fi 6E; optional 100M Ethernet adapters | Medium-high |
| Google TV Streamer / Plex | Hardware DV | Unknown | Yes | Dolby Atmos advertised; lossless bitstream not documented | Not documented | Android player generally supports image subs | GbE | Medium |
| Chromecast w/ Google TV 4K / Plex | Hardware DV | Unknown | Yes | Dolby passthrough advertised; lossless specifics unclear | Not documented | Android player generally supports image subs | Optional Ethernet | Medium |
| onn. 4K Pro 2026 / Plex | Dolby Vision advertised | Unknown | Unknown | Dolby Atmos advertised; codec path needs testing | Unknown | Android player generally supports image subs | Ethernet + Wi-Fi 6 | Medium-low |
| Roku Ultra current / Plex | Dolby Vision advertised | Unknown/no FEL evidence | Yes | No TrueHD bitstream in Plex matrix | DTS passthrough limited; no DTS-HD MA | PGS generally requires burn-in | 100M Ethernet + Wi-Fi 6 | Medium-high |
| Ugoos AM6B+ / CoreELEC / PM4K | P5/P7/P8 | **Yes** for supported single-track-dual-layer FEL | Yes | Passthrough incl. Atmos | Passthrough incl. DTS:X | Kodi renders | GbE | High |
| Zidoo Z9X Pro-class / PlexToZidoo | P5/P7/P8 | Usually no full FEL processing; BL+RPU behavior | Yes | Passthrough | Passthrough | Native player renders | GbE | Medium-high |
| LG webOS recent | Model/firmware-dependent; newer sets gained MKV DV in some cases | No | Model-dependent | TrueHD generally transcodes in Plex TV app | DTS support varies; recent LG often lacks it | PGS on webOS 4+ UHD per Plex docs | TV-dependent | Medium |
| Samsung Tizen | No Dolby Vision | No | Model-dependent | Transcode | Recent Samsung: no DTS | Model/app dependent | TV-dependent | Medium |

## Why we do not publish a single score

A single ranking hides incompatible priorities. A client can be excellent for streaming services but poor for UHD remuxes, or excellent for lossless audio but weak for Dolby Vision FEL. This project instead exposes the actual playback constraints so users can choose based on their own library and AV chain.
