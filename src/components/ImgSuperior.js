import ChihuahuaFoto from "../assets/Chihuahua Centro Capital.jpg";
import "./css/ImgSuperior.css";
import Gradiente from "../assets/RectangleOrange.png";
import Botones from "./Boton";

function ImgSuperior() {
  return (
    <div className="image-container">
      <img className="recorte" src={ChihuahuaFoto} alt="" />
      <img src={Gradiente} className="recorte gradiente" />
      <div className="text-container">
        <h1>
          Bienvenido al centro <span>histórico</span>
        </h1>
      </div>
      <div className="buttons-container">
        <Botones />
      </div>
    </div>
  );
}
export default ImgSuperior;
