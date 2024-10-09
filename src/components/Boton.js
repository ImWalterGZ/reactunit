import React from "react";

import {
  IconCoffee,
  IconBeerFilled,
  IconBuildingCastle,
} from "@tabler/icons-react";

const CreateButtons = ({ icon: Icon, label, link }) => (
  <div className="flex w-4/12 h-10 justify-center ">
    <div className="group flex flex-row items-center justify-around bg-slate-100 px-8 py-6 font-normal text-2xl  rounded-2xl shadow-md hover:shadow-2xl hover:scale-110 transition-all hover:-rotate-2 duration-200">
      <Icon
        size="23"
        color="black"
        className="mr-2 group-hover:scale-150 group-hover:rotate-12 transition-all"
      />
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
