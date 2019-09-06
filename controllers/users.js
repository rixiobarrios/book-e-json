const User = require("../models/User");
const Bookmark = require("../models/Bookmark");

module.exports = {
  index: (req, res) => {
    User.find({})
      .populate("favorites")
      .then(users => res.json(users));
  },
  create: (req, res) => {
    const newUser = req.body;

    User.create(newUser).then(user => res.json(user));
  },
  createWithBookmark: (req, res) => {
    const newUser = req.body.user;
    const newBookmark = req.body.bookmark;

    User.create(newUser).then(user => {
      Bookmark.create(newBookmark).then(bookmark => {
        console.log(user._id);
        console.log(bookmark.id);

        // pushing the object ids for the new documents in the referenced array fields
        user.favorites.push(bookmark.id);
        bookmark.favorited.push(user.id);

        // save both documents, because I made changes to them since running the `create()` mongoose methods
        user.save();
        bookmark.save();

        res.json(user);
      });
    });

    // console.log(newUser, newBookmark);
    // res.send("testing");
  },
  show: (req, res) => {
    User.findOne({ name: req.params.name }).then(user => res.json(user));
  }
};
