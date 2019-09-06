const express = require("express");
const router = express.Router();

const bookmarksController = require("../controllers/bookmarks");

router.get("/", bookmarksController.index);
router.post("/", bookmarksController.create);

router.get("/:title", bookmarksController.show);
router.put("/:title", bookmarksController.update);

module.exports = router;
