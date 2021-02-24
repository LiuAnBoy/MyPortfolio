import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { graphql, useStaticQuery } from "gatsby";
import { Box, Tabs, Tab, Typography } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

import Title from "./title";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "60px 0",
    backgroundColor: "#f1f5f8",
  },
  experience: {
    width: "70%",
    display: "flex",
    flexDirection: "row",
    margin: "0 auto",
  },
  tab: {
    fontSize: 16,
    marginRight: "26px",
    letterSpacing: 2,
    "&:hover": {
      color: "#2caeba",
    },
  },
  position: {
    color: "#102a42",
    margin: "0 0 8px",
    letterSpacing: 4,
  },
  company_name: {
    margin: "0 0 10px",
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
  date: {
    color: "#324d67",
    letterSpacing: 4,
    margin: "0 0 20px",
    fontSize: 14,
  },
  desss: {
    display: "flex",
    alignItems: "center",
  },
  description: {
    margin: "10px 30px",
    fontSize: 14,
    letterSpacing: 1,
  },
  icon: {
    fontSize: 12,
    color: "#2caeba",
  },
}));

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: "100%", padding: "0" }}
    >
      {value === index && (
        <Box p={3} style={{ paddingTop: 0, marginLeft: "100px" }}>
          {children}
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = index => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};

const Experience = () => {
  const classes = useStyles();
  const data = useStaticQuery(query);
  const {
    allContentfulExperience: { nodes: exp },
  } = data;

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className={classes.root}>
      <Title title="Experience" />
      <div className={classes.experience}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
          TabIndicatorProps={{ style: { backgroundColor: "#2caeba" } }}
        >
          {exp.map((item, index) => {
            return (
              <Tab
                label={item.company}
                {...a11yProps(index)}
                className={classes.tab}
              />
            );
          })}
        </Tabs>
        {exp.map((item, index) => {
          return (
            <TabPanel value={value} index={index}>
              <Typography variant="h5" className={classes.position}>
                {item.position}
              </Typography>
              <div className={classes.company_name}>{item.company}</div>
              <Typography variant="subtitle1" className={classes.date}>
                {item.date}
              </Typography>
              {item.description.map((des, index) => {
                return (
                  <div className={classes.desss}>
                    <DoubleArrowIcon className={classes.icon} />
                    <Typography
                      variant="subtitle2"
                      className={classes.description}
                    >
                      {des}
                    </Typography>
                  </div>
                );
              })}
            </TabPanel>
          );
        })}
      </div>
    </section>
  );
};

const query = graphql`
  {
    allContentfulExperience(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: createdAt, order: DESC }
    ) {
      nodes {
        company
        description
        position
        date
      }
    }
  }
`;

export default Experience;
