import React from 'react';
import SearchInput from './SearchInput/SearchInput'
import Autocomplete , {createFilterOptions} from '@mui/material/Autocomplete';
import Item from './Item/Item';

export default function SearchCuisine() {
    const [cuisine , setCuisine] = React.useState<any>({ title: 'Thiland', year: 1994 })
  return (
      <Autocomplete
      value={cuisine}
      onChange={(e,value) => setCuisine(value)}
      renderInput={(params: any) => <SearchInput {...params}/>}
      options={top100Films}
      getOptionLabel={(option) => option.title}
      renderOption={(props, option) => (
       <Item option={option} props={props}/>
      )}
      />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'Thiland', year: 1994 },
  { title: 'India', year: 1972 },
  { title: 'Jodran', year: 1974 },
 ];