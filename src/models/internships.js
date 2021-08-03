const mongoose = require("mongoose");

const internSchema = new mongoose.Schema({
  topic: {
    type: String,
    require: true,
    trim: true,
  },
  paragraph: {
    type: String,
    require: true,
    trim: true,
  },
  link: {
    type: String,
    require: true,
    trim: true,
  },
  date: {
    type: String,
    require: true,
    trim: true,
  },
  ratings: {
    type: String,
    require: true,
    trim: true,
  },
  logoid: {
    type: String,
    require: true,
    trim: true,
  },
});

const internships = new mongoose.model("InternShips", internSchema);

module.exports = internships;
