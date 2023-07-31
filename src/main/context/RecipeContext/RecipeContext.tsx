import React, { createContext, useState } from "react";

import {RecipesContextProviderProps , RecipeContextType , RecipesState, SelectedRecipeState} from "./types";

const RecipesStateContext = createContext<RecipeContextType | undefined>(undefined);

function RecipesProvider({ children }: RecipesContextProviderProps) {
  const [recipes, setRecipes] = useState<RecipesState>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<SelectedRecipeState>(null);

  return (
    <RecipesStateContext.Provider value={{ recipes, selectedRecipe, setRecipes, setSelectedRecipe }}>
      {children}
    </RecipesStateContext.Provider>
  );
}

export { RecipesProvider, RecipesStateContext };
