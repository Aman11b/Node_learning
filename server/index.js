const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello from Home page");
});

app.get("/about", (req, res) => {
  return res.send("HI " + req.query.name);
});

app.listen(8000, () => {
  console.log("server started");
});

// function myHandler(req, res) {
//   if (req.url === "/favicon.ico") return res.end();
//   const log = `${Date.now()}: ${req.method}  ${req.url} New Request Received\n`;
//   const myUrl = url.parse(req.url, true);
//   //   console.log(myUrl);
//   fs.appendFile("log.txt", log, (err, data) => {
//     switch (myUrl.pathname) {
//       case "/":
//         res.end("Home page");
//         break;
//       case "/about":
//         const username = myUrl.query.name;
//         res.end(`Hi ${username}`);
//         break;
//       case "/signup":
//         if (req.method === "GET") res.end("This is a signup form");
//         else if (req.method === "POST") {
//           // DB Query
//           res.end("Success");
//         }
//       default:
//         res.end("404");
//     }
//   });
// }

// const server = http.createServer(myHandler);
// const server = http.createServer(app);

// server.listen(8000, () => {});
