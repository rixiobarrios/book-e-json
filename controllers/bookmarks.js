const Bookmark = require("../models/Bookmark");

module.exports = {
  index: (req, res) => {
    Bookmark.find({}).then(bookmarks => {
      res.json(bookmarks);
    });
  },
  create: (req, res) => {
    const newBookmark = req.body;

    Bookmark.create(newBookmark).then(bookmark => res.json(bookmark));
  },
  show: (req, res) => {
    Bookmark.findOne({ title: req.params.title }).then(bookmark =>
      res.json(bookmark)
    );
  },
  update: (req, res) => {
    const updatedBookmark = req.body;

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
