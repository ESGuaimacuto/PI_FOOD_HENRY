import { useDispatch, useSelector } from "react-redux";
import { filterDiets, getRecipes, setFilter } from "../../Redux/actions/actions";
import { useEffect, useState } from "react";
import "../NavBar/navBar.css";

const FilterDiet = () => {
  const dispatch = useDispatch();
  const allDiets = useSelector((state) => state.diets);
  const allRecipes = useSelector((state) => state.recipes);
  const [filtros, setFiltros] = useState([]);
  const [selection, setSelection] = useState("");
  const selectedDiet = useSelector((state)=>state.filters.diet) 
  
  const handlerDiets = (event) => {
    event.preventDefault();
    dispatch(setFilter("diets", event.target.value))
    dispatch(filterDiets(event.target.value));
    setSelection(event.target.value);
    setFiltros([])
  };

  useEffect(()=>{
    dispatch(filterDiets(selectedDiet))
    dispatch(getRecipes(selection))
  }, [dispatch, selectedDiet])

  return (
    <div>
      <select
        onChange={(event) => handlerDiets(event)}
        name="filtroDietas"
        value={selection}
        className="opciones"
      >
        <option value="ALL"> Todas las dietas </option>
        {allDiets.map((diets) => (
          <option value={diets.name} key={diets.id}>
            {" "}
            {diets.name}{" "}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDiet;
