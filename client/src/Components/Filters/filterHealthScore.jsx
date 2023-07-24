import { useDispatch, useSelector } from "react-redux";
import { orderScore, setFilter } from "../../Redux/actions/actions";
import "../NavBar/navBar.css"

const FilterHealth = () => {
  const dispatch = useDispatch();
  const selecScore = useSelector((state)=>state.filters.healthScore)

  const handlerScore = (event) => {
    event.preventDefault();
    dispatch(setFilter("healthScore", event.target.value))
    dispatch(orderScore(event.target.value));
  };

  return (
      <div>
        <select
        onChange={(event)=>handlerScore(event)}
        name="filtroHealth" className="opciones"
        value={selecScore}
        >
        <option value="neutro"> Filtro de Salud </option>
        <option value="HIGH"> Mayor a Menor </option>
        <option value="LESS"> Menor a Mayor</option>    
        </select>
      </div>
  );
};

export default FilterHealth;
