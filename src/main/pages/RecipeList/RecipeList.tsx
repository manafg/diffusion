import React from 'react';
import {SearchCuisine ,Difficulty, SelectedRecipe} from '../../components'
import { Stack } from '@mui/material';
function RecipeList () {
    return (
        <Stack spacing={3}>
            <SearchCuisine></SearchCuisine>
            <SelectedRecipe/>
            <Difficulty/>
        </Stack>
    )
}

export default RecipeList;