import React from "react";

import {
  IconCoffee,
  IconBeerFilled,
  IconBuildingCastle,
} from "@tabler/icons-react";
import "./css/Boton.css";
import "bootstrap/dist/css/bootstrap.css";

const CreateButtons = ({ icon: Icon, label, link }) => (
  <div className="col-4 d-flex justify-content-center">
    <div className="viewButton">
      <Icon size="23" color="black" className="icono" />
      <h2>{label}</h2>
      <span className="hyperspan">
        <a href={link}></a>
      </span>
    </div>
  </div>
);

function Botones() {
  return (
    <div className="container ">
      <div className="row ">
        <CreateButtons icon={IconCoffee} label="Cafeterías" link="Alink.com" />
        <CreateButtons
          icon={IconBeerFilled}
          label="Bares"
          link="Anotherlink.com"
        />
        <CreateButtons
          icon={IconBuildingCastle}
          label="Culturales"
          link="Anotherlink.com"
        />
      </div>
    </div>
  );
}

export default Botones;
