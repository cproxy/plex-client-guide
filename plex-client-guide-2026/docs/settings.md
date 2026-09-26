# Plex client settings

These are conservative baseline settings intended to maximize Direct Play while keeping automatic fallback working.

## Android TV / Google TV / Shield / Fire TV

Recommended baseline:

- Local quality: **Original / Maximum**
- Direct Play: **On**
- Direct Stream: **On**
- Force Direct Play: **Off**
- Passthrough: **HDMI / On** when using a compatible AVR/soundbar
- Refresh Rate Switch: **On**, unless affected by a current Plex regression
- Resolution Switching: **Off** by default; turn on only if you want your display to handle scaling
- Burn Subtitles: **Automatic**

Plex documents passthrough and refresh-rate switching in the Android TV client settings. As of September 2026, current Android TV builds have active/recent regressions involving DTS + refresh-rate switching and Dolby Vision refresh-rate switching. See `current-known-issues.md`.

Source: https://support.plex.tv/articles/settings-android-tv/

## Apple TV — native Plex

Recommended baseline:

- Local quality: **Original / Maximum**
- Direct Play: **On**
- Burn Subtitles: **Automatic**
- Match Dynamic Range and Match Frame Rate: configure at the **tvOS** level for normal Apple TV use

Do not choose Apple TV expecting TrueHD Atmos or DTS:X bitstream passthrough. Apple TV's strength is the platform/UI and broad video compatibility, not raw home-theater bitstream support.

Source: https://support.plex.tv/articles/settings-plex-for-apple-tv/

## Apple TV — Infuse

Use Infuse when you want Apple TV but need substantially better local-media format handling than native Plex. Infuse can decode TrueHD and DTS-HD losslessly to multichannel LPCM. Object metadata from TrueHD Atmos and DTS:X is not preserved in that conversion path.

Apple hardware specs list Dolby Vision Profile 5 and HDR10+ on the current 3rd-generation Apple TV 4K.

Sources:
- https://www.apple.com/apple-tv-4k/specs/
- https://community.firecore.com/t/new-audio-passthrough-api-in-the-apple-docs/55921

## Roku

Recommended baseline:

- Video quality: **Original**
- Direct Play: **Auto/On**
- Direct Stream: **On**
- H.264 maximum level: leave at Plex default unless you have a tested reason to change it
- Burn Subtitles: **Automatic**

PGS subtitles are a common reason Roku users unexpectedly get a full video transcode. For remux-heavy libraries, keep an SRT option available.

Source: https://support.plex.tv/articles/204275243-settings-plex-for-roku/

## Built-in smart-TV apps

Use **Original/Maximum** quality and allow Direct Play. The biggest constraint is typically not the Plex toggle—it is the TV's native decoder and audio-output support. Avoid assuming eARC means the Plex TV app can pass TrueHD/DTS-HD; the app/TV codec stack may still require audio transcoding.

Source: https://support.plex.tv/articles/203810286-what-media-formats-are-supported/
