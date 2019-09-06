const express = require("express");
const app = express();

const bookmarksController = require("./controllers/bookmarks");
const usersController = require("./controllers/users");

app.use("/api/bookmarks/", bookmarksController);
app.use("/api/users", usersController);

app.listen(8080, () => console.log("They see me rollin...on port 8080..."));
