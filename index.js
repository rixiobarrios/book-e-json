const express = require("express");
const cors = require("cors");
const bookmarksController = require("./controllers/bookmarks");
const usersController = require("./controllers/users");

// instantiate express
const app = express();

// Middleware configuration

// add `express.json` middleware which will parse JSON requests into
// JS objects before they reach the route files.
// The method `.use` sets up middleware for the Express application
app.use(express.json())
// this parses requests that may use a different content type
app.use(parser.urlencoded({ extended: true }));

// cors allows connections from all domains
app.use(cors());

// redirect any requests to the homepage to bookmarks
app.get("/", (req, res) => {
  res.redirect("/api/bookmarks");
});

// hands off requests on the '/api/bookmarks' route to the bookmarks controller
app.use("/api/bookmarks/", bookmarksController);
// hands off requests on the '/api/users' route to the users controller
app.use("/api/users/", usersController);

// app.listen(8080, () => console.log("They see me rollin...on port 8080..."));

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
