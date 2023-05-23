import { useState, useEffect, useRef } from 'react';

import './App.css';

function App() {
  const [areaPlace, setAreaPlace] = useState('');
  const [locationData, setLocationData] = useState(null);
  const nameRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${areaPlace}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'c91f9666e1msha2a78962a9ff863p1255ffjsnc55172833efb',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        setLocationData(result.location);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [areaPlace]);

  const handleSubmit = (e) => {
    setAreaPlace(nameRef.current.value);
    console.log(areaPlace);
  };

  return (
    <div>
      <h1>Welcome To Weather Application</h1>

      <input type="text" placeholder='Enter Location' ref={nameRef} />
      <button onClick={handleSubmit}>Get Weather</button>

      {locationData && (
        <div>
          {locationData.name}
          
          <p>Region: {locationData.region}</p>
      

        </div>
      )}
    </div>
  );
}

export default App;