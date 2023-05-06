import React from "react";
import { data } from "../data/data";
import Grid from "@mui/material/Grid";
import AddBoxIcon from "@mui/icons-material/AddBox";
import GpsNotFixedOutlinedIcon from '@mui/icons-material/GpsNotFixedOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import "./Card-styles.css";
import {
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
// import 'font-awesome/css/font-awesome.min.css';

export default function CardComponent() {
  return (
    <div
      style={{
        background: "rgb(245, 247, 250)",
        borderRadius: "40px 0 0 40px",
        padding: "0 50px",
      }}
    >
      <div>
        <div>
          <div className="card-header">
          <h4>Reporting</h4>
          <p>All project in current month</p>
          </div>
          <div className="div-plus">
            <IconButton>
              <AddBoxIcon fontSize="large" style={{ fill: "#2596be" }} />
            </IconButton>
          </div>
          <Divider sx={{ marginBottom: "30px", width: "1230px", marginTop: "-15px" }} variant="middle" />
          <div className="above-cards">
            <p>All</p>
            <div className="div-box">50</div>
            <p>Started</p>
            <div className="second-box">20</div>
            <p>Approve</p>
            <div className="second-box">15</div>
            <p>Completed</p>
            <div className="second-box">34</div>
            <div className="seperate-icons">
            <div className="second-box">
              <ListItem disablePadding>
                <ListItemIcon sx={{ marginRight: "-25px" }}>
                  <TuneOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="More" />
              </ListItem>
            </div>
            <div className="second-box">
              <ListItemIcon sx={{ marginRight: "-30px", padding: "auto" }}>
                <WidgetsOutlinedIcon />
              </ListItemIcon>
            </div>
            <div className="div-box">34</div>
            </div>
            
            
          </div>
        </div>
      </div>
      <Grid container>
        {data.map((card) => {
          return (
            <Grid item lg={3} key={card.id}>
              <div className="tie">
                <img className="icon" src={card.icon} alt={card.dept} />
                <h6 className="dept">{card.dept}</h6>
                <p className="sub-dept"> <ListItem disablePadding> <ListItemIcon sx={{marginRight: "-15px", marginTop: "0px", marginLeft: "20px"}}><GpsNotFixedOutlinedIcon /></ListItemIcon><ListItemText primary={card.subDept}/></ListItem>   </p>
                <p className="time-left"> <ListItem disablePadding> <ListItemIcon sx={{marginRight: "-15px", marginTop: "0px", marginLeft: "-25px"}}><AccessAlarmOutlinedIcon /></ListItemIcon><ListItemText primary={card.timeLeft}/></ListItem> </p>
                <Divider variant="middle" sx={{margin: "-10px 0 10px 35px", width: "150px"}}/>
                <h6 className="team">{card.team}</h6>
                <h6 className="prog">{card.prog}</h6> <br />
                <img
                  className="first-img image"
                  src={card.img1}
                  alt={card.dept}
                />
                <img className="image" src={card.img2} alt={card.dept} />
                <img className="image" src={card.img3} alt={card.dept} />
                <h5 className="percent">{card.percent}</h5>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
