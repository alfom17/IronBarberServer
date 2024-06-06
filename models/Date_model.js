const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dateSchema = new Schema({
  dayAvailable: {
    type: Number,
  },
  hourAvailable: {
    type: Number,
  },
  status:{
    type: String,
    enum: ["pendiente", "aceptado", "denegado"],
    default: "pendiente"
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
});

const Date = mongoose.model("Date", dateSchema);
module.exports = Date;
