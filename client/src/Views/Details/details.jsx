import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../Redux/actions/actions";
import "../Details/details.css";

const Details = () => {
  const { idRecipes } = useParams();
  console.log(idRecipes);
  const dispatch = useDispatch();
  const allDetails = useSelector((state) => state.details);
  console.log(allDetails);

  useEffect(() => {
    console.log("Entre al use Efec");
    dispatch(getDetails(idRecipes));
  }, [dispatch, idRecipes]);

  if (!allDetails) {
    return <div> CARGANDO... </div>;
  }

  return (
    <div className="fichaDetalle">
      {allDetails.map(
        ({
          id,
          title,
          image,
          diets,
          healthScore,
          summary,
          steps,
          Diets,
          created,
        }) => {
          if (created === true) {
            return (
              <div
                key={id}
                id={id}
                title={title}
                image={image}
                diets={Diets}
                healthScore={healthScore}
                summary={summary}
                steps={steps}
              >
                <div>
                  <h6>N° de la Receta: {id}</h6>
                  <h1 className="tituloDetalle">{title}</h1>
                  <img className="imageDetalle" src={image} alt={title} />
                  <h5>Puntaje de salud: {healthScore}</h5>
                  <h3>Tipos de Dieta: {Diets[0].name}
                  {console.log(Diets)}
                  </h3>
                  <p className="pasos">
                    <strong>Resumen de la preparación: </strong>
                    {summary.replace(/<[^>]+>/g, "")}
                  </p>
                  <div>
                    <strong>Pasos para la preparación: </strong>
                    {steps}
                  </div>
                  <Link to={"/recipes"}>
                    <button className="buttonDetalle">Home</button>
                  </Link>
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={id}
                id={id}
                title={title}
                image={image}
                diets={diets}
                healthScore={healthScore}
                summary={summary}
                steps={steps}
              >
                <div>
                  <h6>N° de la Receta: {id}</h6>
                  <h1 className="tituloDetalle">{title}</h1>
                  <img className="imageDetalle" src={image} alt={title} />
                  <h5>Puntaje de salud: {healthScore}</h5>
                  <h3>Tipos de Dieta: {diets.join(", ")}</h3>
                  <p className="pasos">
                    <strong>Resumen de la preparación: </strong>
                    {summary.replace(/<[^>]+>/g, "")}
                  </p>
                  <div>
                    <strong>Pasos para la preparación: </strong>
                    {steps.map((step) => {
                      return (
                        <p className="pasos">
                          {" "}
                          {step.number}. {step.step}{" "}
                        </p>
                      );
                    })}
                  </div>
                  <Link to={"/recipes"}>
                    <button className="buttonDetalle">Home</button>
                  </Link>
                </div>
              </div>
            );
          }
        }
      )}
    </div>
  );
};

export default Details;
