const express = require("express")
const router = express.Router()

// import the user model
const User = require("../db/models/User")
const Bookmark = require("../db/models/Bookmark")

router.get("/", (req, res) => {
  User.find().then(allUsers => {
    res.json(allUsers)
  })
})

router.get("/:email", (req, res) => {
  let userEmail = req.params.email
  User.findOne({ email: userEmail }).then(user => {
    res.json(user)
  })
})

router.post("/", (req, res) => {
  let newUser = req.body
  User.create(newUser).then(created => {
    res.json(created)
  })
})

// bookmarkId is accessible in req.params
// in this case, we will use two models and the refs to link them
// sample body payload:
/* 

{
  "user" : {
    "name": "test relation",
    "email": "test@email.com"
  },
  "bookmark": {
    "title" : "test",
    "url": "http://test.com"
  }
}

*/
router.post("/:bookmarkId", (req, res) => {
  User.create(req.body.user).then(newUser => {
    Bookmark.create(req.body.bookmark).then(newBookmark => {
      newUser.favorites.push(newBookmark._id)
      newBookmark.favorited.push(newUser._id)
      newUser.save()
      newBookmark.save()
      res.json(newUser)
    })
  })
})

router.put("/:id", (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body).then(prevRecord => {
    res.json(prevRecord)
  })
})

router.delete("/:id", (req, res) => {
  User.findOneAndDelete({ _id: req.params.id }).then(deleted => {
    res.json(deleted)
  })
})

module.exports = router
