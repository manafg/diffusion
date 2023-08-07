import React from 'react';
import { Controller } from 'react-hook-form';
import {TextField, FormControl,Stack,Typography, InputLabel, FormHelperText} from '@mui/material';
import {TextInputProps }  from './type';
import {StyledTextField, StyledSubLabel} from './styles'


const TextInput = ({ name, label, type = 'text', control, error, helperText, height = 8, subLabel}: TextInputProps) => {
  return (
    <FormControl sx={{marginRight: '10px'}} fullWidth variant="outlined" error={error}>
    <Stack  flexDirection='column' spacing={2}>
        <Typography >{label}</Typography>
        <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
            <StyledTextField
            sx={{
              '& .MuiInputBase-input': { 
                height: height,
            }
            }}
            {...field}
            type={type}
            variant="outlined"
            error={error}
            helperText={helperText}
            fullWidth
            InputProps={{
              endAdornment: (
                subLabel && <StyledSubLabel>{subLabel}</StyledSubLabel>
              ),
            }}
            />
        )}
        />
        </Stack>
        </FormControl>
  );
}

export default TextInput;
