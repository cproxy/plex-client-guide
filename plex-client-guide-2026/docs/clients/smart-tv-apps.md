# Built-in Plex apps: LG webOS and Samsung Tizen

Built-in TV apps are convenient, but the television's decoder/output restrictions are usually the deciding factor.

## LG webOS

Plex's current smart-TV format documentation lists broad HEVC/MKV support and PGS subtitle support on webOS 4+ UHD models. Dolby Vision MKV behavior has improved on some recent LG firmware, but exact support remains model/firmware dependent. A current 2026 report shows Dolby Vision can fall back to HDR when audio such as TrueHD must be transcoded.

Sources:
- https://support.plex.tv/articles/203810286-what-media-formats-are-supported/
- https://forums.plex.tv/t/when-transcoding-audio-dolby-vision-is-lost/938368

## Samsung Tizen

Plex supports 2016+ Tizen-based Samsung sets. Samsung does not support Dolby Vision. Recent Samsung sets also lack DTS decoding, making them poor endpoints for libraries centered on Dolby Vision and DTS-HD/DTS:X remux audio. A 2026 Plex forum report also notes that Plex's Samsung profile can lag hardware AV1 capability on newer TVs.

Sources:
- https://support.plex.tv/articles/204080173-which-smart-tv-models-are-supported/
- https://forums.plex.tv/t/plex-player-audio-codecs/833109
- https://forums.plex.tv/t/samsung-tv-profile/938439
