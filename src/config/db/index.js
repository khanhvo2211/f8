const mongoose = require("mongoose");
async function connect() {
  await mongoose.connect("mongodb://localhost:27017/f8_education_dev");
  try {
    console.log("Connect Success");
  } catch (error) {
    console.log("Connect Fail");
  }
}
module.exports = { connect };
