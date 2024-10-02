import "./css/Tarjeta.css";

function Tarjeta(props) {
  return (
    <div className="tarjeta-completa ">
      <div className="img-container">
        <div className="info-container">
          <h4>{props.nombre}</h4>
        </div>
        <div className="gradient"></div>
        <img src={props.path} alt="Card Image" className="cardImage" />
      </div>
    </div>
  );
}

export default Tarjeta;
