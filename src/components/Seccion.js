import Carrousel from "./Carrousel";

function Section({ titulo, data }) {
  return (
    <div className="m-10">
      <h1 className="text-5xl font-semibold text-gray-600">Top {titulo}</h1>
      <div className="mt-6">
        <Carrousel />
      </div>
    </div>
  );
}

export default Section;
