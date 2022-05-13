import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [allCats, setAllCats] = useState([])

  useEffect(() => {
    fetchCatData()
  }, [])

  const fetchCatData = async () => {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
      const data = await response.json();
      setAllCats(data);
    } catch (err){
      console.log(err.message);
    }
  }

  return (
    <div className="App">
      <h1>BONK</h1>
      {allCats.map((cat, index) => {
        return <img key={index} src={cat.url} alt={index}/>
      })}
    </div>
  );
}

export default App;
