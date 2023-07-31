import { RecipesResponse } from "../context/RecipeContext/types";
import useRecipe from "./useRecipe";
import { useGetRecipes } from "./useGetRecipes";

function useRecipesContextInit() {
  const { saveRecipesMap } = useRecipe();

  const onSuccess = (data: RecipesResponse) => {


    const Recipes = data;

    saveRecipesMap(Recipes);
  };

  const { isLoading , refetch } = useGetRecipes({ onSuccess });

  return { isLoading , refetch};
}

export default useRecipesContextInit;
