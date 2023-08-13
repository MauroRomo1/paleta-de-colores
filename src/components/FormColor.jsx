import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import ListColors from "./ListColors";

const FormColor = () => {
  const [color, setColor] = useState("#563d7c");

  let listColorLocalStorage =
    JSON.parse(localStorage.getItem("listColor")) || [];
  const [listColors, setListColors] = useState(listColorLocalStorage);

  useEffect(() => {
    let colorSelected = document.querySelector("#colorSelected");
    colorSelected.style.backgroundColor = color;
  }, [color]);

  useEffect(() => {
    localStorage.setItem("listColor", JSON.stringify(listColors));
  }, [listColors]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const foundColor = listColors.find((lColor) => lColor === color);

    if (foundColor) {
      Swal.fire({
        title: "<h5>Ese color ya existe en la lista</h5>",
      });
    } else {
      setListColors([...listColors, color]);
    }
  };

  const deletColor = (colorDelet) => {
    let listColorfilter = listColors.filter(
      (itemColor) => colorDelet !== itemColor
    );

    setListColors(listColorfilter);
  };

  return (
    <>
      <section className="container my-4">
        <form
          onSubmit={handleSubmit}
          className="border border-3  bg-white shadow p-3 mb-5"
        >
          <div className="row justify-content-center">
            <label htmlFor="colorPicker" className="form-label text-center">
              <img
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Artist.png"
                alt="Artist"
                className="artistImg"
              />
              Elige un color
            </label>
            <div className="border border-2 border-dark p-3 col-11 col-md-3 col-lg-2 d-flex justify-content-center align-items-center">
              <input
                onChange={(e) => {
                  setColor(e.target.value);
                }}
                type="color"
                className="form-control form-control-color colorInput"
                id="colorPicker"
                value={color}
                title="Color a elegir"
              />
            </div>
            <div
              className="p-3 col-11 col-md-8 col-lg-9 colorPreview"
              id="colorSelected"
            >
              <h2 className="text-center text-white text-uppercase">{color}</h2>
            </div>
          </div>
          <div className="d-grid mt-3 d-md-flex justify-content-md-end">
            <button className="btn btn-primary btnGuardar" type="submit">
              Guardar
            </button>
          </div>
        </form>
      </section>
      <ListColors listColors={listColors} deletColor={deletColor} />
    </>
  );
};

export default FormColor;
