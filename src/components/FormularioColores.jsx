import ListaColores from "./ListaColores";

const FormularioColores = () => {
  return (
    <>
      <section className=" container  border border-1 p-3 d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
        <div className="caja-formulario"></div>
        <form>
          <div className="mb-3 d-flex flex-column flex-md-row justify-content-center gap-1 ">
            <input
              type="text"
              className="form-control-lg"
              id="inputColor"
              placeholder="Ingresa un color ej.blue"
            />
            <button className="btn btn-success btn-lg">Agregar</button>
          </div>
        </form>
      </section>
      <ListaColores></ListaColores>
    </>
  );
};

export default FormularioColores;
