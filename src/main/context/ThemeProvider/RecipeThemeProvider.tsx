import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import {RecipeThemeProviderProps} from './types'

function RecipeThemeProvider({children} : RecipeThemeProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default RecipeThemeProvider;