import { useState } from "react";
import { heroes } from "./data/Hero";
import { items } from "./data/items";
import Header from "./components/Header";
import HeroCard from "./components/HeroCard";

function App() {
  const [selectedHero, setSelectedHero] = useState(null);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", "Marksman", "Fighter", "Assassin", "Tank", "Mage", "Support"];

  const filteredHeroes = heroes.filter(hero => {
    const matchesCategory = category === "All" || hero.role === category;
    const matchesSearch = hero.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
      <Header />

      <div className="max-w-7xl mx-auto p-6">
        {/* Category Buttons */}
        <div className="mb-6 flex flex-wrap gap-3 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                category === cat
                  ? "bg-yellow-400 text-black shadow-[0_0_15px_rgba(255,255,0,0.7)] scale-105"
                  : "bg-gray-800 text-gray-300 hover:bg-pink-500 hover:text-white shadow-md"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search hero..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border rounded-full p-3 w-full md:w-1/2 mx-auto mb-6 focus:ring-2 focus:ring-yellow-400 focus:outline-none bg-gray-800 text-white placeholder-gray-400"
        />

        {/* Hero Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHeroes.map(hero => (
            <HeroCard key={hero.name} hero={hero} onSelect={setSelectedHero} />
          ))}
        </div>
      </div>

      {/* Hero Modal */}
      {selectedHero && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-purple-800 via-pink-700 to-indigo-900 rounded-2xl shadow-[0_0_20px_rgba(255,0,255,0.7)] p-6 w-full max-w-xl relative">
            
            <button
              onClick={() => setSelectedHero(null)}
              className="absolute top-2 right-2 text-white hover:text-yellow-400 text-xl font-bold"
            >
              &times;
            </button>

            <div className="flex flex-col md:flex-row gap-4 items-start">
              <img
                src={selectedHero.img}
                alt={selectedHero.name}
                className="w-full md:w-1/3 h-40 object-cover rounded-xl shadow-[0_0_15px_rgba(0,255,255,0.5)]"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-1 text-white">{selectedHero.name}</h2>
                <p className="text-yellow-400 mb-2">{selectedHero.role}</p>

                {/* Hero Build Items */}
                <div className="flex flex-wrap gap-2">
                  {selectedHero.build.map((itemName, index) => {
                    const item = items.find(i => i.name === itemName);
                    if (!item) return null;

                    return (
                      <div key={index} className="flex flex-col items-center bg-gray-900/50 p-2 rounded-lg shadow-md">
                        <img src={item.img} alt={item.name} className="w-12 h-12 object-contain" />
                        <span className="text-xs text-white mt-1">{item.name}</span>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
