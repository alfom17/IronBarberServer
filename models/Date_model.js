const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dateSchema = new Schema({
  dayAvailable: Number,
  hourAvailable: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
  },
});

const Date = mongoose.model("Date", dateSchema);
module.exports = Date;
