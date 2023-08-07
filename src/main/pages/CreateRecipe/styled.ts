
import {Container , Box , styled, Typography , Button} from '@mui/material';

const StyledBox= styled(Box)(({ theme }) => ({
      marginTop: 10
  }));

  const StyledTypography = styled(Box)(({ theme }) => ({
    color: '#43495E',
    fontSize: '14px',
    marginTop: 8,
    fontWeight: 400
  }))

  export {Container , StyledBox, StyledTypography , Button}