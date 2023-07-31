import { useQuery } from "react-query";

import { SelectedRecipeResponse } from "../context/RecipeContext/types";
import { getSelectedRecipe } from "../utils/getSelectedRecipe";

export function useGetSelectedRecipe(id:string, config: any) {
  // @ts-ignore
  return useQuery<SelectedRecipeResponse, Error>(["getSelectedRecipe", id],()=> getSelectedRecipe(id), {
    refetchOnWindowFocus: false,
    retry: false,
    ...config,
  });
}
