import NavBar from "../../Components/NavBar/navBar.jsx";
import Cards from "../../Components/Cards/cards.jsx";
import SearchBar from "../../Components/SearchBar/searchBar.jsx";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getRecipes, getDiets } from "../../Redux/actions/actions.js";

const Home = () => {
  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(getRecipes());
  }, [dispacth]);

  useEffect(() => {
    dispacth(getDiets());
  }, [dispacth]);

  return (
      <div>
        <NavBar />
        <SearchBar />
        <Cards />
      </div>
  );
};

export default Home;
