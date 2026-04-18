import { useState } from "react";
import ListaColores from "./ListaColores";

const FormularioColores = () => {
  const [arrayColores, setArrayColores] = useState([]);
  const [color, setColor] = useState("");

  const handleSubmit = (e)=>{
  e.preventDefault()
  console.log('submit')
  //validamos el color
  const colorBuscado = arrayColores.find((itemColor)=> itemColor.toLowerCase() === color.toLowerCase().trim() )
  console.log(colorBuscado)
  if(colorBuscado){
    return alert('La tarea ya existe')
  }
  //agregar el "color" dentro del arrayTareas
  setArrayColores([...arrayColores, color.trim()])
  //limpiar el input
  setColor('')
}
  return (
    <>
      <section className=" container  border border-1 p-3 d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
        <div className="caja-formulario"></div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 d-flex flex-column flex-md-row justify-content-center gap-1 ">
            <input
              type="text"
              className="form-control-lg"
              id="inputColor"
              placeholder="Ingresa un color ej.blue"
              onChange={(e) => setColor(e.target.value)}
              value={color}
            />
            <button className="btn btn-success btn-lg">Agregar</button>
          </div>
        </form>
      </section>
      <ListaColores arrayColoresProps={arrayColores}></ListaColores>
    </>
  );
};

export default FormularioColores;
