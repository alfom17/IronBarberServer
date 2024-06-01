const router = require("express").Router();
const Service = require("../models/Service_model");

//Services

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

module.exports = router;
