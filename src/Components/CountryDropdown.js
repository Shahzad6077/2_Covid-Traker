import React from "react";
import { Box, makeStyles, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "260px",
    margin: "auto",
  },
}));

const CountryDropdown = ({ options, countryChangeHandler, selectedOption }) => {
  const classes = useStyles();

  const defaultProps = {
    options: options,
    getOptionLabel: (option) => option.country,
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
        disableClearable
        fullWidth
        onChange={countryChangeHandler}
        value={selectedOption}
        defaultValue="All"
      />
    </Box>
  );
};

export default CountryDropdown;
