import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

import Title from "./title";
import { Button, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    maxWidth: "100%",
    padding: "60px 0",
    backgroundColor: "#fff",
  },
  project: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    alignItems: "center",
    width: "70%",
    margin: "0 auto 48px",
    "&:hover $image:after": {
      opacity: 0,
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      width: "89vw",
      margin: "0 auto",
    },
  },
  image: {
    gridColumn: "1 / span 8",
    gridRow: "1 / 1",
    height: "420px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
    borderRadius: 2,
    "&:after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "linear-gradient(to bottom right, #2caeba, #222)",
      opacity: "0.85",
      transition: "all 0.3s linear",
    },
    [theme.breakpoints.down("xs")]: {
      height: "250px",
    },
  },
  title: {
    marginBottom: "24px",
    fontSize: 24,
  },
  description: {
    marginBottom: "24px",
    height: 80,
    [theme.breakpoints.down("sm")]: {
      height: 100,
    },
    [theme.breakpoints.down("xs")]: {
      height: 100,
    },
  },
  info: {
    padding: "16px 32px",
    backgroundColor: "#fff",
    gridColumn: "7 / 12",
    gridRow: "1 / 1",
    zIndex: 1,
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
    borderRadius: 2,
    fontFamily: "Roboto",
    [theme.breakpoints.down("md")]: {
      gridColumn: "6 / 12",
    },
    [theme.breakpoints.down("sm")]: {
      gridColumn: "6 / span 12",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "25px",
    },
  },
  info_even: {
    padding: "16px 32px",
    backgroundColor: "#fff",
    gridColumn: "2 / span 5",
    gridRow: "1 / 1",
    zIndex: 1,
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
    borderRadius: 2,
    fontFamily: "Roboto",
    [theme.breakpoints.down("md")]: {
      gridColumn: "2 / span 6",
    },
    [theme.breakpoints.down("sm")]: {
      gridColumn: "1 / span 7",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "25px",
    },
  },
  number: {
    display: "inline-block",
    fontSize: 20,
    color: "#2caeba",
    marginBottom: "14px",
  },
  tag: {
    margin: "6px 6px 0 0",
    backgroundColor: "#dae2ec",
    color: "#617d98",
    padding: "6px 12px",
    display: "inline-block",
    borderRadius: "2px",
    fontWeight: 700,
    letterSpacing: 2,
    textTransform: "uppercase",
    fontSize: 12,
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
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    "&:hover": {
      backgroundColor: "#88ebf2",
      color: "#102a42",
    },
  },
}));

const project = () => {
  const classes = useStyles();
  const data = useStaticQuery(query);
  const {
    allContentfulProjects: { nodes: projects },
  } = data;

  return (
    <section className={classes.root}>
      <Title title="Featured Projects" />
      {projects.map((project, index) => {
        const { contentfulid, projectName, description, tags, image } = project;
        const even = index => {
          if (index % 2 === 0) {
            return true;
          }
        };
        return (
          <div className={classes.project} key={index}>
            <Image
              fluid={image.fluid}
              className={classes.image}
              style={even(index) ? { gridColumn: "5 / -1" } : {}}
            />
            <div
              key={index}
              className={even(index) ? classes.info_even : classes.info}
            >
              <span className={classes.number}>{contentfulid}.</span>
              <Typography variant="h4" className={classes.title}>
                {projectName}
              </Typography>
              <Typography variant="subtitle1" className={classes.description}>
                {description}
              </Typography>
              {tags.map((tag, index) => {
                return (
                  <div className={classes.tag} key={tag.id}>
                    {tag.tag}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      <Button className={classes.button}>More Projects</Button>
    </section>
  );
};

const query = graphql`
  {
    allContentfulProjects(
      filter: { node_locale: { eq: "en-US" }, feature: { eq: true } }
      sort: { fields: createdAt, order: DESC }
    ) {
      nodes {
        contentfulid
        projectName
        description
        tags {
          tag
          id
        }
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;

export default project;
