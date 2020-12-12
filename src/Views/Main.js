import { Box, makeStyles } from "@material-ui/core";
import React, { useEffect, useMemo, useState } from "react";
import ChartStat from "../Components/ChartStat";
import CountryDropdown from "../Components/CountryDropdown";
import NumericStats from "../Components/NumericStats";
import FetchSuspense from "./../Hooks/FetchSuspense";

const covidAllResource = FetchSuspense(
  "https://corona.lmao.ninja/v2/all?yesterday"
);
const covidCountriesResource = FetchSuspense(
  "https://corona.lmao.ninja/v2/countries?yesterday&sort"
);

const useStyles = makeStyles((theme) => ({
  mainView: {},
}));
const Main = (props) => {
  const classes = useStyles();
  const allRes = covidAllResource.resource.read();
  const countriesRes = covidCountriesResource.resource.read();

  const [covidArray, setCovidArray] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const totalObj = allRes.data;
    totalObj.country = "All";
    const dataArray = [totalObj, ...countriesRes.data];
    setCovidArray(dataArray);
    setSelectedCountry(dataArray[0]);
  }, [allRes.data, countriesRes.data]);

  const countryChangeHandler = (e, v) => {
    setSelectedCountry(v);
  };
  return (
    <Box
      paddingX={[1, 2, 4, 6]}
      paddingTop={[0, 0, 4, 6]}
      className={classes.mainView}
    >
      <CountryDropdown
        options={covidArray}
        countryChangeHandler={countryChangeHandler}
        selectedOption={selectedCountry}
      />
      <NumericStats selectedCountry={selectedCountry} />
      <ChartStat selectedCountry={selectedCountry} />
    </Box>
  );
};

export default Main;
