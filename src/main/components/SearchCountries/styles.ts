import {TextField, FormControl, InputLabel, FormHelperText , styled} from '@mui/material';

const StyledTextField= styled(TextField)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    
    '& .MuiFormControl-root': {
        color: theme.palette.secondary.light,
        borderColor: theme.palette.background.paper,
    },
    '& .MuiInputBase-input': { 
        height: 8,
        color:theme.palette.secondary.main,
    },

    '& .MuiInputLabel-root' :{ 
        color: theme.palette.primary.main,
    },

    '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: theme.palette.secondary.dark, // Color when not focused
        },
        '&:hover fieldset': {
          borderColor: theme.palette.secondary.main, // Color when hovered (not focused)
        },
        '&.Mui-focused fieldset': {
          borderColor: theme.palette.primary.main, // Color when focused
        },
      },
    '& .MuiAutocomplete-input': {
        color: theme.palette.secondary.main,
    },
    '&label' : {
        color: theme.palette.secondary.main,
    }
  }));

export {StyledTextField};