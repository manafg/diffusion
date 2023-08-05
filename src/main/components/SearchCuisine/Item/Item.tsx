import React from "react";
import List from '@mui/material/List';
import {ListItemText , Box, ListItemButton, ListItemIcon} from '@mui/material';
import Easy from '../../../icons/Easy';
import Average from '../../../icons/Average';
import Hard from '../../../icons/Hard';
import { renderText } from '../../../utils/RecipeLevel'
import {StyledBox , StyledListItem , StyledListItemText} from './styles'

function Item ({option , props} :any) {

  const renderIcon = (difficulty:any) => {
    switch (difficulty) {
      case 1:
        return <Easy />;
      case 2:
        return <Average />;
      case 3:
        return <Hard /> ;
      default:
        return <Easy />;
    }
  };

    return (
            <StyledListItem {...props} >
             <ListItemButton>
             <ListItemIcon>
                <img width='16px' height='16px' src='../../../../india.png'/>
              </ListItemIcon>
             <ListItemText primary={option.name} />
             <StyledBox >
                {renderIcon(option?.difficulty)}
                <StyledListItemText primary={renderText(option?.difficulty)}/>
                <StyledListItemText primary='35Min'/>
              </StyledBox>
             </ListItemButton>
             </StyledListItem>
    )
}

export default Item;