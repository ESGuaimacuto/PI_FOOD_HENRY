import React from "react";
import { useSelector } from "react-redux";

export default function Paginado({
  numRecipes,
  recipesPerPage,
  paginado,
  pageNext,
  pagePrev,
}) {
  //   const allRecipes = useSelector((state) => state.recipes);
  //   const numRecipes = allRecipes.length

  const pagNumber = [];
  for (let i = 1; (i = Math.round(numRecipes / recipesPerPage)); i++) {
    pagNumber.push(i);
  }
  console.log(pagNumber);

  return (
    <nav>
      <div>
        <div onClick={pagePrev}>
          <button> «-- </button>
        </div>
        {pagNumber &&
          pagNumber.map((number) => (
            <li key={number}>
              {" "}
              <button onClick={() => paginado(number)}>{number}</button>{" "}
            </li>
          ))}
        <div onClick={pageNext}>
          <button> --» </button>
        </div>
      </div>
    </nav>
  );
}
