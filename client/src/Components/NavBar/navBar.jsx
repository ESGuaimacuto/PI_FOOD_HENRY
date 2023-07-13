import FilterAlfa from "../Filters/filterAlfa";
import FilterDiet from "../Filters/filterDiets";
import FilterHealth from "../Filters/filterHealthScore"
import FilterOrigin from "../Filters/filterOrigin"

const NavBar = () => {
  return (
    <div>
      <FilterAlfa/>
      <FilterHealth/>
      <FilterOrigin/>
      <FilterDiet/>
    </div>
  );
};

export default NavBar;
