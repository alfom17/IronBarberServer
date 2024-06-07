const router = require("express").Router();
const Service = require("../models/Service_model");
const { isTokenValid } = require("../middlewares/auth.middleware");

//Services
//-------
router.post("/", isTokenValid , async (req, res, next) => {
  try {
    console.log(req.body);
    Service.create({
      type: req.body.type,
      servicedUser: req.body.servicedUser,
    });
    console.log("Servicio creado");
    res.status(201).json({ message: "Servicio creado" });
  } catch (error) {
    next(error);
  }
});
//------
router.get("/",isTokenValid, async (req, res, next) => {
  try {
    const response = await Service.find();
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});
//----
router.get("/:id",isTokenValid, async (req, res, next) => {
  console.log("Encuentra el servicio");
  console.log(req.params);
  try {
    const response = await Service.findById(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
//------
router.put("/:id",isTokenValid, async (req, res) => {
  try {
    const response = await Service.findByIdAndUpdate(req.params.id, {
      type: req.body.type,
      price: req.body.price,
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
//-----
router.delete("/:id",isTokenValid, async (req, res, next) => {
  try {
    const response = await Service.findByIdAndDelete(req.params.id);
    res.status(202).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
