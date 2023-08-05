import React from 'react';

import {StyledActions ,CreateRecipeButton, StyledSharButton,StyledRecipeName, StyledWrapper , StyledRecipe} from './styles';
import Messenger from '../../icons/Messenger';
import Twitter from '../../icons/Twitter';
import Medium from '../../icons/Medium';
import AddIcon from '@mui/icons-material/Add';
import {SelectedRecipeTypeProps} from './types'
function SelectedRecipe({selectedRecipe}:SelectedRecipeTypeProps) {

    return (
        <StyledWrapper>
            <StyledRecipe>
                <img width='24px' height='24px' src='../../../../india.png'/>
                <StyledRecipeName>{selectedRecipe.authenticity}</StyledRecipeName>
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
                <CreateRecipeButton variant="contained" startIcon={<AddIcon />}>
                    Add Recipe
                </CreateRecipeButton>
            </StyledActions>
        </StyledWrapper>
    )
};

export default SelectedRecipe;