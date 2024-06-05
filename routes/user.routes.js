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

module.exports = router;
