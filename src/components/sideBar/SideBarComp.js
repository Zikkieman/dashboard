import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import "./SideBar.styles.css";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import SettingsInputSvideoOutlinedIcon from "@mui/icons-material/SettingsInputSvideoOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useState } from "react";

export const SideBar = () => {
    const [selectedList, setSelectedList] = useState(null)
    const handleSelectedList = (e, value)=>{
        setSelectedList(value)
    }
  return (
    <div className="side-div">
      <List component="nav" aria-label="main mailbox folders">
        <ListItem>
          <ListItemButton selected={selectedList === 0} onClick={(e)=>{handleSelectedList(e, 0)}}>
            <ListItemIcon>
              <DashboardCustomizeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Boards"> </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton selected={selectedList === 1} onClick={(e)=>{handleSelectedList(e, 1)}}>
            <ListItemIcon>
              <EventNoteOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Plan Schedule" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton selected={selectedList === 2} onClick={(e)=>{handleSelectedList(e, 2)}}>
            <ListItemIcon>
              <StickyNote2OutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Reporting" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton selected={selectedList === 3} onClick={(e)=>{handleSelectedList(e, 3)}}>
            <ListItemIcon>
              <ChatOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton selected={selectedList === 4} onClick={(e)=>{handleSelectedList(e, 4)}}>
            <ListItemIcon>
              <Diversity3OutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Team Member" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton selected={selectedList === 5} onClick={(e)=>{handleSelectedList(e, 5)}}>
            <ListItemIcon>
              <SettingsInputSvideoOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Tools Plugin" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton selected={selectedList === 6} onClick={(e)=>{handleSelectedList(e, 6)}}>
            <ListItemIcon>
              <ExploreOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Roadmap" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton selected={selectedList === 7} onClick={(e)=>{handleSelectedList(e, 7)}}>
            <ListItemIcon>
              <TuneOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{marginTop : "230px"}}>
          <ListItemButton selected={selectedList === 8} onClick={(e)=>{handleSelectedList(e, 8)}}>
            <ListItemIcon>
              <LogoutOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="LogOut" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};
