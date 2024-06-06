const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

const dateRouter = require("./date.routes.js");
router.use("/date", dateRouter);

const serviceRouter = require("./service.routes");
router.use("/service", serviceRouter);

const userRouter = require("./user.routes.js");
router.use("/user", userRouter);

const authRouter = require("./auth.routes.js");
router.use("/auth", authRouter);

const uploadRoutes = require("./upload.routes");
router.use("/upload", uploadRoutes);

module.exports = router;
