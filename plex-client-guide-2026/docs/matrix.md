# Compatibility matrix

**Last verified:** September 26, 2026

The tables are intentionally split so they remain readable on GitHub and mobile. A compact overview is available in the [README](../README.md).

### Legend

✅ supported / strong evidence · ⚠️ partial, converted, model-dependent, or affected by a current bug · ❌ unsupported · ? insufficiently verified

<details>
<summary><strong>Definitions used in the tables</strong></summary>

- **Direct Play** — Plex sends the original container, video, and audio without conversion.
- **Direct Stream** — Plex remuxes compatible streams without re-encoding the video.
- **Passthrough** — compressed audio reaches the AVR/soundbar intact.
- **LPCM** — the player decodes audio locally and sends uncompressed PCM. Lossless channel audio can survive while Atmos/DTS:X object metadata does not.
- **P7 output** — a device can produce Dolby Vision from Profile 7 media.
- **FEL processing** — the device actually processes the Profile 7 Full Enhancement Layer. This is not equivalent to merely triggering Dolby Vision.

</details>

## Video

| Client | 4K HEVC | HDR10+ | Dolby Vision | P7 FEL | Notes |
|---|:---:|:---:|---|---|---|
| Shield TV Pro 2019 / Plex | ✅ | ❌ | P5 / P7 / P8 | ❌ | P7 can trigger DV, but FEL is ignored |
| Apple TV 4K 3rd / Plex | ✅ | ✅ | P5 | ❌ | Native Plex support is narrower than Infuse |
| Apple TV 4K 3rd / Infuse | ✅ | ✅ | P5 / P8 | ❌ | Strong general playback support |
| Fire TV Stick 4K Max Gen 2 / Plex | ✅ | ✅ | P5 / P7 / P8 ⚠️ | ❌ | Current Plex builds can affect behavior |
| Google TV Streamer / Plex | ✅ | ✅ | Hardware DV; profiles ? | ? | Lossless/remux path needs more controlled testing |
| Chromecast with Google TV 4K / Plex | ✅ | ✅ | Hardware DV; profiles ? | ? | Older/slower Android TV platform |
| onn. 4K Pro 2026 / Plex | ✅ | ? | DV advertised; profiles ? | ? | More test data needed |
| Roku Ultra / Plex | ✅ | ✅ | DV supported | ❌/? | Not a remux-first platform |
| Ugoos AM6B+ / CoreELEC / PM4K | ✅ | ✅ | P5 / P7 / P8 | **✅** | Full FEL support on supported single-track dual-layer media |
| Zidoo Z9X Pro-class / PlexToZidoo | ✅ | ✅ | P5 / P7 / P8 | ⚠️ | Typically BL+RPU behavior rather than full FEL processing |
| LG webOS recent | ✅ | ⚠️ | Model/firmware-dependent | ❌ | TV generation matters heavily |
| Samsung Tizen | ✅ | ⚠️ | ❌ | ❌ | Samsung TVs do not support Dolby Vision |

## Audio & subtitles

| Client | TrueHD / Atmos | DTS-HD MA / DTS:X | PGS subtitles | Notes |
|---|---|---|---|---|
| Shield TV Pro 2019 / Plex | ✅ passthrough | ✅ passthrough | ✅ / ⚠️ | Strong native Plex audio endpoint |
| Apple TV 4K 3rd / Plex | ⚠️ no bitstream | ⚠️ no bitstream | ✅ / ⚠️ | Current PGS rendering issues have been reported |
| Apple TV 4K 3rd / Infuse | ⚠️ TrueHD → LPCM; Atmos metadata lost | ⚠️ DTS-HD → LPCM; DTS:X metadata lost | ✅ | Lossless channels preserved as PCM |
| Fire TV Stick 4K Max Gen 2 / Plex | ✅ / ⚠️ | ⚠️ DTS core / app-version limitations | ✅ / ⚠️ | DTS-HD/X is the weak point |
| Google TV Streamer / Plex | ? | ? | ✅ / ⚠️ | Atmos advertised; lossless bitstream path not well documented |
| Chromecast with Google TV 4K / Plex | ? | ? | ✅ / ⚠️ | Codec path varies by app/device behavior |
| onn. 4K Pro 2026 / Plex | ? | ? | ✅ / ⚠️ | Needs controlled tests |
| Roku Ultra / Plex | ❌ | ❌ / ⚠️ | ❌ / burn-in | Poor fit for image-subtitle remux libraries |
| Ugoos AM6B+ / CoreELEC / PM4K | ✅ passthrough | ✅ passthrough | ✅ | Excellent home-theater path |
| Zidoo Z9X Pro-class / PlexToZidoo | ✅ passthrough | ✅ passthrough | ✅ | Uses external/native player bridge |
| LG webOS recent | ❌ / transcode | ⚠️ model-dependent | ✅ on supported webOS UHD models | Audio support changes by TV generation |
| Samsung Tizen | ❌ / transcode | ❌ on recent sets | ⚠️ | Basic streaming client rather than remux endpoint |

## Network & platform notes

| Client | Network | Confidence | Main caveat |
|---|---|---|---|
| Shield TV Pro 2019 | Gigabit Ethernet | High | Aging hardware; no HDR10+ |
| Apple TV 4K 3rd | Gigabit Ethernet on 128 GB model | High | No lossless bitstream passthrough |
| Fire TV Stick 4K Max Gen 2 | Wi-Fi 6E; optional Ethernet adapters | Medium-high | DTS behavior and app regressions |
| Google TV Streamer | Gigabit Ethernet | Medium | Lossless/remux support poorly documented |
| Chromecast with Google TV 4K | Optional Ethernet | Medium | Older hardware |
| onn. 4K Pro 2026 | Ethernet + Wi-Fi 6 | Medium-low | Needs more repeatable testing |
| Roku Ultra | 100 Mb Ethernet + Wi-Fi 6 | Medium-high | PGS and lossless-audio limitations |
| Ugoos AM6B+ / CoreELEC | Gigabit Ethernet | High | More setup complexity than appliance-style clients |
| Zidoo | Gigabit Ethernet | Medium-high | Plex integration depends on external-player bridge |
| Smart TV apps | TV-dependent | Medium | Model and firmware differences dominate |

## Status vocabulary

`Yes` · `No` · `Converted to LPCM` · `Core only` · `Triggers DV; FEL ignored` · `Model-dependent` · `Current-app bug` · `Unknown`

We intentionally avoid a single overall score. The best client depends on whether the priority is native Plex, lossless audio, Dolby Vision FEL, streaming-service integration, simplicity, or cost.
