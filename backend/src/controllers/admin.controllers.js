const express = require("express");

const Admin = require("../models/admin.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const admin = await Admin.create(req.body);

    return res.status(201).send(admin);
  } catch (err) {
    res.status(500).json({ message: "Something get Wrong" });
  }
});

router.get("", async (req, res) => {
  try {
    const admin = await Admin.find()
      .populate({ path: "teacher_id", select: ["name", "gender", "age"] })
      .lean()
      .exec();

    return res.status(201).send(admin);
  } catch (err) {
    res.status(500).json({ message: "Something get Wrong" });
  }
});

module.exports = router;
