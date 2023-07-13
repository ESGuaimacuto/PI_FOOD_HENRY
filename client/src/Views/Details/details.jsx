import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../Redux/actions/actions";

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
    <div>
      <h1>Detalles de la Receta</h1>
      {allDetails.map(
        ({ id, title, image, diets, healthScore, summary, steps }) => {
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
                <h6>{id}</h6>
                <h2> {title} </h2>
                <img src={image} alt={title} />
                <h5>Puntaje de salud: {healthScore}</h5>
                <h5>Tipos de Dieta: {diets}</h5>
                <p>
                  Resumen de la preparación: {summary.replace(/<[^>]+>/g, "")}
                </p>
                <div>
                  Pasos para la prepación:
                  {steps.map(({ number, step }) => {
                    return (
                      <p>
                        {" "}
                        {number}. {step}{" "}
                      </p>
                    );
                  })}
                </div>
                <Link to={"/recipes"}  >
                <button>Home</button>
                </Link>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Details;
