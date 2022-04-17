const express = require("express");

const Classes = require("../models/classes.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const classes = await Classes.create(req.body);

    return res.status(202).send(classes);
  } catch (err) {
    res.status(500).json({ message: "Something wrong in teacher" });
  }
});

router.get("", async (req, res) => {
  try {
    const classes = await Classes.find().lean().exec();

    return res.status(202).send(classes);
  } catch (err) {
    res.status(500).json({ message: "Something wrong in teacher" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const classes = await Classes.findByIdAndDelete(req.params.id)
      .lean()
      .exec();

    return res.status(202).send(classes);
  } catch (err) {
    res.status(500).json({ message: "Something wrong in teacher" });
  }
});

module.exports = router;
