import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  font: {
    color: "#102a42",
    width: 150,
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: 20,
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const NavLink = () => {
  const classes = useStyles();
  return links.map(link => {
    return (
      <div>
        <div key={link.id} className={classes.font}>
          {link.text}
        </div>
      </div>
    );
  });
};

export const links = [
  {
    id: 1,
    text: "Home",
  },
  {
    id: 2,
    text: "About",
  },
  {
    id: 3,
    text: "Projects",
  },
  {
    id: 4,
    text: "Contact",
  },
];

export default NavLink;
