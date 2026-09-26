# Apple TV 4K 3rd generation

## Native Plex

Excellent platform and interface, but not a lossless-bitstream home-theater client.

Apple lists Dolby Vision Profile 5 and HDR10+ support on the current Apple TV 4K. The NT-Lists Plex matrix shows native Plex supporting DV P5 but not P7/P8 on the tested 3rd-gen configuration.

## Infuse

Infuse is the preferred Plex-connected playback path when broader local-media support matters.

- TrueHD and DTS-HD MA can be decoded losslessly to multichannel LPCM.
- TrueHD Atmos object metadata is not retained through this path.
- DTS:X object metadata is not retained.
- Infuse can handle DV P8 in community testing, but Apple TV is not a P7 FEL endpoint.

Sources:
- https://www.apple.com/apple-tv-4k/specs/
- https://github.com/NT-Lists/Docs/blob/master/Plex-Compatibility-Matrix.md
- https://community.firecore.com/t/new-audio-passthrough-api-in-the-apple-docs/55921
