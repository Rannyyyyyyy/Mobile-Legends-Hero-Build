const categories = ["All", "Tank", "Fighter", "Assassin", "Mage", "Support", "Marksman"];

const Categories = ({ selected, onChange }) => {
  return (
    <div className="flex gap-2 mt-6 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-4 py-2 rounded-lg ${
            selected === cat
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Categories;
