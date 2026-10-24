(function () {
  "use strict";

  var guide = window.PLEX_GUIDE;
  var categoryChoices = document.getElementById("categoryChoices");
  var searchInput = document.getElementById("deviceSearch");
  var pickerHint = document.getElementById("pickerHint");
  var deviceResults = document.getElementById("deviceResults");
  var resultsTitle = document.getElementById("resultsTitle");
  var deviceCount = document.getElementById("deviceCount");
  var deviceCards = document.getElementById("deviceCards");
  var deviceGuide = document.getElementById("deviceGuide");
  var supportLinks = document.getElementById("supportLinks");
  var activeCategory = null;
  var selectedClient = null;

  var iconMarkup = {
    tv: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="25" height="18" rx="3"></rect><path d="M11 28h10M16 23v5"></path><path d="m13 11 7 3.5-7 3.5z" fill="currentColor" stroke="none"></path></svg>',
    console: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11h14c3.3 0 5.3 2.1 6 5.6l1 5.2c.5 2.5-2.2 4-4 2.1l-3.1-3.3H9.1L6 23.9c-1.8 1.9-4.5.4-4-2.1l1-5.2C3.7 13.1 5.7 11 9 11z"></path><path d="M10 14v6M7 17h6M21.5 16.5h.01M25 19.5h.01"></path></svg>',
    streaming: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="6" width="22" height="20" rx="6"></rect><path d="M13 12v8l7-4z" fill="currentColor" stroke="none"></path><path d="M11 3 8 6M21 3l3 3"></path></svg>',
    browser: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="25" height="21" rx="3"></rect><path d="M4 10h24M8 7.5h.01M11.5 7.5h.01M15 7.5h.01"></path><path d="m13 14 7 3.5-3.1 1-1.5 3.1z" fill="currentColor" stroke="none"></path></svg>'
  };

  function element(tag, className, text) {
    var item = document.createElement(tag);
    if (className) item.className = className;
    if (typeof text === "string") item.textContent = text;
    return item;
  }

  function icon(kind) {
    var wrapper = element("span", "category-icon");
    wrapper.setAttribute("aria-hidden", "true");
    wrapper.innerHTML = iconMarkup[kind] || iconMarkup.tv;
    return wrapper;
  }

  function categoryFor(id) {
    return guide.categories.find(function (category) {
      return category.id === id;
    });
  }

  function renderCategories() {
    categoryChoices.replaceChildren();
    guide.categories.forEach(function (category) {
      var button = element("button", "category-card");
      button.type = "button";
      button.setAttribute("aria-pressed", String(activeCategory === category.id));
      button.appendChild(icon(category.id));
      var copy = element("span", "category-copy");
      copy.appendChild(element("strong", "", category.title));
      copy.appendChild(element("span", "", category.description));
      button.appendChild(copy);
      button.addEventListener("click", function () {
        searchInput.value = "";
        activeCategory = category.id;
        selectedClient = null;
        renderCategories();
        renderDeviceChoices();
        deviceGuide.hidden = true;
        deviceGuide.replaceChildren();
      });
      categoryChoices.appendChild(button);
    });
  }

  function listBlock(title, items, ordered) {
    var block = element("section", "guide-block");
    block.appendChild(element("h4", "", title));
    var list = element(ordered ? "ol" : "ul", "guide-list");
    items.forEach(function (text, index) {
      var row = element("li");
      row.appendChild(element("span", "list-marker", ordered ? String(index + 1) : "•"));
      row.appendChild(element("span", "", text));
      list.appendChild(row);
    });
    block.appendChild(list);
    return block;
  }

  function settingsBlock() {
    var block = element("section", "guide-block");
    block.appendChild(element("h4", "", "Settings to try first"));
    var list = element("dl", "settings-list");
    guide.defaultSettings.forEach(function (setting) {
      var row = element("div", "setting-row");
      row.appendChild(element("dt", "", setting.label));
      row.appendChild(element("dd", "", setting.value));
      list.appendChild(row);
    });
    block.appendChild(list);
    return block;
  }

  function renderGuide(client) {
    deviceGuide.replaceChildren();
    deviceGuide.hidden = false;

    var header = element("header", "guide-header");
    header.appendChild(element("p", "guide-label", "Selected device"));
    var title = element("h3", "", client.name);
    title.id = "guideTitle";
    header.appendChild(title);
    header.appendChild(element("p", "guide-platform", client.platform));
    header.appendChild(element("p", "guide-summary", client.summary));

    var category = categoryFor(client.category);
    var callout = element("div", "guide-callout");
    callout.appendChild(element("strong", "", category ? category.title : "Plex app"));
    callout.appendChild(element("span", "", "App menus and settings vary by model and version. If an option is not shown on your screen, skip it."));
    header.appendChild(callout);

    var content = element("div", "guide-content");
    content.appendChild(listBlock("Get started", client.setup, true));
    content.appendChild(settingsBlock());
    if (client.notes && client.notes.length) {
      content.appendChild(listBlock("A few things to know", client.notes, false));
    }
    if (client.tryIfTranscoding && client.tryIfTranscoding.length) {
      content.appendChild(listBlock("If this title transcodes", client.tryIfTranscoding, true));
    }

    deviceGuide.appendChild(header);
    deviceGuide.appendChild(content);
  }

  function renderDeviceChoices() {
    var query = searchInput.value.trim().toLowerCase();
    var matches = guide.clients.filter(function (client) {
      var inCategory = !activeCategory || client.category === activeCategory;
      var haystack = (client.name + " " + client.platform + " " + client.summary).toLowerCase();
      return inCategory && (!query || haystack.indexOf(query) !== -1);
    });

    var shouldShow = Boolean(activeCategory || query);
    deviceResults.hidden = !shouldShow;
    pickerHint.hidden = shouldShow;

    if (!shouldShow) {
      deviceCards.replaceChildren();
      deviceGuide.hidden = true;
      deviceGuide.replaceChildren();
      return;
    }

    var category = activeCategory ? categoryFor(activeCategory) : null;
    resultsTitle.textContent = query ? "Matching devices" : (category ? category.title + " options" : "Devices");
    deviceCount.textContent = matches.length + (matches.length === 1 ? " option" : " options");
    deviceCards.replaceChildren();

    if (!matches.length) {
      deviceCards.appendChild(element("p", "empty-results", "No matching device found. Try a shorter search or choose a device family."));
      deviceGuide.hidden = true;
      deviceGuide.replaceChildren();
      return;
    }

    matches.forEach(function (client) {
      var button = element("button", "device-card");
      button.type = "button";
      button.setAttribute("aria-pressed", String(selectedClient === client.id));
      button.appendChild(icon(client.category));
      var copy = element("span", "device-copy");
      copy.appendChild(element("strong", "", client.name));
      copy.appendChild(element("span", "", client.platform));
      button.appendChild(copy);
      button.appendChild(element("span", "card-arrow", "↗"));
      button.addEventListener("click", function () {
        selectedClient = client.id;
        renderDeviceChoices();
        renderGuide(client);
      });
      deviceCards.appendChild(button);
    });

    if (selectedClient) {
      var selected = guide.clients.find(function (client) {
        return client.id === selectedClient;
      });
      if (selected && matches.some(function (client) { return client.id === selectedClient; })) {
        renderGuide(selected);
      } else {
        selectedClient = null;
        deviceGuide.hidden = true;
        deviceGuide.replaceChildren();
      }
    }
  }

  function renderSources() {
    supportLinks.replaceChildren();
    guide.sources.forEach(function (source) {
      var link = element("a", "resource-link");
      link.href = source.url;
      link.target = "_blank";
      link.rel = "noopener";
      link.appendChild(element("span", "", source.label));
      link.appendChild(element("span", "", "↗"));
      supportLinks.appendChild(link);
    });
  }

  categoryChoices.setAttribute("role", "group");
  renderCategories();
  renderDeviceChoices();
  renderSources();

  searchInput.addEventListener("input", function () {
    if (searchInput.value.trim()) {
      activeCategory = null;
      selectedClient = null;
      renderCategories();
    }
    renderDeviceChoices();
  });
})();