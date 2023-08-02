import React from "react";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '../../../icons/SearchIcon'
import {StyledTextField} from './styles'
function SearchInput (params:any) {
    return (
        <StyledTextField {...params} label="Search Cuisine" 
            InputProps={{
                ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
    )
}

export default SearchInput;