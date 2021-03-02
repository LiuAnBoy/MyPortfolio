import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "100vh",
    maxWidth: "100%",
    backgroundColor: "#e0fcff",
    position: "relative",
    "&:before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: "65%",
      right: 0,
      width: "35%",
      height: "100vh",
      background: "#fff",
    },
  },
  intro: {
    position: "absolute",
    top: "50%",
    left: "25%",
    transform: "translateY(-50%)",
    width: 500,
    [theme.breakpoints.down('xs')]: {
      width: "87.6vw",
      position: "relative",
      margin: "0 auto",
      left: 0,
    },
  },
  underline: {
    background: "#2caeba",
    height: "4px",
    width: "80px",
    margin: "0 0 10px 0",
  },
  name: {
    fontWeight: 700,
    letterSpacing: 2,
    fontFamily: "Roboto, sans-serif",
    color: "#102a42",
    [theme.breakpoints.down('xs')]: {
      fontSize: 42,
    },
  },
  subtitle: {
    letterSpacing: 2,
    fontWeight: 700,
    color: "#102a42",
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
    },
  },
  button: {
    backgroundColor: "#2caeba",
    color: "#bff8fd",
    paddingLeft: "18px",
    paddingRight: "18px",
    marginTop: "18px",
    boxShadow: "0 1px 3px rgb(0 0 0 / 20%)",
    transition: "all 0.3s linear",
    fontWeight: 700,
    letterSpacing: 2,
    "&:hover": {
      backgroundColor: "#88ebf2",
      color: "#102a42",
    },
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.intro}>
        <div className={classes.underline}></div>
        <Typography variant="h2" className={classes.name}>
          Hi, I'm Eric
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          Freelance Front-End Developer and UI/UX Designer.
        </Typography>
        <Button className={classes.button}>Contact Me</Button>
      </div>
    </div>
  );
};

export default Banner;
