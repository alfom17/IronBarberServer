const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  type: String,
  price: Number,
});

const Service = mongoose.model("Service", serviceSchema);
module.exports = Service;
