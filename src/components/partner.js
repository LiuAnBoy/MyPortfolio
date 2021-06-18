import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

import Title from "./title";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    maxWidth: "100%",
    padding: "60px 0",
    backgroundColor: "#fff",
  },
});

const partner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Title title="Partners" />
    </div>
  )
}

export default partner
