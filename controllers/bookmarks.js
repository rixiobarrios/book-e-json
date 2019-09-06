const Bookmark = require("../models/Bookmark");

module.exports = {
  index: (req, res) => {
    Bookmark.find({}).then(bookmarks => res.json(bookmarks));
  },
  show: (req, res) => {
    Bookmark.find({ title: req.params.title }).then(bookmark =>
      res.json(bookmark)
    );
  },
  create: (req, res) => {
    Bookmark.create(req.body).then(bookmark => res.json(bookmark));
  }
};
