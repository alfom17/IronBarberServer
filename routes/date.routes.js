const router = require("express").Router();
const Date = require("../models/Date_model");
const { isTokenValid } = require("../middlewares/auth.middleware");

//DATE

//----
router.post("/", isTokenValid, async (req, res, next) => {
  try {
    Date.create({
      dayAvailable: req.body.dayAvailable,
      hourAvailable: req.body.hourAvailable,
      status: req.body.status,
      user: req.payload._id,
    });

    res.status(201).json("okey");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//-----
router.get("/",isTokenValid, async (req, res, next) => {
  try {
    const response = await Date.find().populate("user", "username");
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});

//----
router.get("/:id",isTokenValid, async (req, res, next) => {
  try {
    const response = await Date.findById(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
});


//----
router.patch("/:id",isTokenValid, async (req, res, next) => {
  try {
    const response = await Date.findByIdAndUpdate(req.params.id, {
      dayAvailable: req.body.dayAvailable,
      hourAvailable: req.body.hourAvailable,
      status:"pendiente"
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//----
router.delete("/:id",isTokenValid, async (req, res, next) => {
  try {
    const response = await Date.findByIdAndDelete(req.params.id);
    res.status(202).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
//---
router.patch("/:id/:status",isTokenValid, async (req, res, next) => {
  try {
    const response = await Date.findByIdAndUpdate(req.params.id, {
      status: req.params.status,
    });
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});
//---
router.get("/by-user/:id",isTokenValid, async (req, res, next) => {
  try {
    const response = await Date.find({user:req.params.id})
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});
//---


module.exports = router;
