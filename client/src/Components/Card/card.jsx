import { Link } from "react-router-dom";

const Card = ({ id, title, image, diets }) => {
  return (
    <div>
      <h2>{title}</h2>
      <Link to={`/recipes/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <p>{diets?.map(diet => <a key={diet}>{diet.toUpperCase()}</a>)}</p>
    </div>
  );
};

export default Card;
