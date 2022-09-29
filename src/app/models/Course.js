const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String },
    description: { type: String },
    level: { type: String },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Course", Course);
