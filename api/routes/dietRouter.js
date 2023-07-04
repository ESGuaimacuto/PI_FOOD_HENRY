const {Router} = require("express");
const dietRouter = Router();
const {getDietHandler} = require("../handlers/dietHandlers")

dietRouter.get("/", getDietHandler)


module.exports = dietRouter