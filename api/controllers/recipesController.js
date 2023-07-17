const axios = require("axios");
const { Recipe, Diet } = require("../src/db");
const { YOUR_API_KEY1, YOUR_API_KEY2 } = process.env;
//const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY2}&addRecipeInformation=true`
const URL = `https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`;

//Controlador de creación de recetas
const createdRecipes = async (
  title,
  image,
  summary,
  healthScore,
  steps,
  diets
) => {
  console.log("Estoy en el controller", title);
  const searchDB = await Recipe.findOne({ where: { title } });
  console.log(searchDB);
  console.log(!searchDB);
  if (!searchDB) {
    const newRecipe = await Recipe.create({
      title,
      image,
      summary,
      healthScore,
      steps,
    });
    console.log(newRecipe);
  
    newRecipe.addDiet(diets);
    return newRecipe;
  }
  throw Error(
    "La receta que intenta crear, ya existe en nuestra base de datos"
  );
};
//Controlador de elimación de recetas DB
const deleteRecipe = async (idRecipes) => {
  const search = await await Recipe.findByPk(idRecipes, {
    include: [
      {
        model: Diet,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });
  console.log(search);
  if (!search) throw Error("La receta no existe");
  await Recipe.destroy({ where: { id: idRecipes } });
  return "Receta eliminada exitosamente";
};
//Controlador de busqueda por ID
const getRecipesById = async (idRecipes) => {
  const idOrigen = isNaN(idRecipes) ? "bd" : "api";
  if (idOrigen === "api") {
    const searchId = (
      await axios.get(
        `https://api.spoonacular.com/recipes/${idRecipes}/information?apiKey=26c65454a287478abd1be0c196abdc80&addRecipeInformation=true`
      )
    ).data;
    //console.log(searchId);
    const {
      id,
      title,
      image,
      summary,
      healthScore,
      diets,
      analyzedInstructions,
    } = searchId;

    let instruciones = [];
    if (analyzedInstructions[0] !== undefined) {
      let pasos = analyzedInstructions.map((step) => step.steps);
      let pasitos = pasos[0].map(({ number, step }) => {
        return {
          number,
          step,
        };
      });
      instruciones.push(pasitos);
    } else {
      instruciones;
    }
    const recipesById = {
      id,
      title,
      image,
      summary,
      healthScore,
      diets,
      steps: instruciones[0],
    };
    if (!recipesById) return Error("La receta buscada no fue encontrada");
    return recipesById;
  }
  const searchIdDB = await Recipe.findByPk(idRecipes, {
    include: [
      {
        model: Diet,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });
  if (!searchIdDB) throw Error("No se ubicó la infromación solicitada");
  return searchIdDB;
};
//Trae todas las recetas de la DB
const getRecipesDB = async () => {
  const allRecipesDB = await Recipe.findAll({
    include: {
      model: Diet,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return allRecipesDB;
};
//Trae todas las recetas de la API
const getRecipesApi = async () => {
  const solicitudApi = (await axios.get(`${URL}`)).data.results;
  //console.log("Solicitud incial", solicitudApi);
  
  const allRecipesApi = solicitudApi.map((recipe) => {
    // Se aplica este recorrido al array de los pasos para extraer unicamente la información necesaria a ser renderizada en el front
    // let pasos = recipe.analyzedInstructions.map((step) => step.steps);
    // let pasitos = pasos[0].map(({ number, step }) => {
    //   return {
    //     number,
    //     step,
    //   };
    // });
    
    let pasos = recipe.analyzedInstructions[0]?.steps || [];
    let pasitos = pasos.map(({number, step})=>({
      number,
      step
    }))
    
    return {
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      summary: recipe.summary.replace(/<[^>]+>/g, ""),
      healthScore: recipe.healthScore,
      diets: recipe.diets,
      steps: pasitos,
      created: false,
    };
  });
  return allRecipesApi;
};
//Une todas las recetas DB y API para enviar al front
const getAllRecipes = async (title) => {
  const recipesDB = await getRecipesDB();
  const recipesApi = await getRecipesApi();
  const allRecipes = [...recipesDB, ...recipesApi];
  //console.log(title);

  if (title) {
    let filterRecipes = allRecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(title.toLowerCase())
    );

    if (!filterRecipes.length)
      throw new Error(`No se logró encontrar la recete solicitada: ${title}`);

    return filterRecipes;
  }
  return allRecipes;
};

module.exports = {
  createdRecipes,
  getRecipesById,
  getAllRecipes,
  deleteRecipe,
};
