import React, { createContext, useState } from "react";

import {RecipesContextProviderProps , RecipeContextType , RecipesState, SelectedRecipeState} from "./types";

import {initRecipe} from './initState';

const RecipesStateContext = createContext<RecipeContextType | undefined>(undefined);

function RecipesProvider({ children }: RecipesContextProviderProps) {
  const [recipes, setRecipes] = useState<any>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<SelectedRecipeState>(initRecipe);

  return (
    <RecipesStateContext.Provider value={{ recipes, selectedRecipe, setRecipes, setSelectedRecipe }}>
      {children}
    </RecipesStateContext.Provider>
  );
}

export { RecipesProvider, RecipesStateContext };
