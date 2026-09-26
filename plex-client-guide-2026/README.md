<h2 align="center">Plex Client Guide</h2>
<p align="center">
A current, evidence-based guide to Plex playback clients.<br>
<sub>Hardware capability · app behavior · real-world playback</sub>
</p>

<p align="center">
<a href="docs/matrix.md">Compatibility matrix</a> ·
<a href="docs/settings.md">Recommended settings</a> ·
<a href="docs/current-known-issues.md">Known issues</a> ·
<a href="CONTRIBUTING.md">Contribute</a>
</p>

> **Last verified:** September 26, 2026

Plex clients are deceptively difficult to compare. A device can advertise Dolby Vision or Atmos yet still fail to Direct Play a particular Dolby Vision profile, lossless-audio track, or subtitle format. This project keeps **hardware support**, **player/app support**, and **tested behavior** separate.

### At a glance

| Client | Dolby Vision | Lossless audio | PGS | Best fit |
|---|---|---|---|---|
| **Shield TV Pro 2019 + Plex** | P5 / P7 / P8¹ | TrueHD/Atmos + DTS-HD/X passthrough | Good | Native Plex + AVR |
| **Apple TV 4K + Infuse** | P5 / P8 | TrueHD/DTS-HD → LPCM² | Excellent | Apple ecosystem |
| **Fire TV 4K Max Gen 2 + Plex** | P5 / P7 / P8³ | TrueHD capable; DTS limited | Good | Low-cost 4K/DV |
| **Ugoos AM6B+ + CoreELEC + PM4K** | P5 / P7 / P8 + **FEL** | TrueHD/Atmos + DTS-HD/X passthrough | Excellent | UHD remux / home theater |
| **Zidoo + PlexToZidoo** | P5 / P7 / P8¹ | TrueHD/Atmos + DTS-HD/X passthrough | Excellent | Local remux playback |
| **Roku Ultra + Plex** | DV supported | Limited | Burn-in often required | Simple streaming |
| **LG webOS / Samsung Tizen** | Model-dependent / no DV on Samsung | Limited | Model-dependent | Convenience |

<sub>¹ Profile 7 output does not mean FEL is processed. ² Lossless channel audio is retained, but TrueHD Atmos/DTS:X object metadata is not. ³ Support can vary with Plex app version and current regressions.</sub>

**[Open the full compatibility matrix →](docs/matrix.md)**

### Quick picks

| Need | Good starting point |
|---|---|
| Native Plex with lossless bitstream audio | **NVIDIA Shield TV Pro 2019** |
| Full UHD Blu-ray DV Profile 7 FEL + Atmos/DTS:X | **Ugoos AM6B+ + CoreELEC + PM4K** |
| Apple TV with broad format compatibility | **Apple TV 4K + Infuse** |
| Affordable HDR/Dolby Vision client | **Fire TV Stick 4K Max Gen 2** |
| Built-in TV app with no extra box | **LG webOS / Samsung Tizen**, with more codec compromises |

### Recommended Plex baseline

For clients that expose these options:

`Local Quality: Original/Maximum` · `Direct Play: On` · `Direct Stream: On` · `Force Direct Play: Off` · `Refresh Rate Switching: On*`

Audio passthrough should be enabled when the client and AVR/soundbar support it. Leave subtitle burn-in on **Automatic** unless you have a specific reason to change it.

\* See [current known issues](docs/current-known-issues.md) before troubleshooting Android TV / Fire TV refresh-rate or DTS behavior.

<details>
<summary><strong>Why Dolby Vision Profile 7 needs its own warning</strong></summary>

A player displaying Dolby Vision from a Profile 7 source does **not** prove it is processing the enhancement layer. Many devices use the base layer plus RPU metadata while ignoring FEL. This guide therefore tracks **DV P7 output** and **P7 FEL processing** separately.

</details>

<details>
<summary><strong>How support claims are graded</strong></summary>

We prioritize manufacturer documentation, Plex documentation and release notes, active player projects, and repeatable playback tests. Ambiguous or model-dependent behavior is marked as such instead of being forced into a simple Yes/No value.

See [Methodology](docs/methodology.md) and [Sources](SOURCES.md).

</details>

### Client pages

[Shield TV Pro](docs/clients/shield-tv-pro-2019.md) ·
[Apple TV 4K](docs/clients/apple-tv-4k.md) ·
[Fire TV 4K Max](docs/clients/fire-tv-4k-max-gen2.md) ·
[Google TV](docs/clients/google-tv.md) ·
[Roku Ultra](docs/clients/roku-ultra.md) ·
[Ugoos AM6B+](docs/clients/ugoos-am6b-plus.md) ·
[Zidoo](docs/clients/zidoo.md) ·
[Smart TV apps](docs/clients/smart-tv-apps.md)

### Project files

- [`data/clients.csv`](data/clients.csv) — machine-readable compatibility data
- [`docs/current-known-issues.md`](docs/current-known-issues.md) — app-version regressions and temporary bugs
- [`CONTRIBUTING.md`](CONTRIBUTING.md) — test-report requirements and contribution workflow
- [`.github/ISSUE_TEMPLATE/playback-test.yml`](.github/ISSUE_TEMPLATE/playback-test.yml) — structured playback-test submissions

Documentation is released under [CC BY 4.0](LICENSE).
