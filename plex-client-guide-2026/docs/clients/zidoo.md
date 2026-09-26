# Zidoo + Plex integration

Zidoo's native player is strong for local remux playback, while Plex integration is typically achieved through an external-player bridge such as PlexToZidoo/ZidooPlexMod.

## Strengths

- Broad HDR/Dolby Vision format handling
- Lossless audio passthrough including TrueHD Atmos and DTS:X
- Native-player subtitle handling

## Dolby Vision Profile 7 caution

Do not equate P7 Dolby Vision output with full FEL processing. Zidoo-class playback is commonly described as using the base layer plus RPU metadata rather than reconstructing the FEL contribution the way the Ugoos/CoreELEC FEL path can.

Sources:
- https://github.com/bowlingbeeg/PlexToZidoo
- https://github.com/NT-Lists/Docs/blob/master/Plex-Compatibility-Matrix.md
