import {produce} from "immer";
import { useContext, useCallback } from "react";
import { Recipe, RecipesState , RecipesResponse, SelectedRecipeResponse, SelectedRecipeState, RecipeContextType } from '../context/RecipeContext/types'
import { RecipesStateContext } from '../context/RecipeContext/RecipeContext'
import {searchByText} from '../utils/search';

function useRecipe() {

    const {recipes, setRecipes,  setSelectedRecipe  } = useContext<any>(RecipesStateContext);

    const saveRecipesMap = useCallback(
        (RecipesResponse: RecipesResponse) => {
          const parsedRecipes: RecipesResponse = RecipesResponse;
          setRecipes(parsedRecipes);
        },
        [setRecipes],
      );

      const saveSelectedRecipe = useCallback(
        (SelectedRecipeResponse: SelectedRecipeResponse) => {
          const parsedSelectedRecipe: SelectedRecipeResponse = SelectedRecipeResponse;
          setSelectedRecipe(parsedSelectedRecipe);
        },
        [setSelectedRecipe],
      );

      const searchByRecipeName = useCallback(
        (text: string) => {
          // @ts-ignore
          const sortedRecipe= produce(recipes =>
            searchByText(recipes, text),
          );
    
          setRecipes(sortedRecipe);
        },
        [setRecipes, recipes],
      );

      return {
        recipes,
        setSelectedRecipe,
        setRecipes,
        searchByRecipeName,
        saveSelectedRecipe,
        saveRecipesMap
      }
}

export default useRecipe;