const jwt = require("jsonwebtoken");

function isTokenValid(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const payload = jwt.verify(token, process.env.TOKEN_SECRET);

    req.payload = payload;
  } catch (error) {
    res.status(401).json({ errorMessage: "Token no valido o no existe" });
  }
}
function isUserAdmin (req, res, next) {

  console.log(req.payload)
  if (req.payload.role === "admin") {
    next() 
  } else {
    res.status(401).json({errorMessage: "No tienes permisos"})
  }
}

module.exports = {
  isTokenValid,
  isUserAdmin
};
