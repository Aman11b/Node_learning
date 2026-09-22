const fs = require("fs");
const os = require("os");

// Synchronous (blocked )
fs.writeFileSync("./test.txt", "Hey there");

// asychronous (non blocked)
fs.writeFile("./test1.txt", "hello", (err) => {});

// reading file synchronous
const result = fs.readFileSync("./read1.txt", "utf-8");
console.log(result);

// reading file asynchronous
fs.readFile("./test.txt", "utf-8", (err, res) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log(res);
  }
});

// append
fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());

fs.appendFile("./test.txt", "\nhi there", (err) => {});

// Copy
fs.copyFileSync("./test.txt", "./copy.txt");

// delete
fs.unlinkSync("./copy.txt");

// status
console.log(fs.statSync("./test.txt"));

// make directory

fs.mkdirSync("my-doc/a/b", { recursive: true });

console.log(os.cpus().length);
