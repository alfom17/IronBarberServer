const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dateSchema = new Schema({
  dayAvailable: {
    type: String,
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
  },
  serviceId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Service"
  }
});

const Date = mongoose.model("Date", dateSchema);
module.exports = Date;
