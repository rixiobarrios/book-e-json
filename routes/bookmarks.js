const express = require("express");
const router = express.Router();

const bookmarksController = require("../controllers/bookmarks");

// add my routers here

/** Index: show all bookmarks */

router.get("/", bookmarksController.index);

/** Create: make a new bookmark */
router.post("/", bookmarksController.create);

/** Show: retreive one bookmakr by its title */

router.get("/:title", bookmarksController.show);

/** Update: update a specific bookmark */

router.put("/:title", bookmarksController.update);

/** Destory: delete a bookmark */

router.delete("/:title", bookmarksController.destroy);

module.exports = router;
