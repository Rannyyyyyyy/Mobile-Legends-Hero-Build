export default function HeroCard({ hero, onSelect }) {
  return (
    <div
      onClick={() => onSelect(hero)}
      className="cursor-pointer border rounded-lg overflow-hidden shadow hover:shadow-2xl transition transform hover:scale-105 bg-white"
    >
      <img
        src={hero.img}
        alt={hero.name}
        className="w-full h-56 object-cover bg-gray-200"
      />

      <div className="p-4">
        <h2 className="font-bold text-lg">{hero.name}</h2>
        <p className="text-gray-500">{hero.role}</p>
      </div>
    </div>
  );
}
