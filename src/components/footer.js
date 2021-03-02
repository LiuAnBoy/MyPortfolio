import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    maxWidth: "100%",
    padding: "20px 0",
    backgroundColor: "#222",
  },
  copyright: {
    color: "#fff",
    letterSpacing: 2,
    textAlign: "center",
    "& > span": {
      color: "#2caeba",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
}));

const footer = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Typography variant="subtitle1" className={classes.copyright}>
        COPYRIGHT&copy;{new Date().getFullYear()} <span>CLA</span> ALL RIGHTS
        RESERVED
      </Typography>
    </section>
  );
};

export default footer;
