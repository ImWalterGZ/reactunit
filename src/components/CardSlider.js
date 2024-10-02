import Tarjeta from "./Tarjeta";
import caffenio from "../assets/Caffenio.jpeg";

function CardSlider(props) {
  const sliderSize = {
    display: "flex",
    gap: "1vw",
    padding: "10px",
    paddingLeft: "5%",
    overflow: "scroll",
  };

  return <div style={sliderSize}>{props.children}</div>;
}
export default CardSlider;
