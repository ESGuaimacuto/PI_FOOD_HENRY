import { useDispatch } from "react-redux";
import { orderAlfavetico } from "../../Redux/actions/actions";

const FilterAlfa = () => {
  const dispatch = useDispatch();

  const handlerAlfavetico = (event) => {
    event.preventDefault();
    dispatch(orderAlfavetico(event.target.value));
  };

  return (
      <div>
        <select
        onChange={(event)=>handlerAlfavetico(event)}
        name="filtroAlfavetico"
        >
        <option value="neutro"> Orden Alfavetico </option>
        <option value="AZ"> Ordenar A - Z </option>
        <option value="ZA"> Ordenar Z - A </option>    
        </select>
      </div>
  );
};

export default FilterAlfa;