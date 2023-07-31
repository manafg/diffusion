import { useQuery } from "react-query";

import { RecipesResponse } from "../context/RecipeContext/types";
import { getRecipes } from "../utils/getRecipes";

export function useGetRecipes(config: any) {
  return useQuery<RecipesResponse, Error>("getRecipes", getRecipes, {
    refetchOnWindowFocus: false,
    retry: false,
    ...config,
  });
}
