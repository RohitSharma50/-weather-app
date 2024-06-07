import React, { useState } from 'react';
import FetchData from './FetchData';
import DisplayData from './DisplayData';
import InputForms from './InputForms';
import SortOptions from './SortOptions';
import { CircularProgress, Container, Typography } from '@mui/material';
 const Api_Key= process.env.REACT_APP_SECRET_KEY
const Body = () => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [apiKey] = useState(Api_Key); // Replace with your actual API key
  const [sortBy, setSortBy] = useState('');

  const handleFetchWeather = () => {
    setWeather([]); // Clear previous weather data
    setError(null); // Clear previous error
    setLoading(true); // Show loading spinner
  };

  const sortedWeather = () => {
    if (weather.length === 0) return [];
    const sorted = [...weather];
    if (sortBy === 'temperature') {
      sorted.sort((a, b) => a.main.temp - b.main.temp);
    } else if (sortBy === 'humidity') {
      sorted.sort((a, b) => a.main.humidity - b.main.humidity);
    } else if (sortBy === 'conditions') {
      sorted.sort((a, b) => a.weather[0].description.localeCompare(b.weather[0].description));
    }
    return sorted;
  };

  return (
    <Container>
      <InputForms
        city={city} 
        setCity={setCity} 
        country={country} 
        setCountry={setCountry} 
        handleFetchWeather={handleFetchWeather} 
      />
      {loading && (
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </Container>
      )}
      {error && <Typography variant="h6" color="error">Error: {error}</Typography>}
      {weather.length > 0 && <SortOptions setSortBy={setSortBy} />}
      <DisplayData weather={sortedWeather()} />
      {loading && (
        <FetchData 
          city={city} 
          country={country} 
          apiKey={apiKey} 
          setWeather={setWeather} 
          setLoading={setLoading} 
          setError={setError} 
        />
      )}
    </Container>
  );
};

export default Body;
