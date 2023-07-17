import { useDispatch } from "react-redux";
import { orderScore } from "../../Redux/actions/actions";
import "../NavBar/navBar.css"

const FilterHealth = () => {
  const dispatch = useDispatch();

  const handlerScore = (event) => {
    event.preventDefault();
    dispatch(orderScore(event.target.value));
  };

  return (
      <div>
        <select
        onChange={(event)=>handlerScore(event)}
        name="filtroHealth" className="opciones"
        >
        <option value="neutro"> Filtro de Salud </option>
        <option value="HIGH"> Mayor a Menor </option>
        <option value="LESS"> Menor a Mayor</option>    
        </select>
      </div>
  );
};

export default FilterHealth;
