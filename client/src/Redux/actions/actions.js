import axios from "axios"

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
} from "./actionsType";

const LocalHost = "http://localhost:3001";

export const createdRecipe = ({
  title,
  image,
  summary,
  healthScore,
  steps,
  diets,
}) => {
  try {
    return async function (dispatch) {
      let responseDB = await axios.post(`${LocalHost}/recipes`, {
        title,
        image,
        summary,
        healthScore,
        steps,
        diets,
      });
      alert("Recceta creada con éxito");
      return dispatch({
        type: CREATED_RECIPE,
        payload: responseDB.data,
      });
    };
  } catch (error) {
    alert(
      "No ha sido posible crear la receta, verifique la infromación suministrada"
    );
  }
};

export const getRecipes = () => {
  try {
    return async function (dispatch) {
      let solicitud = await axios.get(`${LocalHost}/recipes`);
      return dispatch({
        type: GET_RECIPES,
        payload: solicitud.data,
      });
    };
  } catch (error) {
    console.log(error.message);
  }
};

export const getDiets = ()=>{
    try {
        return async function(dispatch){
            let solicitudDiets = await axios.get(`${LocalHost}/diet`);
            return dispatch({
                type: GET_DIETS,
                payload: solicitudDiets.data
            })
        }
    } catch (error) {
        console.log(error.message);
    }   
}

export const getDetails = (idRecipes)=> {
    try {
        return async function (dispatch){
            let resRecipesDetails = await axios.get(`${LocalHost}/recipes/${idRecipes}`)

            return dispatch({
                type: RECIPES_DETAILS,
                payload: resRecipesDetails.data
            })
        }
    } catch (error) {
        console.log(error.message);
    }
}

export const searchTitle = (title)=>{
  try {
    return async function (dispatch){
      const busquedaTitle = await axios.get(`${LocalHost}${title}`)
      return dispatch({
        type: SEARCH_BY_TITLE,
        payload: busquedaTitle.data
      })
    }

  } catch (error) {
    console.log(error.message);
  }
}

export const filterOrigin = (payload)=>{
    return{
      type: FILTER_BY_ORIGIN,
      payload
    }
}

export const filterDiets = (payload)=>{
  return{
    type: FILTER_BY_DIET,
    payload
  }
}

export const orderAlfavetico = (value)=>{
  return {
    type: ORDER_BY_TITLE,
    payload: value
  }
}

export const orderScore = (payload)=>{
  return {
    type: ORDER_BY_HEALTHSCORE,
    payload
  }
}