const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //validation ko lagi
  if (!name || !email || !password) {
    res.status(400);
    res.json({ message: "Email is required" });
  }
  if (password.length < 6) {
    res.status(400).send("Password must be at least six characters");
  }
  //check for repeat email
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400).send("Email has already been registered");
  }
  //this is for create new user
  const user = await User.create({
    name,
    email,
    password,
  });
  if (User) {
    const { _id, name, email, photo, phone, bio } = user;
    res.status(201).json({
      _id,
      name,
      email,
      photo,
      phone,
      bio,
    });
  } else {
    res.status(400);
    res.json({ message: "Email is required" });
  }
});

module.exports = {
  registerUser,
};
