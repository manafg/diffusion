import React from 'react';
import {StyledActions ,CreateRecipeButton, StyledSharButton,StyledRecipeName, StyledWrapper , StyledRecipe} from './styles';
import Messenger from '../../icons/Messenger';
import Twitter from '../../icons/Twitter';
import Medium from '../../icons/Medium';
import AddIcon from '@mui/icons-material/Add';
import {SelectedRecipeTypeProps} from './types';
import { useNavigate } from 'react-router-dom';

function SelectedRecipe({selectedRecipe}:SelectedRecipeTypeProps) {
    const navigate = useNavigate();

    const navigateToCreateRecipe = () => {
        navigate('/create');
      };

    return (
        <StyledWrapper>
            <StyledRecipe>
                <img width='24px' height='24px' src='../../../../india.png'/>
                <StyledRecipeName>{selectedRecipe.origin}</StyledRecipeName>
            </StyledRecipe>
            <StyledActions>
                <StyledSharButton>
                    <Messenger/>
                </StyledSharButton>
                <StyledSharButton>
                    <Twitter/>
                </StyledSharButton>
                <StyledSharButton>
                    <Medium/>
                </StyledSharButton>
                <CreateRecipeButton onClick={navigateToCreateRecipe} variant="contained" startIcon={<AddIcon />}>
                    Add Recipe
                </CreateRecipeButton>
            </StyledActions>
        </StyledWrapper>
    )
};

export default SelectedRecipe;