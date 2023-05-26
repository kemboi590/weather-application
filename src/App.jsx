import { useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  // State variables
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const Key = import.meta.env.VITE_API_KEY
  //const api_url= import.meta.env.VITE_API_URL
  // Function to fetch weather data from the API
  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`,
        {
          headers: {
            'X-RapidAPI-Key':Key, 
            
          },
          
        }
      );
      setWeatherData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setLoading(false);
    }
  };

  // Event handler for location input change
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };

  // Event handler for clearing location and weather data
  const handleClear = () => { 
    setLocation('');
    setWeatherData(null);
  }

  return (
    <div className="App">
      <h1 className='HeaderName'>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={handleLocationChange}
          className='InputField'
        />
        <button type="submit" className='buttonElem'>Get Weather</button>
        <button className='buttonElem' onClick={handleClear}>Clear</button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : weatherData ? (
        <div id='container'>
          <h2>{weatherData.location.name}</h2>
          <img src={weatherData.current.condition.icon} alt="Weather Icon" />
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
          <p>Cloud: {weatherData.current.cloud}</p>
          <p>Wind speed: {weatherData.current.wind_kph} Kph</p>
        </div>
      ) : null}
    </div>
  );

}

export default App;
