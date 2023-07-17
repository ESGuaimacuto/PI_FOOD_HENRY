import { Link } from "react-router-dom";
import "../Card/card.css"

const Card = ({ id, title, image, diets }) => {
  return (
    <div className="ficha">
      <h3 className="titulo">{title}</h3>
      <Link to={`/recipes/${id}`}>
        <img className="image" src={image} alt={title} />
      </Link>
      <a>Tipos de dietas:</a>
      <p>{diets?.map(diet => <a key={diet}>{diet}</a>)}</p>
    </div>
  );
};

export default Card;
