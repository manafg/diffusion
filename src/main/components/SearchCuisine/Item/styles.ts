import {Box , ListItem , ListItemText, styled} from '@mui/material';


const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'end', 
    alignItems:'center'
}))

const StyledListItem = styled(ListItem)(({ theme }) => ({
    color: theme.palette.secondary.main
}))

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
    paddingRight: 4,
    paddingLeft: 4
}))

export {StyledBox , StyledListItem , StyledListItemText}