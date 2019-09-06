const express = require("express");
const bookmarksRouter = express.Router();

const bookmarksController = require("../controllers/bookmarks");

// add my routers here

/** Index: show all bookmarks */

bookmarksRouter.get("/", bookmarksController.index);

/** Show: retreive one bookmakr by its title */

bookmarksRouter.get("/:title", bookmarksController.show);

module.exports = bookmarksRouter;
