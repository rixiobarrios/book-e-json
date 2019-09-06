const express = require("express");
const router = express.Router();

const userController = require("../controllers/users");

/** Index: retrieve all users */
router.get("/", userController.index);

/** Create: create a new user */

router.post("/", userController.create);

/** custom action to create a new User AND create a new bookmark at the same time
 * the new User and Bookmark will _reference_ one another in their respective fields
 */

router.post("/create-with-bookmark", userController.createWithBookmark);

/** Show: retreive one user by name */
router.get("/:name", userController.show);

module.exports = router;
