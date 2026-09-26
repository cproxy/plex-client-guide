# Contributing

Pull requests and test reports are welcome.

## Good test reports include

- Device model (exact model number if possible)
- OS / firmware
- Plex client or alternate player and version
- Plex Media Server version
- TV/projector model
- AVR/soundbar model
- HDMI path (player -> AVR -> TV, or player -> TV -> eARC, etc.)
- File container
- Video codec/profile/level
- HDR format / Dolby Vision profile
- FEL/MEL if Profile 7
- Audio format
- Subtitle format
- Plex Dashboard result: Direct Play / Direct Stream / Transcode
- What the AVR and display report receiving

## Avoid

- Inferring support from logos on a retail box alone
- Calling P7 “FEL supported” because the TV entered Dolby Vision mode
- Calling TrueHD/DTS-HD “passthrough” when the AVR actually receives LPCM
- Combining multiple hardware generations into one row without marking them model-dependent
