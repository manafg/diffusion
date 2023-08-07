import { useState } from 'react';
import {Recipe} from '../context/RecipeContext/types';
import RecipeApi from '../utils/RecipeApi'
const usePostRecipe = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [successes , setScuccess] =  useState(false)


  const postRecipe = async ({
    name,
    origin,
    description,
    difficulty,
    protein,
    produce,
    spice,
    cookingOil,
    volume,
    serves,
    authenticity,
    stock
  }:Recipe) => {
    setLoading(true);
    setError(false);

    try {
      const response = await RecipeApi.post('/recipes', {
        headers: {
          'Content-Type': 'application/json'
        },
        body: 
          name,
          origin,
          description,
          difficulty,
          protein,
          produce,
          spice,
          cookingOil,
          volume,
          serves,
          authenticity,
          stock
      });

      if (!response) {
        throw new Error('API request failed');
      }

      const data = await response;
      setLoading(false);
      setScuccess(true)
      if(data) {
        setScuccess(true);}
      return data;

    } catch (err:any) {
      setLoading(false);
      setError(true);
      throw err;
    }
  };

  return { postRecipe, successes, loading, error };
};

export default usePostRecipe;
