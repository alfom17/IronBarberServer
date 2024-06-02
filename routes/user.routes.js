const router = require("express").Router();



//usuario encontrado
router.get("/:id", isTokenValid, (req, res) => {
  try {
    res.status(200).json({ payload: req.payload });
    console.log("usuario encontrado");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
