import React from "react";
import { Box, Hidden, makeStyles } from "@material-ui/core";
import { ReactComponent as CoivdLogo3 } from "./../Assets/covid-logo3.svg";

const useStyles = makeStyles({
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "140px",
    "& > svg": {
      maxWidth: "210px",
      height: "75px",
    },
  },
});
const Header = () => {
  const classes = useStyles();
  return (
    <Hidden mdUp>
      <Box className={classes.header}>
        <CoivdLogo3 />
      </Box>
    </Hidden>
  );
};

export default Header;
