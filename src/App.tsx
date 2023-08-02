import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {RecipeThemeProvider,QueryContextProvider, RecipesProvider} from './main/context'
import CreateRecipe from './main/pages/CreateRecipe';
import RecipeList from './main/pages/RecipeList';

import {Container , Box , styled} from '@mui/material';

const StyledBox= styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    width:410,
    height: 630,
    padding: theme.spacing(4)
  }));

function App() {
  return (
    <QueryContextProvider>
      <RecipeThemeProvider>
        <RecipesProvider>
          <BrowserRouter>
          <Container>
            <StyledBox>
              <Routes>
                <Route path="/"  element={<RecipeList/>} />
                <Route path="/create-new-recipe" element={<CreateRecipe/>}/>
              </Routes>
              </StyledBox>
            </Container>
          </BrowserRouter>
        </RecipesProvider>
      </RecipeThemeProvider>
    </QueryContextProvider>
  );
}

export default App;
