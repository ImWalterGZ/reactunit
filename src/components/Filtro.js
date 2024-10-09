import React, { useState } from "react";

const Filtro = () => {
  const [mostrarFiltro, setMostrarFiltro] = useState(false);
  const [planSeleccionado, setPlanSeleccionado] = useState("");
  const [categorias, setCategorias] = useState({
    cafeterias: false,
    restaurantes: false,
    bares: false,
    culturales: false,
  });
  const [ambiente, setAmbiente] = useState({
    chill: false,
    familiar: false,
    amigos: false,
    pareja: false,
  });
  const [precio, setPrecio] = useState({
    $: false,
    $$: false,
    $$$: false,
    "$$$$+": false,
  });

  const toggleFiltro = () => {
    setMostrarFiltro(!mostrarFiltro);
  };

  return (
    <div className="container mx-auto my-8 p-6 bg-gradient-to-br from-slate-100  to-slate-300 rounded-xl shadow-xl">
      <header className="flex justify-between items-center my-3">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold ml-10">Vamos al centro</h1>
        </div>
        <div className="relative">
          <button
            onClick={toggleFiltro}
            className=" rounded-xl py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:bg-slate-500 hover:text-white  transition-all"
          >
            Elige un plan ▼
          </button>
        </div>
      </header>

      {mostrarFiltro && (
        <main className="flex space-x-6">
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-3">Categorías</h2>
            <ul className="space-y-2">
              {Object.entries(categorias).map(([key, value]) => (
                <li key={key} className="flex items-center">
                  <input
                    type="checkbox"
                    id={key}
                    checked={value}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <label
                    htmlFor={key}
                    className="ml-2 text-gray-700 capitalize"
                  >
                    {key}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-3">Ambiente</h2>
            <ul className="space-y-2">
              {Object.entries(ambiente).map(([key, value]) => (
                <li key={key} className="flex items-center">
                  <input
                    type="checkbox"
                    id={key}
                    checked={value}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <label
                    htmlFor={key}
                    className="ml-2 text-gray-700 capitalize"
                  >
                    {key}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-3">Precio</h2>
            <ul className="space-y-2">
              {Object.entries(precio).map(([key, value]) => (
                <li key={key} className="flex items-center">
                  <input
                    type="checkbox"
                    id={key}
                    checked={value}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <label htmlFor={key} className="ml-2 text-gray-700">
                    {key}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-none">
            <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              Buscar
            </button>
          </div>
        </main>
      )}
    </div>
  );
};

export default Filtro;
