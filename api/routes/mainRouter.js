const {Router} = require("express");
const mainRouter = Router();
const recipesRouter = require("./recipesRouter")
const dietRouter = require("./dietRouter")


mainRouter.use("/recipes", recipesRouter)
mainRouter.use("/diet", dietRouter)


module.exports = mainRouter