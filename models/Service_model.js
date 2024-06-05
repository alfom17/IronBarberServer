const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  type:{
    type: String,
    enum:["corte de pelo", "cuidado de barba", "Completo"]
  } ,
  //el status pueder pendiente, aceptada y rechazada
  status:{
    type: String,
    enum: ["pendiente", "aceptado", "denegado"],
    default: "pendiente"
  },
  servicedUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
});

const Service = mongoose.model("Service", serviceSchema);
module.exports = Service;
