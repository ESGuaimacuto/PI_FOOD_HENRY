import FilterAlfa from "../Filters/filterAlfa";
import FilterDiet from "../Filters/filterDiets";
import FilterHealth from "../Filters/filterHealthScore";
import FilterOrigin from "../Filters/filterOrigin";
import "../NavBar/navBar.css";

const NavBar = () => {
  return (
    <div className="div">
      <div className="contenedorTitulo">
        <h3 className="receta">RECETAS SECRETAS</h3>
      </div>
      <FilterAlfa />
      <FilterHealth />
      <FilterOrigin />
      <FilterDiet />
    </div>
  );
};

export default NavBar;
