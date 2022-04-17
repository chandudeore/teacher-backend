const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, maxlength: 30 },
    gender: { type: String, required: true, default: "Male" },
    age: { type: String, required: true, max: 28, min: 18 },
    class_id: { type: mongoose.Schema.Types.ObjectId, ref: "classes" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("teacher", teacherSchema);
