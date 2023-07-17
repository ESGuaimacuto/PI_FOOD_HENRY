import { useDispatch, useSelector } from "react-redux";
import { filterDiets, getRecipes } from "../../Redux/actions/actions";
import { useEffect, useState } from "react";
import "../NavBar/navBar.css"

const FilterDiet = () => {
  const dispatch = useDispatch();
  const allDiets = useSelector((state) => state.diets);
  const allRecipes = useSelector((state => state.recipes))
  const [filtros, setFiltros] = useState([]);
  const [selection, setSelection] = useState("")
  
  const handlerDiets = (event) => {
    event.preventDefault();
    dispatch(filterDiets(event.target.value))
    setSelection(event.target.value);
    setFiltros([])
  };



  return (
    <div>
      <select onChange={(event) => handlerDiets(event)} name="filtroDietas" value={selection}
      className="opciones"
      >
        <option value="ALL"> Todas las recetas </option>
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
