const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//Register
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10); //to encrypt the password
    const hashedPassword = await bcrypt.hash(req.body.password, salt); // ''
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username }); //since usernames are unique, finds (the only) one corresponding username
    !user && res.status(400).json("Incorrect credentials");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Incorrect credentials");

    const { password, ...others } = user._doc; // returns everything but the password

    res.status(200).json(others); // ''
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
