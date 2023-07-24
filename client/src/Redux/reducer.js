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
  SET_VIEW_FILTER_AND_ORDER,
  SET_FILTER
} from "../Redux/actions/actionsType";

const initialState = {
  recipes: [],
  diets: [],
  details: [],
  respaldoRecipes: [],
  respaldo: [],
  currentPage: 1,
  filters: {
    origin: "ALL",
    diet:"ALL",
    orderBy: "neutro",
    healthScore: "neutro"
  }
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        respaldoRecipes: action.payload,
        respaldo: action.payload
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
      } 
      // if(action.payload === "true"){
      //   if(state.recipes.filter((e) => e.created) === null){
      //     state.respaldo.filter((e) => e.created)
      //   }
      // }
      // if(action.payload === "false"){
      //   if(state.recipes.filter((e) => !e.created) === null){
      //     state.respaldo.filter((e) => !e.created)
      //   }
      // }

      else {
        filtroOrigen =
          action.payload === "true"
            ? state.recipes.filter((e) => e.created)
            : state.recipes.filter((e) => !e.created);
      }
      console.log(state.recipes)
      return {
        ...state,
        recipes: filtroOrigen,
      };

    case FILTER_BY_DIET:
      let allRecipes = state.recipes;
      console.log(action.payload);
      let filterDiets =
        action.payload === "ALL"
          ? allRecipes
          : allRecipes.filter((recipes) =>
              recipes.diets?.includes(action.payload)
            );
      if (filterDiets.length === 0) filterDiets = [];
      console.log(filterDiets);
      return {
        ...state,
        recipes: filterDiets,
      };

    case ORDER_BY_TITLE:
      let orden = [...state.recipes];
      orden.sort((a, b) => {
        if (action.payload === "AZ") {
          return a.title.localeCompare(b.title);
        } else if (action.payload === "ZA") {
          return b.title.localeCompare(a.title);
        }
        return 0;
      });

      return {
        ...state,
        recipes: orden,
        respaldoRecipes: orden,
        respaldo: orden
      };

    case ORDER_BY_HEALTHSCORE:
      let ordenarScore = [...state.recipes];
      ordenarScore.sort((a, b) => {
        const scoreA = Number(a.healthScore);
        const scoreB = Number(b.healthScore);

        if (action.payload === "HIGH") {
          return scoreB - scoreA;
        } else if (action.payload === "LESS") {
          return scoreA - scoreB;
        } else {
          return 0;
        }
      });

      return {
        ...state,
        recipes: ordenarScore,
      };

    case SET_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.filterType]: action.payload.value
        }
      };

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
