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

router.get("/t", async (req, res) => {
  try {
    const page = req.query.page;

    const teacher = await Teacher.find()
      .skip((page - 1) * 5)
      .limit(5)
      .populate({ path: "class_id", select: ["className", "subject"] })
      .lean()
      .exec();
    // console.log(req.query.srt);
    let res = req.query.sort;

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
