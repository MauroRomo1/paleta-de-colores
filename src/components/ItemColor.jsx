const ItemColor = ({ color }) => {
  let cardStyles = {
    background: color,
  };

  return (
    <article className="col">
      <div className="card h-100 shadow">
        <div className="colorCard text-white" style={cardStyles}></div>
        <div className="card-body">
          <h5 className="card-title text-center text-uppercase">{color}</h5>
          <div className="d-grid">
            <button className="btn btn-danger">Borrar</button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ItemColor;
