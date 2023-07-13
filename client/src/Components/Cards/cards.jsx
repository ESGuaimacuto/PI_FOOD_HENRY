import { useDispatch } from "react-redux";
import Card from "../Card/card";
import Paginado from "../Paginado/paginado";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState, useEffect } from "react";

const Cards = () => {
  const dispacth = useDispatch();
  const allRecipes = useSelector((state) => state?.recipes);
  console.log(allRecipes);
  
  if (!allRecipes) {
    return <div> CARGANDO... </div>;
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(9);
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = allRecipes?.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  const paginado = (pagNumber) => {
    setCurrentPage(pagNumber);
  };

  //const numRecipes = allRecipes?.length;
  
  function pagePrev() {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  }

  function pageNext() {
    let lastPage = Math.ceil(allRecipes.length / recipesPerPage);
    if (currentPage < lastPage) setCurrentPage(currentPage + 1);
  }

  useEffect(() => {
    setCurrentPage(1);
  }, [dispacth]);

  return (
    <div>
      <Paginado
        // recipesPerPage={recipesPerPage}
        // numRecipes = {numRecipes}
        paginado={paginado}
        pageNext={pageNext}
        pagePrev={pagePrev}
      />
      {currentRecipes?.map(
        ({ id, title, summary, image, healthScore, steps, diets }) => (
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
        )
      )}
    </div>
  );
};

export default Cards;
