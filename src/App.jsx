import "bootstrap/dist/css/bootstrap.min.css";
import FormColor from "./components/FormColor";
import { useState } from "react";
const App = () => {
  return (
    <>
      <header>
        <h2 className="text-center">
          Paleta de colores
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Artist%20Palette.png"
            alt="Artist Palette"
            className="paletteColorImg"
          />
        </h2>
      </header>
      <main>
        <FormColor />
      </main>
      <footer>
        <h5 className="text-center p-2">
          &copy; Todos los derechos reservados.
        </h5>
      </footer>
    </>
  );
};

export default App;
