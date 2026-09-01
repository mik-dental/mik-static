/* MIK checkout-start attribution. This intentionally measures on-site CTA clicks only. */
(function (window, document) {
  "use strict";

  var ATTRIBUTION_TTL_MS = 30 * 24 * 60 * 60 * 1000;
  var FIRST_TOUCH_KEY = "mik_first_touch";
  var LAST_TOUCH_KEY = "mik_last_touch";
  var SESSION_TOUCH_KEY = "mik_session_touch";
  var TRACKED_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid", "ttclid", "msclkid"];
  var PRODUCT_BY_CHECKOUT_PATH = {
    "/rzp/mikstarter": { item_id: "mikstarter", item_name: "Starter Volume", price: 2899 },
    "/rzp/mikcombo": { item_id: "mikcombo", item_name: "Combo (Starter + Master)", price: 7999 },
    "/rzp/mikmaster": { item_id: "mikmaster", item_name: "Master Volume", price: 5799 },
    "/rzp/XB9bYbd": { item_id: "implatorque_versa", item_name: "Versa Torque Kit", price: 9998 },
    "/rzp/kXnVAJlP": { item_id: "bi_mode_jet", item_name: "Bi-Mode Jet", price: null },
  };
  var memoryStore = {};

  function safeValue(value) {
    if (!value) return "";
    return String(value).replace(/[\u0000-\u001F\u007F]/g, "").trim().slice(0, 255);
  }

  function removeStored(key) {
    delete memoryStore[key];
    try { window.localStorage.removeItem(key); } catch (error) { /* Storage is unavailable. */ }
  }

  function readStored(key) {
    var raw;
    try { raw = window.localStorage.getItem(key); } catch (error) { raw = memoryStore[key]; }
    if (!raw) return null;
    try {
      var value = JSON.parse(raw);
      if (!value.expires_at || value.expires_at < Date.now()) {
        removeStored(key);
        return null;
      }
      return value;
    } catch (error) {
      removeStored(key);
      return null;
    }
  }

  function writeStored(key, value) {
    var serialized = JSON.stringify(value);
    memoryStore[key] = serialized;
    try { window.localStorage.setItem(key, serialized); } catch (error) { /* Memory is the fallback. */ }
  }

  function readIncomingTouch() {
    var params = new window.URLSearchParams(window.location.search);
    var touch = {};
    var hasCampaignSignal = false;
    TRACKED_PARAMS.forEach(function (key) {
      var value = safeValue(params.get(key));
      if (value) {
        touch[key] = value;
        hasCampaignSignal = true;
      }
    });
    if (hasCampaignSignal) {
      if (!touch.utm_source) {
        if (touch.gclid) { touch.inferred_source = "google"; touch.inferred_medium = "cpc"; }
        else if (touch.fbclid) { touch.inferred_source = "facebook"; touch.inferred_medium = "cpc"; }
        else if (touch.ttclid) { touch.inferred_source = "tiktok"; touch.inferred_medium = "cpc"; }
        else if (touch.msclkid) { touch.inferred_source = "bing"; touch.inferred_medium = "cpc"; }
      }
      return touch;
    }
    if (!document.referrer) return null;
    try {
      var referrer = new window.URL(document.referrer);
      var hostname = referrer.hostname.toLowerCase();
      var isInternal = hostname === window.location.hostname.toLowerCase();
      var isPaymentProvider = hostname === "rzp.io" || hostname.endsWith(".razorpay.com");
      if (!isInternal && !isPaymentProvider) return { inferred_source: hostname, inferred_medium: "referral" };
    } catch (error) { /* Ignore malformed referrers. */ }
    return null;
  }

  function addTouchMetadata(touch) {
    var now = Date.now();
    touch.captured_at = now;
    touch.expires_at = now + ATTRIBUTION_TTL_MS;
    touch.landing_path = window.location.pathname;
    return touch;
  }

  function getAttribution() {
    var firstTouch = readStored(FIRST_TOUCH_KEY);
    var lastTouch = readStored(LAST_TOUCH_KEY);
    return { first_touch: firstTouch, last_non_direct_touch: lastTouch, active_touch: lastTouch || firstTouch || null };
  }

  function attributionPayload(attribution) {
    var active = attribution.active_touch || {};
    var first = attribution.first_touch || {};
    return {
      source: active.utm_source || active.inferred_source || "direct",
      medium: active.utm_medium || active.inferred_medium || "direct",
      campaign: active.utm_campaign || "",
      term: active.utm_term || "",
      content: active.utm_content || "",
      landing_path: active.landing_path || window.location.pathname,
      first_touch_source: first.utm_source || first.inferred_source || "direct",
      first_touch_campaign: first.utm_campaign || "",
    };
  }

  function pushEvent(payload) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
  }

  var incomingTouch = readIncomingTouch();
  var isNewTouch = Boolean(incomingTouch);
  if (incomingTouch) {
    var savedTouch = addTouchMetadata(incomingTouch);
    if (!readStored(FIRST_TOUCH_KEY)) writeStored(FIRST_TOUCH_KEY, savedTouch);
    writeStored(LAST_TOUCH_KEY, savedTouch);
    try { window.sessionStorage.setItem(SESSION_TOUCH_KEY, JSON.stringify(savedTouch)); } catch (error) { /* Optional cache. */ }
  }

  var initialAttribution = getAttribution();
  pushEvent({ event: "mik_attribution_ready", page_path: window.location.pathname, is_new_campaign: isNewTouch, attribution: attributionPayload(initialAttribution) });

  document.addEventListener("click", function (event) {
    var target = event.target;
    if (!target || !target.closest) return;
    var link = target.closest("a[href]");
    if (!link) return;
    var destination;
    try { destination = new window.URL(link.href, window.location.href); } catch (error) { return; }
    if (destination.protocol !== "https:" || destination.hostname.toLowerCase() !== "rzp.io") return;
    var product = PRODUCT_BY_CHECKOUT_PATH[destination.pathname];
    if (!product) return;

    var configuredPrice = Number(link.getAttribute("data-product-price"));
    var configuredName = safeValue(link.getAttribute("data-product-name"));
    var price = Number.isFinite(configuredPrice) && configuredPrice > 0 ? configuredPrice : product.price;
    var item = { item_id: product.item_id, item_name: configuredName || product.item_name, quantity: 1 };
    if (price) item.price = price;

    var payload = {
      event: "mik_initiate_checkout",
      product: item.item_name,
      product_id: item.item_id,
      cta_placement: safeValue(link.getAttribute("data-track-placement")) || "link",
      attribution: attributionPayload(getAttribution()),
      ecommerce: { currency: "INR", items: [item] },
    };
    if (price) payload.ecommerce.value = price;
    pushEvent(payload);
    document.dispatchEvent(new window.CustomEvent("mik:initiate_checkout", { detail: payload }));
  }, true);

  window.MikTracking = {
    getAttribution: getAttribution,
    clearAttribution: function () {
      removeStored(FIRST_TOUCH_KEY);
      removeStored(LAST_TOUCH_KEY);
      try { window.sessionStorage.removeItem(SESSION_TOUCH_KEY); } catch (error) { /* Optional cache. */ }
    },
  };
})(window, document);
