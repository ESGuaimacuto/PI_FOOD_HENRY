import { useState } from "react";
import { useDispatch } from "react-redux"
import validation from "./validation";
import { createdRecipe } from "../../Redux/actions/actions";

const Created = () => {
  const dispatch = useDispatch()

  const [input, setInput] = useState({
    title:"",
    image:"",
    summary:"",
    healthScore:"",
    steps:""
  })

  const handleSubmit = ()=>{
    dispatch(createdRecipe(input))
  }

  const handleChange = (event)=>{
    setInput({
      ...input,
      [event.target.name]:event.target.value
    })
  }



  return (
    <div>
      <h1>Agrega tu propia receta</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input type="Text" />
        </div>
        <div>
          <label>Image: </label>
          <input type="Text" />
        </div>
        <div>
          <label>Summary: </label>
          <input type="Text" />
        </div>
        <div>
          <label>Health Score: </label>
          <input type="Number" />
        </div>
        <div>
          <label>Steps: </label>
          <input type="Text" />
        </div>
        <div>
            <select name="" id=""></select>
        </div>
      </form>
    </div>
  );
};

export default Created;
