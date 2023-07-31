import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {RecipeThemeProvider,QueryContextProvider, RecipesProvider} from './main/context'
import CreateRecipe from './main/pages/CreateRecipe';
import RecipeList from './main/pages/RecipeList'
function App() {
  return (
    <QueryContextProvider>
      <RecipeThemeProvider>
        <RecipesProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/"  element={<CreateRecipe/>} />
              <Route path="/create-new-recipe" element={<RecipeList/>}/>
            </Routes>
          </BrowserRouter>
        </RecipesProvider>
      </RecipeThemeProvider>
    </QueryContextProvider>
  );
}

export default App;
