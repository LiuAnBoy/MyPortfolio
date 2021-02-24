import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "0 0 70px",
  },
  title: {
    fontWeight: 700,
    letterSpacing: 2,
    fontFamily: "Roboto, sans-serif",
    color: "#102a42",
    margin: "0 0 10px 0",
    textAlign: "center",
  },
  underline: {
    background: "#2caeba",
    height: "4px",
    width: "80px",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
  },
}));

const Title = ({ title }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        {title}
      </Typography>
      <div className={classes.underline}></div>
    </div>
  );
};

export default Title;
