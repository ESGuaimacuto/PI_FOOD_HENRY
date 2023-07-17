import { NavLink } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.body}>
      <div className={style.container}>
        <h1 className={style.titulo}>
          <NavLink className={style.titulo} to={"/recipes"}>
             RECETAS SECRETAS</NavLink>
        </h1>
      </div>
      <script>
       
      </script>
    </div>
  );
};

export default Landing;
