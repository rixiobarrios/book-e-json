const express = require("express");
const app = express();
const parser = require("body-parser");

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

const bookmarksRoutes = require("./routes/bookmarks");
const usersRoutes = require("./routes/users");

app.use("/api/bookmarks/", bookmarksRoutes);
app.use("/api/users/", usersRoutes);

app.listen(8080, () => console.log("They see me rollin...on port 8080..."));
