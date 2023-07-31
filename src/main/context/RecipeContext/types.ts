import { Dispatch, ReactNode, SetStateAction } from "react";

type RecipesState = Recipe[] ;

type SelectedRecipeState = Recipe | null;

type SetRecipesState = Dispatch<SetStateAction<RecipesState>>;
type SetSelectedRecipeState = Dispatch<SetStateAction<SelectedRecipeState>>

type RecipeContextType = {
    recipes: RecipesState;
    selectedRecipe: SelectedRecipeState;
    setSelectedRecipe: SetSelectedRecipeState;
    setRecipes: SetRecipesState
  };

type RecipesContextProviderProps = {
    children: ReactNode;
};

type Recipe = {
    name: string;
    origin: string;
    description: string;
    difficulty: number;
    protein: string;
    produce: string;
    spice: string;
    cookingOil: string;
    volume: number;
    serves: number;
    authenticity: string;
    stock: string;
  };

type RecipesResponse = {
    message : Recipe[]
}

type SelectedRecipeResponse = {
  message : Recipe
}

export type {SelectedRecipeResponse, SetSelectedRecipeState,Recipe, RecipesResponse, RecipesContextProviderProps, RecipeContextType, RecipesState, SetRecipesState , SelectedRecipeState};

