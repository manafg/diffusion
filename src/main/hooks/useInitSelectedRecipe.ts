import { SelectedRecipeResponse } from "../context/RecipeContext/types";
import useRecipe from "./useRecipe";
import { useGetSelectedRecipe } from "./useGetSelectedRecipe";

function useSelectedRecipeContextInit(id:string) {
  const { saveSelectedRecipe } = useRecipe();

  const onSuccess = (data: SelectedRecipeResponse) => {

    const recipe = data;

    saveSelectedRecipe(recipe);
  };

  const { isLoading , refetch } = useGetSelectedRecipe(id,{ onSuccess });

  return { isLoading , refetch};
}

export default useSelectedRecipeContextInit;
