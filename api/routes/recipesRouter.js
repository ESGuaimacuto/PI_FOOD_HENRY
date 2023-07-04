const {Router} = require("express");
const recipesRouter = Router();
const {getRecipesHandler, getRecipesIdHandler, createRecipesHandler, deleteRecipeHandler} = require("../handlers/recipesHandlers")

recipesRouter.get("/", getRecipesHandler)
recipesRouter.get("/:idRecipes", getRecipesIdHandler)
recipesRouter.post("/", createRecipesHandler)
recipesRouter.delete("/:idRecipes", deleteRecipeHandler)

module.exports = recipesRouter


