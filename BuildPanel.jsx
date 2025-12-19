import { items } from "../data/items"; // siguraduhing tama ang path

export default function BuildPanel({ hero, onClose }) {
  if (!hero) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose} 
    >
      <div 
        className="bg-white p-6 rounded-xl shadow-lg w-96 relative" 
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 font-bold text-xl"
        >
          &times;
        </button>

        <img src={hero.img} alt={hero.name} className="w-full h-56 object-cover rounded mb-4" />

        <h2 className="text-2xl font-bold mb-1">{hero.name}</h2>
        <p className="text-gray-500 mb-4">{hero.role}</p>

        <h3 className="font-semibold mb-2">Build:</h3>
        <div className="flex flex-wrap gap-2">
          {hero.build.map((itemName, index) => {
            const item = items.find((i) => i.name === itemName);
            if (!item) return null;

            return (
              <img
                key={index}
                src={item.img}
                alt={item.name}
                className="w-12 h-12 object-contain rounded transition-transform duration-200 ease-in-out hover:scale-105 cursor-pointer"
                title={item.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
