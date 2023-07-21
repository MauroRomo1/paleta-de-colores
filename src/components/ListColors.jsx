const ListColors = () => {
  return (
    <section className="container my-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <article className="col">
          <div className="card h-100 shadow">
            <div
              className="colorCard border border-3"
              style={{ background: "#563d7c" }}
            ></div>
            <div className="card-body">
              <h5 className="card-title text-center text-uppercase">#563d7c</h5>
              <div className="d-grid">
                <button className="btn btn-danger">Borrar</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ListColors;
