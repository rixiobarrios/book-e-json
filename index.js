const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const app = express();

app.use("cors()");
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

const bookmarksRouter = require("./routes/bookmarks");
const usersRouter = require("./routes/users");

app.use("/api/bookmarks/", bookmarksRouter);
app.use("/api/users/", usersRouter);

app.get("/", (req, res) => {
  res.redirect("/api/bookmarks");
});

app.listen(8080, () => console.log("They see me rollin...on port 8080..."));
