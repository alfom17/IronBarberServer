const router = require("express").Router();
const Service = require("../models/Service_model");

//Services
//-------
router.post("/", (req, res, next) => {
  Service.create({
    type: req.body.type,
    price: req.body.price,
  })
    .then(() => {
      console.log("Servicio creado");
      res.status(201).json({ message: "Servicio creado" });
    })
    .catch((error) => {
      next(error);
    });
});
//------
router.get("/", async (req, res, next) => {
  try {
    const response = await Service.find();
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});
//----
router.get("/:serviceId", async (req, res, next) => {
  console.log("Encuentra el servicio");
  console.log(req.params);
  try {
    const response = await Service.findById(req.params.serviceId);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
//------
router.put("/:serviceId", async (req, res) => {
  try {
    const response = await Service.findByIdAndUpdate(req.params.serviceId, {
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
router.delete("/:serviceId", async (req, res, next) => {
  try {
    const response = await Service.findByIdAndDelete(req.params.serviceId);
    res.status(202).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
