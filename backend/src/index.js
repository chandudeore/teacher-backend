const express = require("express");

const connect = require("./config/db");
const port = process.env.PORT || 8080;

const adminController = require("./controllers/admin.controllers");
const teacherController = require("./controllers/teacher.controller");
const classesController = require("./controllers/classes.controller");

const app = express();

app.use(express.json());

app.use("/admin", adminController);
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
