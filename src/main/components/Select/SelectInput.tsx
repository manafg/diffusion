import React from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { Select, MenuItem, FormControl, Typography, FormHelperText , Stack} from '@mui/material';
import {SelectInputProps} from './type'
import {StyledSelectField} from './styles'

function SelectInput ({ name, label, control, error, helperText, options, defaultValue = "" }: SelectInputProps)  {
  return (
    <FormControl sx={{marginRight:'8px'}} fullWidth variant="outlined" error={error}>
      <Stack  flexDirection='column' spacing={2}>
      <Typography >{label}</Typography>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <StyledSelectField
            {...field}
          >
            {options.map(option => (
              <MenuItem sx={{color:'#fff'}} key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </StyledSelectField>
        )}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </Stack>
    </FormControl>
  );
}

export default SelectInput;
