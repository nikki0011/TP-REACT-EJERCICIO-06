const ItemColor = () => {
  return (
    <div className="col-6 col-md-4 col-lg-3">
      <div class="card mt-3">
        <div class="card-body border-0 d-flex flex-column align-items-center row-gap-2">
          <h5 class="card-title">Nombre color</h5>
          <div className="caja-colorItem"></div>
          <div>
            <button class="btn btn-danger">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemColor;
