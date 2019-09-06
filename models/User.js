const mongoose = require("../db/connection");

const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  favorites: [
    {
      ref: "Bookmark",
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
