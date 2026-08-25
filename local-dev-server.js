const fs = require("fs");
const http = require("http");
const path = require("path");

const PORT = Number(process.env.PORT || 8000);
const HOST = process.env.HOST || "127.0.0.1";
const ROOT = __dirname;

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp4": "video/mp4",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webm": "video/webm",
  ".webp": "image/webp",
};

function getStaticPath(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0]).replace(/\/+$/, "") || "/";
  const routes = {
    "/": "books.html",
    "/books": "books.html",
    "/torque": "torque.html",
    "/bi-mode-jet": "bi-mode-jet.html",
    "/books/returns-and-exchange": "books/returns-and-exchange.html",
    "/books/returns-and-exchange.html": "books/returns-and-exchange.html",
  };
  const relativePath = routes[cleanPath] || cleanPath.replace(/^\/+/, "");
  let filePath = path.normalize(path.join(ROOT, relativePath));

  if (!filePath.startsWith(ROOT)) {
    return null;
  }

  // 1. Direct file match
  if (fs.existsSync(filePath) && !fs.statSync(filePath).isDirectory()) {
    return filePath;
  }

  // 2. Append .html match
  if (fs.existsSync(filePath + ".html") && !fs.statSync(filePath + ".html").isDirectory()) {
    return filePath + ".html";
  }

  // 3. Directory index.html match
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    const indexPath = path.join(filePath, "index.html");
    if (fs.existsSync(indexPath) && !fs.statSync(indexPath).isDirectory()) {
      return indexPath;
    }
  }

  return null;
}

const server = http.createServer((req, res) => {
  const filePath = getStaticPath(req.url || "/");

  if (!filePath || !fs.existsSync(filePath)) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("Not found");
    return;
  }

  res.statusCode = 200;
  res.setHeader(
    "Content-Type",
    MIME_TYPES[path.extname(filePath).toLowerCase()] || "application/octet-stream",
  );
  fs.createReadStream(filePath).pipe(res);
});

server.listen(PORT, HOST, () => {
  console.log(`Local dev server running at http://${HOST}:${PORT}`);
});
