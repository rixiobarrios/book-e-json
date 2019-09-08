const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users");

/** Index: retrieve all users */
router.get("/", usersController.index);

/** Create: create a new user */

router.post("/", usersController.create);

/** custom action to create a new User AND create a new bookmark at the same time
 * the new User and Bookmark will _reference_ one another in their respective fields
 */

router.post("/create-with-bookmark", usersController.createWithBookmark);

/** Show: retreive one user by name */
router.get("/:name", usersController.show);

/** Add Bookmark to existing user (custom Update) */
router.put("/:name/bookmark/:bookmarkId", usersController.addBookmark);

module.exports = router;
