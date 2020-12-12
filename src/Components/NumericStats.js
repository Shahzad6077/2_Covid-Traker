import React from "react";
import { Grid, makeStyles, Paper, Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  item: {
    padding: "0px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.black,
    borderRadius: "18px",
    boxShadow: `var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)`,
    "& > *": {
      fontFamily: theme.typography.quickSand,
      fontWeight: "bold",
    },
  },
  infectedText: {
    color: theme.palette.darkBlue,
  },
  recoverdText: {
    color: theme.palette.lightBlue,
  },
  deathText: {
    color: theme.palette.red,
  },
}));
const NumericStats = ({ selectedCountry }) => {
  const classes = useStyles();

  return (
    <Box paddingX={[1, 2, 4, 6]} marginY={[2, 3, 4, 6]}>
      <Grid
        container
        spacing={3}
        classes={{ item: classes.item }}
        justify="space-evenly"
      >
        <Grid item xs={12} sm={12} md={3} classes={{ item: classes.item }}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Recovered</Typography>
            <Typography className={classes.infectedText} variant="h6">
              {selectedCountry?.recovered}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={3} classes={{ item: classes.item }}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Infected</Typography>
            <Typography className={classes.recoverdText} variant="h6">
              {selectedCountry?.cases}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={3} classes={{ item: classes.item }}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Deaths</Typography>
            <Typography className={classes.deathText} variant="h6">
              {selectedCountry?.deaths}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NumericStats;
