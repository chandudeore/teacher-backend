const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const port = process.env.PORT || 8080;

const teacherController = require("./controllers/teacher.controller");
const classesController = require("./controllers/classes.controller");
const { register, login } = require("./controllers/admin.controllers");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/admin-register", register);
app.use("/admin-login", login);
app.use("/teacher", teacherController);
app.use("/classes", classesController);
app.listen(port, async () => {
  try {
    await connect();
    console.log("Listening on", port);
  } catch (err) {
    console.log("Error ");
  }
});
