const {
  createdRecipes,
  getRecipesById,
  getAllRecipes,
  deleteRecipe
} = require("../controllers/recipesController");

//Solicita y trae todas las recetas o busca por nombre si es proporcionado
const getRecipesHandler = async (req, res) => {
  try {
    const { title } = req.query;
    //console.log(req.query);
    if (title) {
      const responseName = await getAllRecipes(title);
      return res.status(200).json(responseName);
    } else {
      const responseAll = await getAllRecipes();
      res.status(200).json(responseAll);
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//Solicita y trae la información de una receta por ID
const getRecipesIdHandler = async (req, res) => {
  try {
    const { idRecipes } = req.params;
    if (!idRecipes)
      return Error("Es necesario un ID para realizar la busqueda");
    const responseById = await getRecipesById(idRecipes);
    res.status(200).json(responseById);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
//Crea una receta
const createRecipesHandler = async (req, res) => {
  const { title, image, summary, healthScore, steps, diets } = req.body;
  try {
    console.log("Este es el body", req.body);

    const responseCreated = await createdRecipes(
      title,
      image,
      summary,
      healthScore,
      steps,
      diets
    );

    return res.status(200).json(responseCreated);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
//Elimina una receta ya creada
const deleteRecipeHandler = async (req, res)=>{
  const {idRecipes} = req.params;
  console.log(idRecipes);
  try {
    if (!idRecipes)
    return Error("Es necesario un ID para eliminar la receta");
  const responseDelete = await deleteRecipe(idRecipes);
  res.status(200).json(responseDelete);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getRecipesHandler,
  getRecipesIdHandler,
  createRecipesHandler,
  deleteRecipeHandler
};
