const Bookmark = require("../models/Bookmark");

module.exports = {
  index: (req, res) => {
    Bookmark.find({}).then(bookmarks => res.json(bookmarks));
  },
  create: (req, res) => {
    let newBookmark = req.body;
    Bookmark.create(newBookmark).then(bookmark => res.json(bookmark));
  },
  show: (req, res) => {
    Bookmark.find({ title: req.params.title }).then(bookmark =>
      res.json(bookmark)
    );
  },
  update: (req, res) => {
    let updatedBookmark = req.body;
    Bookmark.findOneAndUpdate({ title: req.params.title }, updatedBookmark, {
      new: true
    }).then(bookmark => res.json(bookmark));
  },
  destroy: (req, res) => {
    Bookmark.findOneAndDelete({ title: req.params.title }).then(bookmark =>
      res.json(bookmark)
    );
  }
};
