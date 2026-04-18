const ItemColor = ({ textoColorProps, borrarColorProps }) => {
  return (
    <div className="col-6 col-md-4 col-lg-3">
      <div className="card mt-3">
        <div className="card-body border-0 d-flex flex-column align-items-center row-gap-2">
          <h5 className="card-title">{textoColorProps}</h5>
          <div
            className="caja-colorItem"
            style={{ backgroundColor: textoColorProps }}
          ></div>
          <div>
            <button
              className="btn btn-danger"
              onClick={() => borrarColorProps(textoColorProps)}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemColor;
