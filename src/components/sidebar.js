import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import ClearIcon from "@material-ui/icons/Clear";
import NavLink from "../constants/navlink";

const useStyles = makeStyles({
  list: {
    width: 200,
  },
  fullList: {
    width: "auto",
  },
  icon: {
    fontSize: 48,
    margin: 15,
  },
  listicon: {
    margin: "5px 0px 0 120px",
  },
  text: {
    textAlign: "center",
    fontFamily: "Roboto, sans-serif",
    "&:hover": {
      color: "#00b3b3",
    },
  },
  reservationBtn: {
    fontFamily: "Roboto, sans-serif",
    color: "#fff",
    fontSize: "0.9vw",
    fontWeight: 400,
    backgroundColor: "#00cccc",
    borderRadius: "6px",
    cursor: "pointer",
    padding: "10px 20px",
    margin: 0,
    textAlign: "center",
    "&:hover": {
      backgroundColor: "#00b3b3",
    },
  },
});

const sidebar = ({ handleOpen, open }) => {
  const classes = useStyles();
  return (
    <div>
      <Drawer anchor="right" open={open} onClose={handleOpen}>
        <div onClick={handleOpen} className={classes.listicon}>
          <ClearIcon className={classes.icon} />
        </div>
        <NavLink />
      </Drawer>
    </div>
  );
};

export default sidebar;
