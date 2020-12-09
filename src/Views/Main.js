import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import CountryDropdown from "../Components/CountryDropdown";
import NumericStats from "../Components/NumericStats";

const useStyles = makeStyles((theme) => ({
  mainView: {
    // border: "1px solid",
  },
}));
const Main = () => {
  const classes = useStyles();
  return (
    <Box
      paddingX={[1, 2, 4, 6]}
      paddingTop={[0, 0, 4, 6]}
      className={classes.mainView}
    >
      <CountryDropdown />
      <NumericStats />
    </Box>
  );
};

export default Main;
