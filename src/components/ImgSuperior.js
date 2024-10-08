import ChihuahuaFoto from "../assets/Chihuahua Centro Capital.jpg";
import "./css/ImgSuperior.css";
import Gradiente from "../assets/RectangleOrange.png";
import Botones from "./Boton";

function ImgSuperior() {
  return (
    <div className="image-container">
      <img className="recorte" src={ChihuahuaFoto} alt="" />
      <img src={Gradiente} className="recorte gradiente" />
      <div className="flex flex-col text-container">
        <div className="text-center">
          <h1 className="text-white">
            Bienvenido al centro <span>histórico</span>
          </h1>
        </div>
        <div>
          <div className="flex justify-center items-center mt-6">
            <Botones />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ImgSuperior;
