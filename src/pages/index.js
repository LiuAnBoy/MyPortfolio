import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "../components/layout";
// import Banner from "../components/banner";
import Banner from "../components/banner";
import Experience from "../components/experience";
import Project from "../components/project";
import Partner from "../components/partner";
import Contact from "../components/contact";

const Homepage = () => {
  return (
    <div>
      <CssBaseline />
      <Layout>
        <Banner />
        <Experience />
        <Project />
        {/* <Partner /> */}
        <Contact />
      </Layout>
    </div>
  );
};

export default Homepage;
