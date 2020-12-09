import React from "react";
import Sidebar from "../Components/Sidebar";
import { Box, Grid, Hidden, makeStyles } from "@material-ui/core";
import Header from "../Components/Header";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },
  mainRoot: {
    backgroundColor: theme.palette.grey,
  },
  contentWrapper: {
    flexGrow: 1,
  },
  sidebarWrapper: {
    maxWidth: "210px",
  },
}));
const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <Box minHeight="100vh" height="100%" className={classes.mainRoot}>
      <Grid container spacing={0} className={classes.root}>
        <Hidden smDown>
          <Grid item className={classes.sidebarWrapper}>
            <Sidebar />
          </Grid>
        </Hidden>
        <Grid item className={classes.contentWrapper}>
          <Header />
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
