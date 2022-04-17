const express = require("express");

const Teacher = require("../models/teacher.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const teacher = await Teacher.create(req.body);

    return res.status(202).send(teacher);
  } catch (err) {
    res.status(500).json({ message: "Something wrong in teacher" });
  }
});

router.get("", async (req, res) => {
  try {
    const teacher = await Teacher.find()
      .populate({ path: "class_id", select: ["className", "subject"] })
      .lean()
      .exec();

    return res.status(202).send(teacher);
  } catch (err) {
    res.status(500).json({ message: "Something wrong in teacher" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndDelete(req.params.id)
      .lean()
      .exec();

    return res.status(202).send(teacher);
  } catch (err) {
    res.status(500).json({ message: "Something wrong in teacher" });
  }
});

module.exports = router;
