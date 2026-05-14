const CACHE_CONTROL = "public, s-maxage=43200, stale-while-revalidate=86400";

const DEFAULT_PRICES = {
  books_starter: {
    visible_price: "₹3,999",
    compare_at_price: "",
    cta_text: "Buy Starter Volume at ₹3,999",
  },
  books_master: {
    visible_price: "₹6,999",
    compare_at_price: "",
    cta_text: "Buy Master Volume at ₹6,999",
  },
  books_combo: {
    visible_price: "INR 9,999",
    compare_at_price: "INR 15,000",
    cta_text: "Buy Combo at ₹9,999",
  },
  torque_driver: {
    visible_price: "₹9,998",
    compare_at_price: "₹19,500",
    cta_text: "Buy Now for ₹9,998",
  },
  bi_mode_jet: {
    visible_price: "",
    compare_at_price: "",
    cta_text: "Buy Now",
  },
};

const PRICE_FIELDS = ["visible_price", "compare_at_price", "cta_text"];

function parseCsv(csv) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < csv.length; i += 1) {
    const char = csv[i];
    const next = csv[i + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        field += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(field);
      field = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") {
        i += 1;
      }
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
      continue;
    }

    field += char;
  }

  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }

  return rows.filter((csvRow) =>
    csvRow.some((cell) => cell.trim().length > 0),
  );
}

function normalizePrices(csv) {
  const rows = parseCsv(csv.trim());

  if (rows.length < 2) {
    return {};
  }

  const headers = rows[0].map((header) =>
    header.replace(/^\uFEFF/, "").trim().toLowerCase(),
  );
  const keyIndex = headers.indexOf("key");
  const enabledIndex = headers.indexOf("enabled");

  if (keyIndex === -1) {
    return {};
  }

  return rows.slice(1).reduce((prices, row) => {
    const key = (row[keyIndex] || "").trim();

    if (!key) {
      return prices;
    }

    if (enabledIndex !== -1) {
      const enabled = (row[enabledIndex] || "").trim().toLowerCase();

      if (["false", "no", "0", "disabled"].includes(enabled)) {
        return prices;
      }
    }

    const item = {};

    PRICE_FIELDS.forEach((fieldName) => {
      const index = headers.indexOf(fieldName);
      item[fieldName] = index === -1 ? "" : (row[index] || "").trim();
    });

    prices[key] = item;
    return prices;
  }, {});
}

function sendJson(res, statusCode, body, cacheControl) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", cacheControl);
  res.end(JSON.stringify(body));
}

module.exports = async function pricesHandler(req, res) {
  if (req.method && req.method !== "GET" && req.method !== "HEAD") {
    res.statusCode = 405;
    res.setHeader("Allow", "GET, HEAD");
    res.end();
    return;
  }

  const sheetUrl = process.env.PRICE_SHEET_CSV_URL;

  if (!sheetUrl) {
    sendJson(res, 200, DEFAULT_PRICES, "no-store");
    return;
  }

  try {
    const response = await fetch(sheetUrl);

    if (!response.ok) {
      throw new Error(`Sheet request failed with ${response.status}`);
    }

    const csv = await response.text();
    const prices = normalizePrices(csv);

    sendJson(res, 200, prices, CACHE_CONTROL);
  } catch (error) {
    sendJson(
      res,
      502,
      {
        error: "Unable to load price sheet",
      },
      "no-store",
    );
  }
};
