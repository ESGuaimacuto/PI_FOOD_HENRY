import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Landing Page</h1>
        <NavLink to={"/recipes"}>RECETAS SECRETAS</NavLink>
    </div>
  );
};

export default Landing;
