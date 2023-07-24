import { useDispatch, useSelector } from "react-redux";
import { filterOrigin, getRecipes, setFilter } from "../../Redux/actions/actions";
import "../NavBar/navBar.css"
import { useEffect, useState } from "react";

const FilterOrigin = () => {
  const dispatch = useDispatch();
  
  const selectedOrigin = useSelector((state)=>state.filters.origin)

  const handlerOrigin = (event) => {
    event.preventDefault();
    dispatch(setFilter("origin", event.target.value))
    dispatch(filterOrigin(event.target.value));
  };


  return (
      <div>
        <select
        onChange={(event)=>handlerOrigin(event)}
        name="filtroOrigen" className="opciones"
        value={selectedOrigin}
        >
        <option value="ALL"> Origen de Datos </option>
        <option value="true"> Creados </option>
        <option value="false"> API </option>    
        </select>
      </div>
  );
};

export default FilterOrigin;