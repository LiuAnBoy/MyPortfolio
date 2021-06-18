import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { graphql, useStaticQuery } from "gatsby";
import { Box, Tabs, Tab, Typography } from "@material-ui/core";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

import Title from "./title";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    maxWidth: "100%",
    padding: "60px 0",
    backgroundColor: "#f1f5f8",
  },
  container: {
    width: 1440,
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      width: "100vw",
    },
    [theme.breakpoints.down("xs")]: {
      width: "87.8vw",
    },
  },
  experience: {
    width: "75%",
    display: "flex",
    flexDirection: "row",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "87.8vw",
      flexDirection: "column",
    },
  },
  tab: {
    fontSize: 16,
    marginRight: "26px",
    letterSpacing: 2,
    "&:hover": {
      color: "#2caeba",
    },
    [theme.breakpoints.down("xs")]: {
      margin: " 0 auto",
    },
  },
  tabs: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: " 0 auto",
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
    fontSize: 16,
    letterSpacing: 1,
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
  },
  icon: {
    fontSize: 12,
    color: "#2caeba",
  },
  tabpanel: {
    paddingTop: 0,
    marginLeft: "100px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "50px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      padding: "2vw",
      margin: "60px auto 0",
    },
  },
}));

const TabPanel = props => {
  const { children, value, index, ...other } = props;
  const classes = useStyles();

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
        <Box
          // p={3}
          className={classes.tabpanel}
        >
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
  const [clientWidth, setClientWidth] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => setClientWidth(document.body.clientWidth <= 600));

  return (
    <section className={classes.root} id="About-section">
      <div className={classes.container}>
        <Title title="Experience" />
        <div className={classes.experience}>
          <Tabs
            orientation={clientWidth ? "horizontal" : "vertical"}
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
                  key={index}
                />
              );
            })}
          </Tabs>
          {exp.map((item, index) => {
            return (
              <TabPanel value={value} index={index} key={index}>
                <Typography variant="h5" className={classes.position}>
                  {item.position}
                </Typography>
                <div className={classes.company_name}>{item.company}</div>
                <Typography variant="subtitle1" className={classes.date}>
                  {item.date}
                </Typography>
                {item.description.map((des, index) => {
                  return (
                    <div className={classes.desss} key={index}>
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
