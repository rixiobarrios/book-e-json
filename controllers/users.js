const express = require("express")
const router = express.Router()

// import the user model
const User = require("../db/models/User")

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
