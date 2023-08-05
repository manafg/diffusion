import React from 'react';
import SearchInput from './SearchInput/SearchInput'
import Autocomplete  from '@mui/material/Autocomplete';
import Item from './Item/Item';
import useRecipe from "../../hooks/useRecipe";

import {initRecipe} from '../../context/RecipeContext/initState'
export default function SearchCuisine({options = [], selectedRecipe}:any) {
  const { saveSelectedRecipe } = useRecipe();

  return (
      <Autocomplete
      value={selectedRecipe}
      defaultValue={initRecipe.name}
      onChange={(e,value) => saveSelectedRecipe(value)}
      renderInput={(params: any) => <SearchInput {...params}/>}
      options={options}
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => (
       <Item option={option} props={props}/>
      )}
      />
  );
}