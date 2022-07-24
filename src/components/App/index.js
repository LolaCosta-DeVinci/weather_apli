import axios from 'axios';
import { useState, useEffect } from 'react';
import AppTitle from 'src/components/AppTitle/AppTitle';
import SearchBar from 'src/components/SearchBar/SearchBar';
import WeatherResult from '../WeatherResult/WeatherResult';

import './styles.css';

// == Composant
function App() {
  const [location, setLocation] = useState('Paris');
  const [weatherResult, setWeatherResult] = useState({});
  const [locationInfo, setLocationInfo] = useState({});

  const keyAccessToApi = '4375089f3df247f6d269afb4542fd818';

  const getWeather = () => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${keyAccessToApi}&query=${location}`)
      .then((response) => {
        console.log(response.data.current);
        console.log(response.data.location);
        setWeatherResult(response.data.current);
        setLocationInfo(response.data.location);
      })
      .catch((error) => {
        console.log('Erreur :', error.message);
      });
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="app">
      <AppTitle />
      <SearchBar location={location} setLocation={setLocation} getWeather={getWeather} />
      <WeatherResult weatherResult={weatherResult} locationInfo={locationInfo} />
    </div>
  );
}

export default App;
