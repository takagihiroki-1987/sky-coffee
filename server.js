// httpモジュールをrequireする
const http = require("http");
// ポート番号を指定
const port = 3000;

const server = http.createServer((req, res) => {
  // 200のステータスコードとヘッダーを出力
  res.writeHead(200, { "Content-Type": "text/html" });
  // 出力するタグ
  res.write("<h1>Hello World</h1>");
  // 終わり
  res.end();
});

// 表示する関数
server.listen(port, () => {
  console.log("Server running");
});
