const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  type:{
    type: String
  } ,
  price:{
    type: Number
  },
  //el status pueder pendiente, aceptada y rechazada
  status:{
    type: String,
    enum: ["pendiente", "aceptado", "denegado"],
    default: "pendiente"
  } 
});

const Service = mongoose.model("Service", serviceSchema);
module.exports = Service;
