import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { searchTitle } from "../../Redux/actions/actions";
import "../SearchBar/searchBar.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [focus, setFocus] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    event.preventDefault(event);
    setTitle(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(event);
    setLoading(true);
    await dispatch(searchTitle(title));
    setLoading(false);
    setTitle("");
  };

  const handleInputFocus = () => {
    setFocus(true);
  };

  const handleInputBlur = () => {
    setFocus(false);
  };

  const resetButon = () => {
    setLoading(true);
    location.reload();
    setLoading(false);
  };

  return (
    <div className="div1">
      <input
        className="input"
        id="Busqueda"
        type="text"
        placeholder="Buscar receta por nombre"
        onChange={handleChange}
        value={title}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <button
        className="button"
        type="submit"
        onClick={(event) => handleSubmit(event)}
      >
        Buscar
      </button>
      <button className="button" onClick={resetButon}>
        Limpiar Busqueda
      </button>
      <Link to="/create">
        <button className="button">Crear Receta</button>
      </Link>
      <div>
        {loading && (
          <div className="progressbar">CARGANDO INFORMACIÓN SOLICITADA</div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
