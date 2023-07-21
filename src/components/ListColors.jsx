import ItemColor from "./ItemColor";

const ListColors = ({ listColors }) => {
  return (
    <section className="container my-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {listColors.map((color) => (
          <ItemColor key={color} color={color} />
        ))}
      </div>
    </section>
  );
};

export default ListColors;
