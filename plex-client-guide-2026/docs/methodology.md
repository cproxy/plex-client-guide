# Methodology

## Evidence priority

1. Manufacturer/platform technical specifications
2. Plex documentation and official release notes
3. Active open-source player project documentation
4. Reproducible compatibility matrices with exact hardware/player identification
5. Plex/CoreELEC/Firecore forum reports with versioned setups
6. General community anecdotes

A lower-priority source should not override a clear higher-priority hardware limitation without repeatable evidence.

## Hardware support != Plex support

Every compatibility claim should identify, where possible:

- exact hardware model
- OS/firmware
- Plex or alternate-player version
- container (MKV/MP4/TS)
- video codec/profile/level
- HDR format and Dolby Vision profile
- FEL/MEL status for Profile 7
- audio codec and channel layout
- subtitle format
- TV/projector
- AVR/soundbar and connection path

## Dolby Vision terminology

A report that a TV displays its “Dolby Vision” badge is **not enough** to claim Profile 7 FEL support.

For P7 FEL, prefer a known FEL verification clip/test pattern or documented decoder behavior that proves the enhancement layer contributes to output.

## Audio terminology

Do not label a codec simply “supported” if it is converted.

Examples:

- `TrueHD passthrough` — AVR receives TrueHD bitstream
- `TrueHD -> LPCM` — lossless channel audio is decoded by player; Atmos metadata is generally lost unless a platform specifically reconstructs/outputs it
- `DTS-HD core only` — lossy DTS core is used; HD extension is discarded
- `Transcoded` — Plex server converts audio to another codec

## Confidence

- **High:** official specs + independent tested evidence agree
- **Medium:** credible tests but incomplete model/app coverage
- **Low:** anecdotal or conflicting evidence
- **Unknown:** no claim should be made yet
