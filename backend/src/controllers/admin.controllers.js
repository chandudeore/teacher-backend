require("dotenv").config();

const Admin = require("../models/admin.model");
const jwt = require("jsonwebtoken");

const newToken = (admin) => {
  return jwt.sign({ admin }, process.env.JWT_SECRET_KEY);
};

const login = async (req, res) => {
  try {
    const admin = await Admin.findOne({ username: req.body.username });

    if (!admin)
      return res.status(400).json({ message: "Enter another username" });
    const match = admin.checkPassword(req.body.password);
    if (!match)
      return res.status(400).json({ message: "Enter another Password" });

    const token = newToken(admin);

    res.send({ admin, token });
  } catch (err) {
    res.status(500).json({ message: "error" });
  }
};

module.exports = { login };
