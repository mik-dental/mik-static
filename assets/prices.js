(function () {
  var PRICE_ENDPOINT = "/api/prices";

  function getPriceValue(prices, key, field) {
    if (!prices || !prices[key] || typeof prices[key][field] !== "string") {
      return "";
    }

    return prices[key][field].trim();
  }

  function updatePriceTargets(prices) {
    document.querySelectorAll("[data-price-key][data-price-field]").forEach(
      function (target) {
        var key = target.getAttribute("data-price-key");
        var field = target.getAttribute("data-price-field");
        var isOptional = target.hasAttribute("data-price-optional");
        var value = getPriceValue(prices, key, field);

        if (!value) {
          if (isOptional) {
            target.hidden = true;
          }

          return;
        }

        target.textContent = value;
        target.hidden = false;
      },
    );
  }

  function loadPrices() {
    fetch(PRICE_ENDPOINT, {
      headers: {
        Accept: "application/json",
      },
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Price request failed");
        }

        return response.json();
      })
      .then(updatePriceTargets)
      .catch(function () {
        // Keep the hardcoded HTML fallback prices if the API is unavailable.
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadPrices);
  } else {
    loadPrices();
  }
})();
