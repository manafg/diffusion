import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import {ListItemText , Box} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import Easy from '../../../icons/Easy';
import Medium from '../../../icons/Medium';
import Hard from '../../../icons/Hard';
import {StyledBox , StyledListItem , StyledListItemText} from './styles'

function Item ({option , props} :any) {
    debugger
    return (
            <StyledListItem {...props} >
             <ListItemButton>
             <ListItemIcon>
                <img width='16px' height='16px' src='../../../../india.png'/>
              </ListItemIcon>
             <ListItemText primary={option.title} />
             <StyledBox >
                <Easy/>
                <StyledListItemText primary='Hard'/>
                <StyledListItemText primary='35Min'/>
              </StyledBox>
             </ListItemButton>
             </StyledListItem>
    )
}

export default Item;