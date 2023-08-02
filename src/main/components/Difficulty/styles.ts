import {Paper, styled ,Box, Typography} from '@mui/material';

const StyledWrraper =  styled(Paper)(({ theme }) => ({
    height:210,
    padding: theme.spacing(2),
    borderRadius:10,
}));

const StyledInfo =  styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.light,
    height: 160,
    borderRadius:10,
    padding: theme.spacing(4)
}));

const StyledTitleContainer =  styled(Box)(({ theme }) => ({
   display: 'flex',
   alignItems: 'center'
}));

const StyledTitle =  styled(Typography)(({ theme }) => ({
    display: 'flex',
    fontWeight: 'bold',
    fontSize: 18,
    marginInline: 8
 }));

 const StyledBody =  styled(Typography)(({ theme }) => ({
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: 400,
    marginTop: 10,
    marginLeft:14
 }));

export {StyledWrraper, StyledBody,StyledInfo, StyledTitleContainer, StyledTitle}