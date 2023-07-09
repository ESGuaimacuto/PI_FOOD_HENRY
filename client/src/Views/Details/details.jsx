import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../Redux/actions/actions";

const Details = () => {
  const { idRecipes } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(idRecipes));
  }, [dispatch, idRecipes]);

  const allDetails = useSelector((state) => state.details);
  console.log(allDetails);

  if(!allDetails) {
    return(
      <div> CARGANDO... </div>
    )
  }; 

  return (
    <div>
      <h1>Detalles</h1>
      <div key={allDetails?.id} id={allDetails?.id} title={allDetails?.title}>
        <div>
          <img src={allDetails?.image} alt={allDetails?.title} />
          <h7>{allDetails?.id}</h7>
          <h1>{allDetails?.title}</h1>
          <h3>Tipos de dietas: {allDetails?.diets.join(", ")}</h3>
          <h5>Puntaje de salud: {allDetails?.healthScore}</h5>
          <h5>Resumen de la receta: {allDetails?.summary}</h5>
          <h5>Pasos de preparación: {allDetails?.steps.join(", ")}</h5>
          <Link to="/recipes">
            <button>Volver al inicio</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
