const { Schema, model } = require("mongoose");

const imgSchema = new Schema({
    imageUrl:{
        type: String,
        
      }
})

const Img = model("Img", imgSchema)

module.exports = Img