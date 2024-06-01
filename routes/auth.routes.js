const router = require("express").Router();
const User = require("../models/User_model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { isTokenValid } = require("../middlewares/auth.middleware.js");

router.post("/signup", async (req, res, next) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    res.status(400).json({ errorMessage: "todos los campos son obligatorios" });
    return;
  }

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  if (passwordRegex.test(password) === false) {
    res.status(400).json({
      errorMessage:
        "La contraseña no es suficientemente fuerte. Require más de 8 caracteres, al menos una minuscula, una mayuscula y algun otro caracter",
    });
    return;
  }

  try {
    const foundUser = await User.findOne({ email: email });

    if (foundUser) {
      res.status(400).json({
        errorMessage: "Usuario ya registrado con ese correo",
      });
      return;
    }

    const salt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(password, salt);

    await User.create({
      email: email,
      username: username,
      password: hashPassword,
    });

    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ errorMessage: "todos los campos son obligatorios" });
    return;
  }

  try {
    const foundUser = await User.findOne({ email: email });
    console.log(foundUser);
    if (!foundUser) {
      res.status(400).json({ errorMessage: "Usuario no registrado" });
      return;
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      foundUser.password
    );
    console.log(isPasswordCorrect);
    if (isPasswordCorrect === false) {
      res.status(400).json({ errorMessage: "Contraseña no valida" });
      return;
    }
    const payload = {
      _id: foundUser._id,
      email: foundUser.email,
    };
    const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
      algorithm: "HS256",
      expiresIn: "7d",
    });

    res.status(200).json({ authToken: authToken });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/verify", isTokenValid, (req, res, next) => {
  console.log(req.payload);

  res.status(200).json({ payload: req.payload });
});

module.exports = router;
