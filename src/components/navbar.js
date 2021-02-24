import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { makeStyles } from "@material-ui/core/styles";

import ScrollTop from "../components/scrolltop";
import NavLink from "../constants/navlink";

const useStyles = makeStyles(theme => ({
  AppBar: {
    backgroundColor: "rgba(0,0,0,0)",
    height: "80px",
  },
  Toolbar: {
    display: "flex",
    justifyContent: "center",
    height: "inherit",
  },
}));

const NavBar = props => {
  const classes = useStyles();
  return (
    <div id="back-to-top-anchor">
      <AppBar className={classes.AppBar} elevation={0}>
        <Toolbar className={classes.Toolbar}>
          <NavLink />
        </Toolbar>
      </AppBar>
      <ScrollTop {...props}>
        <Fab color="secondary" size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
};

export default NavBar;
