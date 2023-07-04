const axios = require("axios");
const { Recipe, Diet } = require("../src/db");
const URL =
  "https://api.spoonacular.com/recipes/complexSearch?apiKey=26c65454a287478abd1be0c196abdc80&addRecipeInformation=true";

const getAllDiets = async () => {
  //Solicitud de información a la API y transformación a un arraglo sin elementos repetidos
  const solicitudApi = (await axios.get(`${URL}`)).data.results;
  console.log(solicitudApi);
  //console.log(solicitudApi);
  const allDiets = solicitudApi
    .map((recipe) => recipe.diets)
    .join()
    .split(",")
    .sort();
  //console.log(allDiets);
  const diets = new Set(allDiets);
  const dietsArray = Array.from(diets);

  //Creación de elementos en la DB
  for (const diet of dietsArray) {
    await Diet.findOrCreate({ where: { name: diet } });
  }
  const dietsDb = await Diet.findAll();
  return dietsDb;
};

module.exports = {
  getAllDiets,
};
