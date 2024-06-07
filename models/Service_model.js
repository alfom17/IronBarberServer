const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  type:{
    type: String,
    
  } ,
  //el status pueder pendiente, aceptada y rechazada
  
  servicedUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
});

const Service = mongoose.model("Service", serviceSchema);
module.exports = Service;
