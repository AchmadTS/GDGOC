import http from "http";

let message = "Belum ada pesan";

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/message") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(message);
  } else if (req.method === "POST" && req.url === "/message") {
    let title = "";
    req.on("data", (chunk) => {
      title += chunk;
    });
    req.on("end", () => {
      message = title;
      res.writeHead(201, { "Content-Type": "text/plain" });
      res.end("Pesan berhasil disimpan");
    });
  } else if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Ini adalah halaman home");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Tidak ditemukan endpointnya!");
  }
});

server.listen(3000, () => {
  console.log("Server berjalan di http://localhost:3000");
});
