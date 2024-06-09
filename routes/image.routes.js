const router = require("express").Router();
const { isTokenValid } = require("../middlewares/auth.middleware");
const Img = require("../models/Image_model")

router.post("/", isTokenValid, async(req, res, next)=>{
    try{
        Img.create({
            imageUrl:req.body.imageUrl
        })
        res.status(201).json("okey")
    } catch(error){
        console.log(error);
        next(error)
    }
})