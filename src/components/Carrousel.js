function Carrousel() {
  const datos = [
    {
      id: 1,
      imageUrl: require("../assets/Cafe Corinto.jpg"),
      description: "Cafe Corinto",
    },
    {
      id: 2,
      imageUrl: require("../assets/Café Cortez.jpg"),
      description: "Cafe Cortez",
    },
    {
      id: 3,
      imageUrl: require("../assets/Mozao Café.jpg"),
      description: "Mozao Café",
    },
    {
      id: 4,
      imageUrl: require("../assets/Caffenio.jpeg"),
      description: "Caffenio",
    },
  ];
  return (
    <div className="flex container items-center mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-12">
        {datos.map((d) => (
          <div
            key={d.id}
            className="relative bg-red-200 text-black rounded-xl shadow-lg h-96"
          >
            <img
              src={d.imageUrl}
              alt={d.description}
              className="h-full rounded-xl object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500 via-transparent to-transparent rounded-xl"></div>{" "}
            <div className="absolute text-gray-600 w-3/4 bg-slate-100">
              <h2>{d.description}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carrousel;
