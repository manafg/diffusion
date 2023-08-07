import { styled } from '@mui/system';
import Select from '@mui/material/Select';

const StyledSelectField = styled(Select)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  '.MuiSelect-icon': {
    color: 'white', 
  },
  '&.MuiSelect-root': {
    color: theme.palette.secondary.light,
    borderColor: theme.palette.background.paper,
    height: 8,
    
  },
  
  '.MuiInputBase-input': { 
    color: theme.palette.secondary.main,
  },

  '.MuiInputLabel-root': { 
    color: theme.palette.primary.main,
  },

  '.MuiOutlinedInput-root': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary.dark,
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary.main,
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
    },
  },

  // Note: MuiAutocomplete-input is specific to Autocomplete component. 
  // If you're not using it with the Select component, you can remove this.
  '.MuiAutocomplete-input': {
    color: theme.palette.secondary.main,
  },

  '& .MuiFormLabel-root': {
    color: theme.palette.secondary.main,
  },
}));

export {StyledSelectField}
