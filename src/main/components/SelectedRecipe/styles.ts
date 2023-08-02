import {Box , Fab , styled , Typography, Button} from '@mui/material';

const CreateRecipeButton =  styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper
}))

const StyledSharButton = styled(Fab)(({ theme }) => ({
    width: 34,
    height: 34,
    marginInlineEnd: 6,
    backgroundColor: theme.palette.background.paper
}))
const StyledWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between', 
    alignItems:'center'
}));

const StyledRecipeName = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.main,
    marginLeft: 12,
    fontFamily: 'Bai Jamjuree',
    fontSize: '18px',
    fontWeight: '500',
}));

const StyledRecipe = styled(Box)(({ theme }) => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center'
}));

const StyledActions= styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-evenly'
 }));

export {StyledWrapper ,CreateRecipeButton, StyledSharButton,StyledRecipe, StyledActions, StyledRecipeName}