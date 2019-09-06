const express = require("express");
const router = express.Router();

const bookmarksController = require("../controllers/bookmarks");

router.get("/", bookmarksController.index);
router.post("/", bookmarksController.create);

router.get("/:title", bookmarksController.show);

module.exports = router;
