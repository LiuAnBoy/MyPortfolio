import React from "react";
import { globalHistory } from '@reach/router';
import { Button } from "@material-ui/core";

const projects = () => {
  const onClick = e => {
    console.log(globalHistory.location.pathname);
  };
  return (
    <div>
      <Button onClick={onClick} variant="outlined">GOGO</Button>
    </div>
  );
};

export default projects;
