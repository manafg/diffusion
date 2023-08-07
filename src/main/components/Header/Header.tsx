import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import {StyledAppBar , StyledTitle} from './style'


function Header() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={handleBack} aria-label="back">
          <ArrowBackIcon />
        </IconButton>
        <StyledTitle variant="h6">
          Add new recipe
        </StyledTitle>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header;
