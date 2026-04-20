import React from 'react';
import {SearchCuisine ,Recipe,Difficulty, SelectedRecipe} from '../../components'
import { Stack } from '@mui/material';
import {RecipesStateContext} from '../../context/RecipeContext/RecipeContext';
import useRecipesContextInit from '../../hooks/useInitRecipes'
function RecipeList () {
  useRecipesContextInit();
  const {recipes , selectedRecipe} :any = React.useContext(RecipesStateContext);

    return (
        <Stack spacing={3}>
            <SearchCuisine selectedRecipe={selectedRecipe} options={recipes?.message}></SearchCuisine>
            <SelectedRecipe selectedRecipe={selectedRecipe}/>
            <Difficulty selectedRecipe={selectedRecipe}/>
            <Recipe selectedRecipe={selectedRecipe}/>
        </Stack>
    )
}

export default RecipeList;