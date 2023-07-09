import Card from "../Card/card";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Cards = () => {
  const allRecipes = useSelector((state) => state?.recipes);
  console.log(allRecipes);
  
  if(!allRecipes) {
    return(
      <div> CARGANDO... </div>
    )
  }; 

  return (
    <div>  Soy el contenedor
      {allRecipes?.map(({ id, title, summary, image, healthScore, steps, diets }) => (
          <Card
            key={id}
            id={id}
            title={title}
            summary={summary}
            image={image}
            healthScore={healthScore}
            steps={steps}
            diets={diets}
          /> 
        ))}
    </div>
  );
};

export default Cards;
