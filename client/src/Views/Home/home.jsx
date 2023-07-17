import NavBar from "../../Components/NavBar/navBar.jsx";
import Cards from "../../Components/Cards/cards.jsx";
import SearchBar from "../../Components/SearchBar/searchBar.jsx";
import Paginado from "../../Components/Paginado/paginado.jsx";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getRecipes, getDiets } from "../../Redux/actions/actions.js";
import "../Home/home.css"

const Home = () => {
  const dispacth = useDispatch();
   
  useEffect(() => {
    dispacth(getRecipes());
  }, [dispacth]);

  useEffect(() => {
    dispacth(getDiets());
  }, [dispacth]);

  return (
      <div className="back">
        <NavBar />
        <SearchBar />
        <Cards />
      </div>
  );
};

export default Home;
