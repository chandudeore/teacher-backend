const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, maxlength: 10 },
    password: { type: String, required: true, unique: true },
    teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: "teacher" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

adminSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  var hash = bcrypt.hashSync(this.password, 8);

  this.password = hash;

  return next();
});

adminSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("admin", adminSchema);
