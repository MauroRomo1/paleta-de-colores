import "bootstrap/dist/css/bootstrap.min.css";

import FormColor from "./components/FormColor";

const App = () => {
  return (
    <>
      <header className="bg-white">
        <h4 className="text-center my-2">
          Paleta de colores
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Artist%20Palette.png"
            alt="Artist Palette"
            className="paletteColorImg"
          />
        </h4>
      </header>
      <main>
        <FormColor />
      </main>
      <footer>
        <h6 className="text-center p-3">
          &copy; Todos los derechos reservados.
        </h6>
      </footer>
    </>
  );
};

export default App;
