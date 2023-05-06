import { AppBar, Toolbar, Typography, IconButton, useMediaQuery, useTheme } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
// import { NotificationsIcon } from '@mui/icons-material';
// import NotificationsIcon from '@mui/icons-material/Notifications';
import { Search } from '../search/searchComponent';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import StarsIcon from '@mui/icons-material/Stars';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { DrawerComp } from './DrawerComp';

export const Navbar = () => {

const theme = useTheme()
console.log(theme)
const isMatch = useMediaQuery(theme.breakpoints.down("md"))
console.log(isMatch)
  return (
    <AppBar elevation={0} sx={{background: "#fff"}}>
      <Toolbar sx={{color: "black"}}>
      <IconButton sx={{color: "#2596be"}}>
      <StarsIcon />
      </IconButton>
        <Typography sx={{marginLeft : "10px"}}> Boardto </Typography>
        <Search />
        {
          isMatch ? (<>
             <DrawerComp />
          </>) : (<>
            <Badge badgeContent={17} color="error" sx={{marginLeft: "900px"}}>
          <NotificationsIcon />
        </Badge>
        <IconButton sx={{marginLeft: "auto"}}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
        <List>
            <ListItem>
                <ListItemText primary="Olaseinde Biyi" secondary="Director"/>
            </ListItem>
        </List>
        <ArrowDropDownCircleIcon />
          </>)
        }
        
      </Toolbar>
  
    </AppBar>
  );
};
