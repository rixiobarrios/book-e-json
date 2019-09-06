const express = require("express");
const bookmarksRouter = express.Router();

const bookmarksController = require("../controllers/bookmarks");

// add my routers here

/** Index: show all bookmarks */

bookmarksRouter.get("/", bookmarksController.index);

/** Create: make a new bookmark */
bookmarksRouter.post("/", bookmarksController.create);

/** Show: retreive one bookmakr by its title */

bookmarksRouter.get("/:title", bookmarksController.show);

/** Update: update a specific bookmark */

bookmarksRouter.put("/:title", bookmarksController.update);

/** Destory: delete a bookmark */

bookmarksRouter.delete("/:title", bookmarksController.destroy);

module.exports = bookmarksRouter;
