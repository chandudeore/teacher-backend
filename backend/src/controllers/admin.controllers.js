require("dotenv").config();

const Admin = require("../models/admin.model");
const jwt = require("jsonwebtoken");

const newToken = (admin) => {
  return jwt.sign({ admin }, process.env.JWT_SECRET_KEY);
};

const register = async (req, res) => {
  try {
    let admin = await Admin.findOne({ username: req.body.username })
      .lean()
      .exec();

    if (admin)
      return res.status(400).send({ message: "Please try another email" });

    admin = await Admin.create(req.body);

    const token = newToken(admin);

    res.send({ admin, token });
  } catch (e) {
    res.status(500).send(e.message);
  }
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

module.exports = { register, login };
