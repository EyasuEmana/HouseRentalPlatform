const mongoose = require("mongoose");
const config=require("config")
mongoose
  .connect(config.get("db"))
  .then(() => console.log("connected"))
  .catch((e) => {
    console.log("error: ", e);
  });