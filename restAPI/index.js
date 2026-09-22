const express = require("express");
const { connectMongoDb } = require("./connection");
const useRouter = require("./routes/user");

const { logReqRes } = require("./middleware");

const app = express();
const PORT = 8000;

// connection

// moddleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logReqRes("log.txt"));
app.use("/api/users", useRouter);

connectMongoDb("mongodb://127.0.0.1:27017/node_learning")
  .then(() => {
    app.listen(PORT, () => console.log(`Server started at PORT: ${PORT} `));
  })
  .catch((err) => {
    console.log("MongoDB connection failed");
  });
