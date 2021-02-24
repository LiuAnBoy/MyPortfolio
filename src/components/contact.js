import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";
import { Button } from "@material-ui/core";

import Title from "./title";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "60px 0",
    backgroundColor: "#e0fcff",
  },
  button: {
    backgroundColor: "#2caeba",
    color: "#bff8fd",
    paddingLeft: "18px",
    paddingRight: "18px",
    // marginTop: "18px",
    boxShadow: "0 1px 3px rgb(0 0 0 / 20%)",
    transition: "all 0.3s linear",
    fontWeight: 700,
    letterSpacing: 2,
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    "&:hover": {
      backgroundColor: "#88ebf2",
      color: "#102a42",
    },
  },
}));

const contact = () => {
  const classes = useStyles();
  const data = useStaticQuery(query);
  return (
    <section className={classes.root}>
      <Title title="Contact Us" />
      <Button className={classes.button}>Contact Us</Button>
    </section>
  );
};

const query = graphql`
  {
    file(relativePath: { eq: "contactus.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default contact;
