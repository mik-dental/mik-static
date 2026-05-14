# Google Sheet Price Setup

This site reads public display prices from a published Google Sheet CSV through
`/api/prices`. Razorpay checkout prices are still managed separately.

## 1. Create the Sheet

Create a Google Sheet with a tab named `prices` and this exact header row:

```csv
key,label,visible_price,compare_at_price,cta_text,enabled
```

Add these starter rows:

```csv
books_starter,Starter Volume,₹3,999,,Buy Starter Volume at ₹3,999,TRUE
books_master,Master Volume,₹6,999,,Buy Master Volume at ₹6,999,TRUE
books_combo,Starter + Master Combo,INR 9,999,INR 15,000,Buy Combo at ₹9,999,TRUE
torque_driver,Torque Driver,₹9,998,₹19,500,Buy Now for ₹9,998,TRUE
bi_mode_jet,Bi-Mode Jet,,,Buy Now,TRUE
```

Keep the `key` values unchanged. The client should only edit the price and CTA
columns.

## 2. Publish the CSV

1. In Google Sheets, open **File > Share > Publish to web**.
2. Choose only the `prices` tab.
3. Select **Comma-separated values (.csv)**.
4. Click **Publish** and copy the generated CSV URL.

## 3. Add the Vercel Environment Variable

In Vercel, add this environment variable:

```txt
PRICE_SHEET_CSV_URL=<published CSV URL>
```

Redeploy once after adding the variable.

## 4. Cache Behavior

`/api/prices` sends this cache header:

```txt
Cache-Control: public, s-maxage=43200, stale-while-revalidate=86400
```

Vercel can serve cached prices for 12 hours. After that, the next request can
refresh the cache in the background. Redeploying also forces fresh data.

If the API or Sheet is unavailable, the hardcoded HTML prices remain visible.
