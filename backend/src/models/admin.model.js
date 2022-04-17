const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, maxlength: 10 },
    password: { type: String, required: true, unique: true },
    teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: "teacher" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("admin", adminSchema);
