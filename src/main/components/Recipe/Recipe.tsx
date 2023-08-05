import React from 'react';
import {StyledWrraper, StyledHeader, StyledInfoWhite , StyledInfoNeutral, StyledInfoFire} from './styles';
import Stack from '@mui/material/Stack';
import {RecipeTypeProps} from './RecipeTypeProps'

function Recipe ({selectedRecipe} : RecipeTypeProps) {

    return (
        <StyledWrraper>
            <Stack spacing={2}>
            <Stack direction="row" justifyContent="space-between">
            <Stack  direction="column">
                <StyledHeader title='Protein' variant='subtitle1'>
                    Protein
                </StyledHeader>
                <StyledInfoWhite title='Protein'>
                    {selectedRecipe.protein}
                </StyledInfoWhite>
            </Stack>
            <Stack sx={{width:125}} direction="column">
                <StyledHeader variant='subtitle1'>
                    Protein
                </StyledHeader>
                <StyledInfoNeutral sx={{color: 'red'}}>
                {selectedRecipe.protein}
                </StyledInfoNeutral>
            </Stack>
            </Stack>

            <Stack direction="row" justifyContent="space-between">
            <Stack  direction="column">
                <StyledHeader variant='subtitle1'>
                    Spices
                </StyledHeader>
                <StyledInfoFire>
                {selectedRecipe.spice}
                </StyledInfoFire>
            </Stack>
            <Stack sx={{width:125}} direction="column">
                <StyledHeader variant='subtitle1'>
                    Cooking Oil
                </StyledHeader>
                <StyledInfoFire >
                {selectedRecipe.cookingOil}
                </StyledInfoFire>
            </Stack>
            </Stack>

            <Stack direction="row" justifyContent="space-between">
            <Stack direction="column">
                <StyledHeader  variant='subtitle1'>
                    Voulome / Weight
                </StyledHeader>
                <StyledInfoWhite>
                {selectedRecipe.volume}
                </StyledInfoWhite>
            </Stack>
            <Stack sx={{width:125}} direction="column">
                <StyledHeader sx={{width:40, textAlign: 'left'}} variant='subtitle1'>
                    Serves
                </StyledHeader>
                <StyledInfoWhite >
                {selectedRecipe.serves}
                </StyledInfoWhite>
            </Stack>
            </Stack>


            <Stack direction="row" justifyContent="space-between">
            <Stack direction="column">
                <StyledHeader variant='subtitle1'>
                    Aauthenticity
                </StyledHeader>
                <StyledInfoFire>
                {selectedRecipe.authenticity}
                </StyledInfoFire>
            </Stack>
            <Stack sx={{width:125}} direction="column">
                <StyledHeader variant='subtitle1'>
                    Stock
                </StyledHeader>
                <StyledInfoFire >
                {selectedRecipe.stock}
                </StyledInfoFire>
            </Stack>
            </Stack>
            </Stack>
        </StyledWrraper>
    )
}
   

export default Recipe;