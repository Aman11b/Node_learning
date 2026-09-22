const express = require("express");
const path = require("path");
const { handleRedirect } = require("./controllers/url");
const { connectToMongoDB } = require("./connect");
const urlRoutes = require("./routes/url");
const staticRoute = require("./routes/staticRouter");

const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("MongoDB Connected"),
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use("/url", urlRoutes);
app.use("/", staticRoute);

app.get("/:shortId", handleRedirect);

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
