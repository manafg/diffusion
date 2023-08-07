import { Typography , styled, AppBar} from '@mui/material';

const StyledTitle =  styled(Typography)(({theme})=>({
    color: theme.palette.secondary.main,
    fontFamily: 'Bai Jamjuree',
    fontWeight: 700,
    fontSize: 18
}));

const StyledAppBar = styled(AppBar)(({theme})=>({
    backgroundColor: theme.palette.background.default,
    borderBottom: `1px solid #2E3347`
}));

export { StyledAppBar , StyledTitle}


