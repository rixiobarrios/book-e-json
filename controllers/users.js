const User = require("../models/User");
const Bookmark = require("../models/Bookmark");

module.exports = {
  index: (req, res) => {
    User.find({}).then(users => res.json(users));
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
        //
      });
    });

    // console.log(newUser, newBookmark);
    // res.send("testing");
  },
  show: (req, res) => {
    User.findOne({ name: req.params.name }).then(user => res.json(user));
  }
};
