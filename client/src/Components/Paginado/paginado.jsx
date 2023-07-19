import React from "react";
import { useSelector } from "react-redux";
import "../Paginado/paginado.css"

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
  for (let i = 1; i <= Math.ceil(numRecipes / recipesPerPage); i++) {
    pagNumber.push(i);
  }
  console.log(pagNumber);

  return (
    <nav>
      <div className="div2">
        <div onClick={pagePrev}>
          <button className="flechaL"> «-- Prev </button>
        </div>
        {pagNumber &&
          pagNumber.map((number) => (
            <li className="lista" key={number}>
              {" "}
              <button className="botonPage" onClick={() => paginado(number)}>{number}</button>{" "}
            </li>
          ))}
        <div onClick={pageNext}>
          <button className="flechaR"> Next --» </button>
        </div>
      </div>
    </nav>
  );
}
