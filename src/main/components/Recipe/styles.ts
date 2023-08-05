import {Paper, styled ,Box, Typography} from '@mui/material';


const StyledWrraper =  styled(Paper)(({ theme }) => ({
    minHeight:220,
    padding: theme.spacing(4),
    borderRadius:10,
}));





const StyledHeader = styled(Typography)(({theme})=>({
    color: theme.palette.primary.main,
    fontFamily: 'Helvetica Neue',
    fontSize: 13,
    fontWeight: 400,
}))

const StyledInfoWhite = styled(Typography)(({theme})=>({
    color: theme.palette.secondary.main,
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 'normal',
    'white-space': 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '135px',
}))

const StyledInfoFire = styled(Box)(({theme})=>({
    backgroundImage: 'linear-gradient(136deg, #FFBF43 0%, #FF4869 100%)',
    fontFamily: 'Helvetica Neue',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 'normal',
    'white-space': 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '135px',
}))

const StyledInfoNeutral = styled(Typography)(({theme})=>({
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 'normal',
    'white-space': 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '135px',
}))


export { StyledWrraper, StyledInfoNeutral, StyledInfoFire, StyledInfoWhite, StyledHeader};