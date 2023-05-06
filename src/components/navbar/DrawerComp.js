import { Drawer, List, ListItemButton, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { useState } from "react";

export const DrawerComp = () => {
  const [drawerState, setDrawerState] = useState(false);

  const handleDrawerState = () => {
    setDrawerState(!drawerState);
  };
  return (
    <>
      <Drawer open={drawerState} onClick={handleDrawerState}>
        <List>
          <ListItemButton>
            <listItemText>Sign In</listItemText>
          </ListItemButton>
          <ListItemButton>
            <listItemText>
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>

              <IconButton sx={{ marginLeft : "20px"}}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </listItemText>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton onClick={handleDrawerState} sx={{ marginLeft: "auto" }}>
        <MenuIcon />
      </IconButton>
    </>
  );
};
