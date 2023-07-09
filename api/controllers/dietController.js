const axios = require("axios");
const { Recipe, Diet } = require("../src/db");
const { YOUR_API_KEY1, YOUR_API_KEY2 } = process.env
//const URL =`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY1}&addRecipeInformation=true&number=100`;
const URL = "https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5"

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
