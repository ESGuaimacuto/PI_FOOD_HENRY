import { Link } from "react-router-dom";
import "../Card/card.css"

const Card = ({ id, title, image, diets, Diets }) => {
  //  console.log(Diets[0]);
  diets === undefined ? diets = Diets.map((name)=>name.name) : diets
  console.log(diets);
  
  return (
    <div className="ficha">
      <h3 className="titulo">{title}</h3>
      <Link to={`/recipes/${id}`}>
        <img className="image" src={image} alt={title} />
      </Link>
      <a>Tipos de dietas:</a>
      <p>{Array.isArray(diets) 
      ? diets.join(", ")
      : diets.join(", ")}</p>
    </div>
  );
};

export default Card;
