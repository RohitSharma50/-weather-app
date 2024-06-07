import { useEffect } from 'react';
import axios from 'axios';

const FetchData = ({ city, country, apiKey, setWeather, setLoading, setError }) => {
  useEffect(() => {
    const fetchWeather = async (lat, lon) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );
        setWeather([response.data]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchGeocode = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${apiKey}`
        );
        if (response.data.length > 0) {
          const { lat, lon } = response.data[0];
          fetchWeather(lat, lon);
        } else {
          setError('No geocoding data found for the specified location.');
          setLoading(false);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchGeocode();
  }, [city, country, apiKey, setWeather, setLoading, setError]);

  return null;
};

export default FetchData;
