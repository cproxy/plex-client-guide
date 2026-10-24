# Plex Client Guide

A visual, end-user guide to watching Plex on smart TVs, game consoles, streaming devices, and web browsers. It explains the settings that favor Direct Play, quick checks for unexpected transcoding, and how to request a title for later.

## Open the interactive guide

After GitHub Pages is enabled, the guide will be available at:

**https://cproxy.github.io/plex-client-guide/**

The detailed compatibility research remains in [plex-client-guide-2026](plex-client-guide-2026/README.md).

## Publish the site

In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. The workflow at **.github/workflows/deploy-guide.yml** publishes the **site/** folder when it changes on **main**.

GitHub Pages is public for this public repository. The guide contains no server address or private account information.

## Update the guide

- Edit **site/content.js** to update device descriptions, steps, support links, and the request portal URL.
- Set **requestPortalUrl** in that file when the media request page is ready.
- Edit **site/index.html** for page structure and **site/styles.css** for appearance.
- Edit **site/app.js** only when the selector or page interactions need to change.

The page uses plain HTML, CSS, JavaScript, and inline vector illustrations. It has no package install or build step.

## Existing research

The earlier technical guide is retained in [plex-client-guide-2026](plex-client-guide-2026/README.md), including the compatibility matrix, settings notes, source index, and known issues.