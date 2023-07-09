import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Views/Home/home";
import Landing from "./Views/Landing/Landing.jsx";
import Created from "./Views/Created Form/Created";
import Details from "./Views/Details/details";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/recipes" element={<Home/>} />
          <Route path="/recipes/:idRecipes" element={<Details/>} />
          <Route path="/recipes" element={<Details/>} />
          <Route path="/create" element={<Created/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
