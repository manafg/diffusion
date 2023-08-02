
import {Container , Box , styled} from '@mui/material';

const StyledBox= styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    width:410,
    height: 630,
    padding: theme.spacing(4)
  }));

  export {Container , StyledBox }