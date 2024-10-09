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
            className="relative bg-red-200 text-black rounded-xl shadow-lg h-96 hover:scale-105 transition-all duration-150"
          >
            <img
              src={d.imageUrl}
              alt={d.description}
              className="h-full rounded-xl object-cover "
            />
            <div className="absolute flex items-end justify-center inset-0 bg-gradient-to-t from-cyan-500 via-transparent to-transparent rounded-xl">
              <div>
                <h1 className="bg-gray-100 px-3 py-2 my-20 rounded-xl hover:shadow-xl transition-all hover:transform hover:scale-110 ">
                  {d.description}
                </h1>
              </div>
            </div>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carrousel;
