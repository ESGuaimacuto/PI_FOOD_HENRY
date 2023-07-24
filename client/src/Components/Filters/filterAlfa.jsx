import { useDispatch, useSelector } from "react-redux";
import { orderAlfavetico, setFilter } from "../../Redux/actions/actions";
import "../NavBar/navBar.css"
import { useState } from "react";

const FilterAlfa = () => {
  const dispatch = useDispatch();
  const selectedOrder = useSelector((state)=>state.filters.orderBy)
  const [selecOrder, setSelecOrder] = useState(selectedOrder)

  const handlerAlfavetico = (event) => {
    event.preventDefault();
    setSelecOrder(event.target.value)
    dispatch(setFilter("orderBy", event.target.value))
    dispatch(orderAlfavetico(event.target.value));
  };

  return (
      <div>
        <select
        className="opciones"
        onChange={(event)=>handlerAlfavetico(event)}
        name="filtroAlfavetico"
        value={selecOrder}
        >
        <option value="neutro"> Orden Alfabético </option>
        <option value="AZ"> Ordenar A - Z </option>
        <option value="ZA"> Ordenar Z - A </option>    
        </select>
      </div>
  );
};

export default FilterAlfa;
