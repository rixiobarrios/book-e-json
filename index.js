const express = require("express");
const app = express();

const bookmarksRoutes = require("./routes/bookmarks");
// const usersRoutes = require("./routes/users");

app.use("/api/bookmarks/", bookmarksRoutes);
// app.use("/api/users/", usersRoutes);

app.listen(8080, () => console.log("They see me rollin...on port 8080..."));
