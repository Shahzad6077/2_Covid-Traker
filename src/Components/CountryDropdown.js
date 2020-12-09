import React from "react";
import { Box, makeStyles, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "260px",
    margin: "auto",
  },
}));

const countryList = [
  { title: "Pakistan" },
  { title: "US" },
  { title: "India" },
];
const CountryDropdown = () => {
  const classes = useStyles();

  const defaultProps = {
    options: countryList,
    getOptionLabel: (option) => option.title,
  };
  return (
    <Box className={classes.root}>
      <Autocomplete
        {...defaultProps}
        id="auto-complete"
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label="Country" margin="dense" />
        )}
        fullWidth
      />
    </Box>
  );
};

export default CountryDropdown;
