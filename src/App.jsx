import Header from "../src/components/header.jsx";
import { useState } from "react";

function App() {
  const [name, setName] = useState('');
  const [listOfNames, setListOfNames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newName = { 
      name: name
    }

    setListOfNames([...listOfNames, newName]); // 
    console.log(newName);
  }

  return (
    <>
      <Header />
      <h1>Sample</h1>
      <section>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            <h1>{name}</h1>
          </div>
          <button type="submit">Search</button>  
        </form>

      </section>
    
    
    </>
  );
}

export default App;
