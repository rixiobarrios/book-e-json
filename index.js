const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

const bookmarksRouter = require("./routes/bookmarks");
const usersRouter = require("./routes/users");

app.use("/api/bookmarks/", bookmarksRouter);
app.use("/api/users/", usersRouter);

app.get("/", (req, res) => {
  res.redirect("/api/bookmarks");
});

/** if there is a value for process.env.PORT, e.g. like heroku sets up, use that.
 * otherwise, use port 8080 like we have been locally.
 */
app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () =>
  console.log(`✅ PORT: ${app.get("port")} 🌟`)
);
