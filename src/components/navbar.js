import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { makeStyles } from "@material-ui/core/styles";
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';

import ScrollTop from "../components/scrolltop";
import NavLink from "../constants/navlink";
import SideBar from "../components/sidebar";

const useStyles = makeStyles(theme => ({
  root: {},
  AppBar: {
    width: "100vw",
    height: "100vh",
    maxWidth: "100%",
    backgroundColor: "rgba(0,0,0,0)",
    height: "80px",
    position: "absolute",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  Toolbar: {
    display: "flex",
    justifyContent: "center",
    height: "inherit",
  },
  sidebarBtn: {
    position: "absolute",
    zIndex: 999,
    backgroundColor: "#e0fcff",
    right: 0,
    margin: 15,
    height: 48,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const NavBar = props => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div id="back-to-top-anchor" className={classes.root}>
      <AppBar className={classes.AppBar} elevation={0}>
        <Toolbar className={classes.Toolbar}>
          <NavLink />
        </Toolbar>
      </AppBar>
      <div onClick={handleOpen} className={classes.sidebarBtn}>
        <FormatAlignRightIcon style={{ fontSize: "48px", color: "#00b3b3" }} />
      </div>
      <SideBar handleOpen={handleOpen} open={open} />
      <ScrollTop {...props}>
        <Fab color="secondary" size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
};

export default NavBar;
