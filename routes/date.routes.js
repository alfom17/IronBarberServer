const router = require("express").Router();
const Date = require("../models/Date_model");
const {isTokenValid} = require("../middlewares/auth.middleware")

//DATE

//----
router.post("/",isTokenValid, async (req, res, next) => {
 try{
  Date.create({
    day: req.body.day,
    hour: req.body.hour,
    user: req.payload._id,
    service: req.body_id
  })
    
      console.log("cita creada");
      res.status(201).json;
    
}catch(error) {
      console.log(error);
      next(error);
    };
});

//-----
router.get("/", async (req, res, next) => {
  try {
    const response = await Date.find();
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});

//----
router.get("/:id", async (req, res, next) => {
  try {
    const response = await Date.find();
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});

//----
router.put("/:id", async (req, res) => {
  try {
    const response = await Date.findByIdAndUpdate(req.params.id, {
      day: req.body.day,
      hour: req.body.hour,
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//----
router.delete("/:id", async (req, res, next) => {
  try {
    const response = await Date.findByIdAndDelete(req.params.id);
    res.status(202).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
module.exports = router;
