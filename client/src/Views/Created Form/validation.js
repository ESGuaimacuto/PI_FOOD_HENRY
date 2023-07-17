import { useState } from "react"

const [errors, setErrors] = useState({
    title: "Se requiere un titulo para la receta",
    summary:"Debe agregar un resumen de la preparación",
    healthScore:"Indique el puntaje de salud de la receta",
    steps:"Debe agregar los pasos para la preparación de la receta"
  })

export const validation = (input, name)=>{
  if(name==="title"){
    if(input.title!=="") setErrors({...errors, title:""})
    else setErrors({...errors, title:"Título requerido"})
    return;
  }
  
  if(name==="summary"){
    if(input.summary!=="") setErrors({...errors, summary:""})
    else setErrors({...errors, summary:"Información requerida"})
    return;
  }

  if(name==="healthScore"){
    if(input.healthScore!=="") setErrors({...errors, healthScore:""})
    else setErrors({...errors, healthScore:"Información requerida"})
    return;
  }

  if(name==="steps"){
    if(input.steps!=="") setErrors({...errors, steps:""})
    else setErrors({...errors, steps:"Información requerida"})
    return;
  }
  
  // if(name==="image"){
  //   const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  //   if(input.email!=="") setErrors({...errors, email:""})
  //   else setErrors({...errors, email:"Email requerido"})

  //   if(regex.test(input.email)) setErrors({...errors, email:""})
  //   else setErrors({...errors, email:"Email tiene un formato erroneo"})

  //   return;
  // }
}

export const disable = () => {
  let disabled = true;
  for(let error in errors){
    if(errors[error]==="") disabled = false;
    else {
      disabled=true;
      break;
    }
  }
  return disabled;
}

 