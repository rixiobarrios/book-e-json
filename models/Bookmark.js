const mongoose = require("../db/connection");

const bookmarkSchema = new mongoose.Schema({
  title: String,
  url: String,
  favorited: [
    {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});

const Bookmark = mongoose.model("Bookmark", bookmarkSchema);

module.exports = Bookmark;
