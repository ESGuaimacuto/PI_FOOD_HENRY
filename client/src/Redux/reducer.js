import {
  CREATED_RECIPE,
  GET_RECIPES,
  GET_DIETS,
  RECIPES_DETAILS,
  SEARCH_BY_TITLE,
  FILTER_BY_ORIGIN,
  FILTER_BY_DIET,
  ORDER_BY_TITLE,
  ORDER_BY_HEALTHSCORE,
} from "../Redux/actions/actionsType";

const initialState = {
  recipes: [],
  diets: [],
  details: [],
  respaldoRecipes: [],
  currentPage: 1,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        respaldoRecipes: action.payload,
      };

    case GET_DIETS:
      return {
        ...state,
        diets: action.payload,
      };

    case CREATED_RECIPE:
      return {
        ...state,
      };

    case RECIPES_DETAILS:
      return {
        ...state,
        details: action.payload,
      };

    case SEARCH_BY_TITLE:
      return {
        ...state,
        recipes: action.payload,
      };

    case FILTER_BY_ORIGIN:
      let filtroOrigen;
      if (action.payload === "ALL") {
        filtroOrigen = state.respaldoRecipes;
      } else {
        filtroOrigen =
          action.payload === "true"
            ? state.respaldoRecipes.filter((e) => e.created)
            : state.respaldoRecipes.filter((e) => !e.created);
      }
      return {
        ...state,
        recipes: filtroOrigen,
      };

    case FILTER_BY_DIET:
      let allRecipes = state.recipes;
      let filterDiets =
        action.payload === "ALL"
          ? allRecipes
          : allRecipes.filter((recipes) =>
              recipes.diets?.includes(action.payload)
            );
      if (filterDiets.length === 0) filterDiets = [];
      return {
        ...state,
        recipes: filterDiets,
      };

    case ORDER_BY_TITLE:
      let orden = [...state.recipes];
      orden.sort((a, b) => {
        if (action.payload === "AZ") {
          return a.name.localeCompare(b.name);
        } else if (action.payload === "ZA") {
          return b.name.localeCompare(a.name);
        }
        return 0;
      });

      return {
        ...state,
        recipes:orden
      };

    case ORDER_BY_HEALTHSCORE:
      let ordenarDietas = [...state.recipes];
      ordenarDietas.sort((a, b) => {
        const dietaA = Number(a.diet.split("-")[0]);
        const dietaB = Number(b.diet.split("-")[0]);

        if (action.payload === "HIGH") {
          return dietaB - dietaA;
        } else if (action.payload === "LESS") {
          return dietaA - dietaB;
        } else {
          return 0;
        }
      });

      return {
        ...state,
        recipes: ordenarDietas
      };

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
