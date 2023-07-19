import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createdRecipe, getDiets, getRecipes } from "../../Redux/actions/actions";
import "../Created Form/created.css";

const Created = () => {
  const dispatch = useDispatch();
  const allDiets = useSelector((state) => state.diets);
  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  const [input, setInput] = useState({
    title: "",
    image: "",
    summary: "",
    healthScore: "",
    steps: "",
    diets: [],
  });

  const [errors, setErrors] = useState({
    title: "Se requiere un titulo para la receta",
    summary: "Debe agregar un resumen de la preparación",
    healthScore: "Indique el puntaje de salud de la receta",
    steps: "Debe agregar los pasos para la preparación de la receta",
  });

  const validation = (input, name) => {
    if (name === "title") {
      if (input.title !== "") setErrors({ ...errors, title: "" });
      else setErrors({ ...errors, title: "Título requerido" });
      return;
    }

    if (name === "summary") {
      if (input.summary !== "") setErrors({ ...errors, summary: "" });
      else setErrors({ ...errors, summary: "Información requerida" });
      return;
    }

    if (name === "healthScore") {
      if (input.healthScore !== "") setErrors({ ...errors, healthScore: "" });
      // if(input.healthScore > 100) setErrors({...errors, healthScore: "El máximo es de 100 puntos"})
      // if(input.healthScore < 0) setErrors({...errors, healthScore: "El minitomo es de 0"})
      else setErrors({ ...errors, healthScore: "Información requerida" });
      return;
    }

    if (name === "steps") {
      if (input.steps !== "") setErrors({ ...errors, steps: "" });
      else setErrors({ ...errors, steps: "Información requerida" });
      return;
    }
  };

  const disable = () => {
    let disabled = true;
    for (let error in errors) {
      if (errors[error] === "") disabled = false;
      else {
        disabled = true;
        break;
      }
    }
    return disabled;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createdRecipe(input));
    dispatch(getRecipes())
  };
  console.log(input);

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    validation(
      {
        ...input,
        [event.target.name]: event.target.value,
      },
      event.target.name
    );
  };

  const handleDelete = (event) => {
    setInput({
      ...input,
      diets: input.diets.filter((diet) => diet !== event),
    });
  };

  const handleSelection = (event) => {
    console.log(event);
    if (!input.diets.includes(event.target.value)) {
      setInput({
        ...input,
        diets: [...input.diets, event.target.value],
      });
    }
  };

  console.log(input.diets);

  return (
    <div className="bodyForm">
      <div className="fichaForm">
        <h1>Agrega tu propia receta</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <strong>Title:</strong>
          </label>
          <div className="formulario">
            <input
              className="inputTitulo"
              type="Text"
              name="title"
              onChange={handleChange}
              placeholder="Agregar título"
            />
          <label className="labelError">{errors.title}</label>
          </div>
            <label>
              <strong>Image: </strong>
            </label>
          <div className="formulario">
            <input
              className="inputTitulo"
              type="Text"
              name="image"
              onChange={handleChange}
              placeholder="Indicar URL de la imagen"
            />
          </div>
          <div className="formulario">
            <label>
              <strong>Summary: </strong>
            </label>
            <input
              className="inputSummary"
              type="Text"
              name="summary"
              onChange={handleChange}
              placeholder="Resumen de preparación"
            />
          </div>
          <label className="labelError">{errors.summary}</label>
          <label className="labelError"></label>
          <div className="formulario">
            <label>
              <strong>Health Score:</strong>
            </label>
            <input
              className="inputScore"
              type="Number"
              name="healthScore"
              onChange={handleChange}
              placeholder="Indique puntaje de salud"
              max={100}
              min={0}
            />
          <label className="labelError">{errors.healthScore}</label>
          </div>
            <label>
              <strong>Steps: </strong>
            </label>
          <div className="formulario">
            <input
              className="inputSummary"
              type="Text"
              name="steps"
              onChange={handleChange}
              placeholder="Indicar los pasos a seguir"
            />
          </div>
          <label className="labelError">{errors.steps}</label>
          <div className="formularioDieta">
            <strong>Seleccionar los tipos de dieta:</strong>
            <select
              className="seleccionDietas"
              onChange={(event) => handleSelection(event)}
            >
              <option value="selec" hidden>
                Tipos de dieta
              </option>
              {allDiets.map((diet) => {
                return (
                  <option className="optionDieta" value={diet.id} key={diet.id}>
                    {diet.name}
                  </option>
                );
              })}
            </select>
            {input.diets.map((e) => {
              return (
                <ul>
                  <li className="liCreated">
                    <p>{e}</p>
                    <button className="X" onClick={() => handleDelete(e)}>X</button>
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="divBoton">
            <button className="botonSubmit" disabled={disable()} type="submit">
              Cargar Receta
            </button>
          </div>
          <div className="divBoton">
            <Link to={"/recipes"}>
              <button className="botonHome">Home</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Created;
