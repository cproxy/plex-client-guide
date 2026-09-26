# Ugoos AM6B+ + CoreELEC + PM4K

This is the specialist option in the guide for users whose priority is UHD Blu-ray remux fidelity rather than mainstream streaming-app convenience.

## Why it is different

CoreELEC documents Dolby Vision support on appropriate Amlogic hardware, and its community has extensively tested Ugoos AM6B+ with Profile 7 FEL. The platform can also passthrough TrueHD Atmos and DTS-HD MA/DTS:X.

PM4K provides a current Plex-oriented Kodi client.

## Important details

- Prefer single-track-dual-layer (STDL) P7 FEL MKV for the best-tested path.
- Dual-track DV structures have Kodi/CoreELEC limitations.
- TV-led vs player-led DV behavior can depend on TV/AVR EDID and CoreELEC build.
- This is not as appliance-like as Shield/Apple TV and requires CoreELEC setup.

Sources:
- https://github.com/CoreELEC/CoreELEC/releases
- https://discourse.coreelec.org/t/fel-support-in-coreelec/51098
- https://github.com/pannal/plex-for-kodi
- https://github.com/NT-Lists/Docs/blob/master/Plex-Compatibility-Matrix.md
