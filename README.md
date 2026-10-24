# Plex Playback Guide

A simple guide that helps viewers choose the Plex app for their screen and get smooth playback.

## Open the guide

https://cproxy.github.io/plex-client-guide/

The detailed compatibility research remains in [plex-client-guide-2026](plex-client-guide-2026/README.md).

## Publish the site

In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. The workflow at **.github/workflows/deploy-guide.yml** publishes the **site/** folder when it changes on **main**.

GitHub Pages is public for this public repository. The guide contains no server address or private account information.

## Update the guide

- Edit **site/content.js** to update device choices, setup steps, playback tips, and support links.
- Edit **site/index.html** for page structure and **site/styles.css** for appearance.
- Edit **site/app.js** only when the selector or page interactions need to change.

The page uses plain HTML, CSS, and JavaScript, with inline SVG icons. It has no package install or build step.

## Existing research

The earlier technical guide is retained in [plex-client-guide-2026](plex-client-guide-2026/README.md), including the compatibility matrix, settings notes, source index, and known issues.
