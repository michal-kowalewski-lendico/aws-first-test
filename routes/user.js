const express = require("express");

const router = express.Router();

const User = require("../models/user");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
});

router.post("/register", async (req, res) => {
  console.log(req.body);
  const { name, email, password, confirmPassword } = req.body;

  const newUser = new User({ name, email, password });
  try {
    const savedUser = await newUser.save();
    console.log(savedUser);
  } catch (err) {
    console.log(err);
  }

  res.redirect("/");
});

module.exports = router;
