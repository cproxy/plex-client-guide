window.PLEX_GUIDE = {
  categories: [
    {
      id: "tv",
      title: "Plex app on my TV",
      shortTitle: "TV app",
      description: "I use the Plex app built into the television."
    },
    {
      id: "streaming",
      title: "Plex app on a streaming device",
      shortTitle: "Streaming device",
      description: "I use Apple TV, Fire TV Stick, Roku, or Google TV connected to my TV."
    },
    {
      id: "console",
      title: "Plex app on a game console",
      shortTitle: "Game console",
      description: "I use Plex on Xbox or a supported PlayStation."
    },
    {
      id: "browser",
      title: "Plex in a web browser",
      shortTitle: "Web browser",
      description: "I watch on a computer using Chrome, Edge, Firefox, or Safari."
    }
  ],
  defaultSettings: [
    {
      label: "Home or local quality",
      value: "On your home network, choose Original or Maximum."
    },
    {
      label: "Direct Play and Direct Stream",
      value: "Turn them On when available, or leave them on Auto."
    },
    {
      label: "Subtitles",
      value: "Leave burn-in on Automatic. If a title transcodes, test with subtitles off or try a text subtitle such as SRT."
    }
  ],
  clients: [
    {
      id: "samsung-tv",
      category: "tv",
      name: "Samsung TV",
      platform: "Tizen · built-in Plex app",
      summary: "A convenient way to watch using the TV remote.",
      setup: [
        "Open the TV app store and install Plex, or launch it if it is already installed.",
        "Sign in to Plex. If the TV shows a link code, follow the on-screen instructions to connect your account.",
        "Choose the shared Plex server and open the Movies or TV library."
      ],
      notes: [
        "Plex app availability and supported formats vary by TV model and year.",
        "If the same title plays directly on a streaming box but transcodes on the TV, the TV app's format support may be the difference."
      ],
      tryIfTranscoding: [
        "Check that Home or Local quality is Original or Maximum.",
        "Try another audio track and briefly turn subtitles off to compare."
      ]
    },
    {
      id: "lg-tv",
      category: "tv",
      name: "LG TV",
      platform: "webOS · built-in Plex app",
      summary: "Use the TV's Plex app when it is supported on your model.",
      setup: [
        "Open the LG Content Store and install Plex, or launch the installed Plex app.",
        "Sign in to Plex. If the TV shows a link code, follow the instructions on screen.",
        "Choose the shared Plex server and open a library."
      ],
      notes: [
        "Supported LG models and playback formats depend on the TV generation and webOS version.",
        "The TV may play the video directly while Plex converts an audio track or subtitle format."
      ],
      tryIfTranscoding: [
        "Set Home or Local quality to Original or Maximum.",
        "Try a different audio track or subtitle option."
      ]
    },
    {
      id: "roku-tv",
      category: "tv",
      name: "Roku TV",
      platform: "Roku OS · built-in Plex app",
      summary: "The Roku Plex app runs directly on the TV.",
      setup: [
        "Open Streaming Channels, find Plex, and install the channel if needed.",
        "Open Plex and sign in or follow the on-screen linking instructions.",
        "Select the shared server and start a movie or episode."
      ],
      notes: [
        "Roku TV models and the Roku app do not support every audio, video, and subtitle format.",
        "Image-based subtitles can be a reason Plex converts a video. A text subtitle such as SRT may work better."
      ],
      tryIfTranscoding: [
        "Set video quality to Original.",
        "Try the same title with subtitles off, then with another subtitle track."
      ]
    },
    {
      id: "fire-tv-tv",
      category: "tv",
      name: "Amazon Fire TV television",
      platform: "Fire TV · built-in Plex app",
      summary: "Use the Plex app on the Fire TV television itself.",
      setup: [
        "Open the TV's app store and install Plex, or launch it if it is already installed.",
        "Open Plex and sign in. Follow any on-screen instructions to link your account.",
        "Choose the shared Plex server and open a library."
      ],
      notes: [
        "Choose this option when Plex is running directly on the Fire TV television. If you use a Fire TV Stick or Cube plugged into the TV, choose the streaming-device option."
      ],
      tryIfTranscoding: [
        "Set Home or Local quality to Original or Maximum.",
        "Try another audio track or subtitle option."
      ]
    },
    {
      id: "google-tv",
      category: "tv",
      name: "Google TV or Android TV",
      platform: "Built-in TV app",
      summary: "Use the Plex app on TVs that run Google TV or Android TV.",
      setup: [
        "Open Google Play on the TV and install Plex.",
        "Open Plex and sign in or follow the link instructions shown on screen.",
        "Choose the shared server and open a library."
      ],
      notes: [
        "A TV's built-in app and an external Google TV or Android TV box can support different formats.",
        "If a format causes a problem, try a different audio track or subtitle option before changing other settings."
      ],
      tryIfTranscoding: [
        "Set Home or Local quality to Original or Maximum.",
        "If available, set Direct Play and Direct Stream to On or Auto."
      ]
    },
    {
      id: "xbox",
      category: "console",
      name: "Xbox",
      platform: "Xbox app · supported models",
      summary: "Use the Plex app from the console's app store.",
      setup: [
        "Open the Microsoft Store on Xbox and search for Plex.",
        "Install and launch Plex, then sign in or follow the linking instructions on screen.",
        "Choose the shared server and open the library you want."
      ],
      notes: [
        "The exact settings and supported formats depend on the Xbox model and Plex app version.",
        "A console's HDMI connection does not determine whether Plex can play a file directly; the Plex app and audio/video format also matter."
      ],
      tryIfTranscoding: [
        "Set Home or Local quality to Original or Maximum.",
        "Try another audio track or turn subtitles off briefly to compare."
      ]
    },
    {
      id: "playstation",
      category: "console",
      name: "PlayStation",
      platform: "Plex app · where offered for your console",
      summary: "Use the Plex app if it is available in your console's store.",
      setup: [
        "Open the PlayStation Store and search for Plex.",
        "If the Plex app is available for your console, install it and follow the sign-in instructions.",
        "Choose the shared Plex server and open a library."
      ],
      notes: [
        "App availability and menus can vary by PlayStation model and region.",
        "If Plex is not listed for your console, use a supported TV or streaming-device app instead."
      ],
      tryIfTranscoding: [
        "Set Home or Local quality to Original or Maximum.",
        "Try a different audio track or temporarily turn subtitles off."
      ]
    },
    {
      id: "apple-tv",
      category: "streaming",
      name: "Apple TV",
      platform: "tvOS · Plex app",
      summary: "Use the Plex app on Apple TV 4K or another supported Apple TV.",
      setup: [
        "Install Plex from the App Store on Apple TV.",
        "Open Plex and sign in or follow the on-screen link instructions.",
        "Select the shared server and start playing."
      ],
      notes: [
        "Plex's settings and supported formats can differ from other tvOS media apps.",
        "For everyday use, leave subtitle handling on Automatic and let Plex choose a compatible playback path."
      ],
      tryIfTranscoding: [
        "Set Home or Local quality to Original or Maximum.",
        "Try another audio track or a different subtitle option."
      ]
    },
    {
      id: "fire-tv",
      category: "streaming",
      name: "Amazon Fire TV Stick or Cube",
      platform: "Fire TV streaming player · Plex app",
      summary: "Use the Plex app on a Fire TV Stick or Cube connected to your screen.",
      setup: [
        "Find Plex in the Fire TV app store and install it.",
        "Open Plex and sign in or follow the linking instructions on screen.",
        "Choose the shared server and browse the available libraries."
      ],
      notes: [
        "Fire TV is a separate app platform from Google or Android TV. Most models use Amazon's Android-based Fire OS; some newer models, including the Fire TV Stick 4K Select, use Vega OS.",
        "Menus and format support vary by Fire TV model and app version. If an audio track causes trouble, try another track before changing video quality."
      ],
      tryIfTranscoding: [
        "Set Home or Local quality to Original or Maximum.",
        "If playback transcodes, try a different audio track and subtitle option."
      ]
    },
    {
      id: "roku-player",
      category: "streaming",
      name: "Roku streaming player",
      platform: "Roku Ultra, Express, Streaming Stick, and similar",
      summary: "Use Roku's Plex app on a separate streaming player.",
      setup: [
        "Open Streaming Channels, find Plex, and install the channel if needed.",
        "Launch Plex and sign in or follow the on-screen linking instructions.",
        "Select the shared server and choose a movie or show."
      ],
      notes: [
        "Roku model and app support vary across audio, video, and subtitle formats.",
        "If a subtitle makes playback transcode, try a text subtitle such as SRT or turn subtitles off once."
      ],
      tryIfTranscoding: [
        "Set video quality to Original.",
        "Try the title again with subtitles off, then with another subtitle track."
      ]
    },
    {
      id: "google-streamer",
      category: "streaming",
      name: "Google TV, Chromecast, or Shield",
      platform: "Google TV / Android TV · Plex app",
      summary: "Use Plex on a Google TV Streamer, Chromecast with Google TV, or NVIDIA Shield.",
      setup: [
        "Open Google Play on the device and install Plex.",
        "Open Plex and sign in or follow the linking instructions.",
        "Choose the shared server and start playback."
      ],
      notes: [
        "The Plex Android TV app, device model, and audio connection all affect which formats can play directly.",
        "If playback is silent or transcodes unexpectedly, try another audio track."
      ],
      tryIfTranscoding: [
        "Set Home or Local quality to Original or Maximum.",
        "Try subtitles off once, then test another audio track if needed."
      ]
    },
    {
      id: "plex-web",
      category: "browser",
      name: "Plex Web",
      platform: "Chrome, Edge, Firefox, or Safari",
      summary: "Watch at app.plex.tv or open Plex Web from a computer.",
      setup: [
        "Open app.plex.tv in a current browser and sign in to your Plex account.",
        "Choose the shared server and open the library.",
        "In Plex Web Player settings, enable Direct Play when the option is available."
      ],
      notes: [
        "A browser can play only the formats it supports. The same file may play directly in a TV or streaming-device app but transcode in a browser.",
        "If browser playback keeps converting a title, try the Plex app for your TV or streaming device."
      ],
      tryIfTranscoding: [
        "In Plex Web Player settings, enable Direct Play and set Home Streaming quality to Original when available.",
        "Try a different audio track or subtitle option.",
        "Compare with the Plex app on another device."
      ]
    }
  ],
  sources: [
    {
      label: "Plex: Streaming overview",
      url: "https://support.plex.tv/articles/200430303-streaming-overview/"
    },
    {
      label: "Plex: Supported apps and devices",
      url: "https://support.plex.tv/articles/203082707-supported-plex-companion-apps/"
    },
    {
      label: "Plex: Smart TV media formats",
      url: "https://support.plex.tv/articles/203810286-what-media-formats-are-supported/"
    },
    {
      label: "Plex: Plex Web Player settings",
      url: "https://support.plex.tv/articles/200289408-plex-web-app-settings/"
    },
    {
      label: "Amazon: Fire OS overview",
      url: "https://developer.amazon.com/docs/fire-tv/fire-os-overview.html"
    },
    {
      label: "Amazon: Identify Fire TV devices",
      url: "https://developer.amazon.com/docs/device-specs/identify-fire-tv-devices.html"
    }
  ]
};