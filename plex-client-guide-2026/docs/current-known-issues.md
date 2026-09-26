# Current known Plex client issues

**Snapshot date: 2026-09-26**

This file is intentionally time-sensitive. Move resolved items to a changelog rather than treating them as permanent device limitations.

## Android TV: DTS silent with refresh/resolution switching

Plex users reported DTS audio becoming silent when refresh-rate or resolution switching was enabled. Plex's 2026.19.0 Beta 1 release notes list a fix for Android TV.

- Report/discussion: https://forums.plex.tv/t/dts-and-dts-master-audio/939324/39
- Beta release notes: https://forums.plex.tv/t/plex-for-mobile-tvs-android-ios-android-tv-tvos-beta-release-notes/912796?page=5

**Temporary workaround:** disable Plex refresh-rate/resolution switching if DTS playback is silent, or test a 2026.19+ build once the fix reaches your device.

## Android TV: Dolby Vision 23.976/24 refresh-rate switching

Reports from Shield TV Pro, Chromecast with Google TV, Google TV Streamer, onn. 4K Pro, and other Android TV devices show Dolby Vision content remaining at 59.94/60 Hz while HDR10 content switches correctly.

- https://forums.plex.tv/t/new-experience-on-android-tv-refresh-rate-switching-does-not-work-for-24-fps-dolby-vision/941946

Treat this as a **current Plex client issue**, not proof that those devices cannot output 23.976 Hz Dolby Vision.

## Fire TV: DTS-HD MA issues in 2026 builds

Users on Fire TV Stick 4K Max Gen 2 report DTS core playback while DTS-HD MA passthrough fails in newer Plex builds.

- https://forums.plex.tv/t/firestick-app-update-3rd-sep-2026/942476

The NT-Lists matrix also lists the Fire TV Stick 4K Gen 2 as DTS = Yes, DTS-HD MA = No, DTS:X = No.

- https://github.com/NT-Lists/Docs/blob/master/Plex-Compatibility-Matrix.md

## Apple TV: PGS rendering regressions

A September 25, 2026 report against Plex 2026.18.0 describes PGS subtitle color/stretching problems on HDR and cropped content in the new Apple TV app.

- https://forums.plex.tv/t/subtitle-issues-on-new-apple-tv-app/943399

This is a rendering problem, not simply a “PGS unsupported” case.

## LG webOS: Dolby Vision can be lost when audio transcodes

On some recent LG webOS setups, MKV Dolby Vision can Direct Play, but selecting a TrueHD track that requires audio transcoding can cause playback to fall back from Dolby Vision to HDR.

- https://forums.plex.tv/t/when-transcoding-audio-dolby-vision-is-lost/938368
