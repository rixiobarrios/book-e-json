const Bookmark = require("../models/Bookmark");

module.exports = {
  index: (req, res) => {
    Bookmark.find({}).then(bookmarks => {
      res.json(bookmarks);
    });
  },
  show: (req, res) => {
    Bookmark.findOne({ title: req.params.title }).then(bookmark =>
      res.json(bookmark)
    );
  }
};
