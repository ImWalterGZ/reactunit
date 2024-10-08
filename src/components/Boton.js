import React from "react";

import {
  IconCoffee,
  IconBeerFilled,
  IconBuildingCastle,
} from "@tabler/icons-react";
import "./css/Boton.css";

const CreateButtons = ({ icon: Icon, label, link }) => (
  <div className="flex w-4/12 h-10 justify-center">
    <div className="viewButton">
      <Icon size="23" color="black" className="icono" />
      <h2 className="">{label}</h2>
      <span className="hyperspan">
        <a href={link}></a>
      </span>
    </div>
  </div>
);

function Botones() {
  return (
    <div className="container">
      <div className="flex justify-center text-center">
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
