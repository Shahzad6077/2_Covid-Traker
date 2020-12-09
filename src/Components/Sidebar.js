import React from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";

import { ReactComponent as CovidLogo1 } from "./../Assets/covid-logo.svg";
import { ReactComponent as CovidLogo2 } from "./../Assets/covid-logo2.svg";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.orange,
    height: "100%",
  },
  logoTypo: {
    fontFamily: theme.typography.quickSand,
    color: "#fff",
    fontWeight: "bold",
  },
}));
const Sidebar = () => {
  const classes = useStyle();
  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="center"
      className={classes.root}
    >
      <Box>
        <CovidLogo1 />
        <Typography variant="h6" className={classes.logoTypo}>
          Covtrack
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <CovidLogo2 width="75%" />
      </Box>
    </Grid>
  );
};

export default Sidebar;
