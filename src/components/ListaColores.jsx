import ItemColor from "./ItemColor";

const ListaColores = ({arrayColoresProps}) => {
  return (
    <section className="container">
      <div className="row">
        {
          arrayColoresProps.map((textoColor, indice) => <ItemColor key={indice} textoColorProps={textoColor}></ItemColor>)
        }
        
      </div>
    </section>
  );
};

export default ListaColores;
