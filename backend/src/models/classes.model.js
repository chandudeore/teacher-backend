const mongoose = require("mongoose");

const classesSchema = new mongoose.Schema(
  {
    className: { type: String, required: true },
    grade: { type: Number, required: true, max: 5 },
    section: { type: Number, required: true, max: 2 },
    subject: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("classes", classesSchema);
