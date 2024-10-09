import Filtro from "./components/Filtro";
import Header from "./components/Header";
import ImgSuperior from "./components/ImgSuperior";
import Section from "./components/Seccion";

function App() {
  return (
    <div>
      <ImgSuperior />
      <Filtro />
      <Section titulo="cafeterias" />
    </div>
  );
}

export default App;
