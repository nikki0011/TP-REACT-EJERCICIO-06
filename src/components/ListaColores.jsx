import ItemColor from "./ItemColor";

const ListaColores = ({ arrayColoresProps, borrarColorProps }) => {
  return (
    <section className="container">
      <div className="row">
        {arrayColoresProps.map((textoColor, indice) => (
          <ItemColor
            key={indice}
            textoColorProps={textoColor}
            borrarColorProps={borrarColorProps}
          ></ItemColor>
        ))}
      </div>
    </section>
  );
};

export default ListaColores;
