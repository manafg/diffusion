import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useCountries = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountries = useCallback(async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      const {data}: any = await response;
      setCountries(data);
    } catch (error) {
      console.error("There was an error fetching the countries", error);
    }
  }, []);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  return countries;
};

export default useCountries;
