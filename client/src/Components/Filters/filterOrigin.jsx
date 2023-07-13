import { useDispatch } from "react-redux";
import { filterOrigin } from "../../Redux/actions/actions";

const FilterOrigin = () => {
  const dispatch = useDispatch();

  const handlerOrigin = (event) => {
    event.preventDefault();
    dispatch(filterOrigin(event.target.value));
  };

  return (
      <div>
        <select
        onChange={(event)=>handlerOrigin(event)}
        name="filtroOrigen"
        >
        <option value="ALL"> Origen de Datos </option>
        <option value="true"> Creados </option>
        <option value="false"> API </option>    
        </select>
      </div>
  );
};

export default FilterOrigin;