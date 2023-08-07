import React from 'react';
import {  Controller } from 'react-hook-form';
import { Autocomplete, Typography, TextField, Stack, FormControl, FormHelperText } from '@mui/material';
import { SearchCountriesProps  } from './types'
import {StyledTextField} from './styles'

function SearchCountries  ({ name, label, control, error, helperText, options, defaultValue = null }: SearchCountriesProps)  {
  return (
    <FormControl fullWidth variant="outlined" error={error}>
      <Stack  flexDirection='column' spacing={2}>
      <Typography >{label}</Typography>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <Autocomplete
            sx={{
              '.MuiAutocomplete-endAdornment': {
                '.MuiSvgIcon-root': {
                  color: 'white',  // Sets the dropdown icon color to white
                },
              },
            }}
            {...field}
            options={options}
            getOptionLabel={(option) => option?.name?.common}
            isOptionEqualToValue={(option, value) => option.name?.common === value.name?.common}
            renderInput={(params) => (
              <StyledTextField
                {...params}
                error={Boolean(fieldState?.invalid)}
                helperText={fieldState?.error?.message || helperText}
                variant="outlined"
              />
            )}
          />
        )}
      />
      </Stack>
    </FormControl>
  );
}

export default SearchCountries;
