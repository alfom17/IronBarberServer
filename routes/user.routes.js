const router = require("express").Router();
const {isTokenValid} = require("../middlewares/auth.middleware");
const User = require("../models/User_model");


//usuario encontrado
router.get("/", isTokenValid, async (req, res, next) => {
  try {
    const response = await User.findById(req.payload._id)
    res.status(200).json(response);
    console.log("usuario encontrado");
  } catch (error) {
    console.log(error);
    next(error);
  }
});
//
router.patch("/:id/image", isTokenValid, async (req, res, next)=>{
  try{
    await User.findByIdAndUpdate(req.payload._id, {
      imageUrl: req.body.imageUrl
    })
    res.sendStatus(200)
  } catch (error){
    next(error)
  }
})
module.exports = router;
