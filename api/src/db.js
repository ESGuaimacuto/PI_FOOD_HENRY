require("dotenv").config();
const {Sequelize} = require("sequelize");
const RecipeModel = require("../models/Recipes")
const DietModel = require("../models/Diet")

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/foods`,
    {
      logging: false, 
      native: false
    }
  );

RecipeModel(sequelize);
DietModel(sequelize);

const { Recipe, Diet } = sequelize.models;

Recipe.belongsToMany(Diet, {through: "recipe_diet"});
Diet.belongsToMany(Recipe, {through: "recipe_diet"});


  module.exports = {
    ...sequelize.models,
    conn: sequelize,
  }