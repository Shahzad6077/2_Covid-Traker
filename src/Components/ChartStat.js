import { Box, makeStyles, useTheme } from "@material-ui/core";
import React, { useEffect, createRef } from "react";
import Chart from "chart.js";

const useStyles = makeStyles(() => ({
  root: {
    border: "1px solid",
    display: "flex",
    justifyContent: "center",
  },
  inner: {
    width: "300px",
  },
}));
const ChartStat = ({ selectedCountry }) => {
  const classes = useStyles();
  const chartCanvasRef = createRef();
  const theme = useTheme();
  useEffect(() => {
    const canvasRef = chartCanvasRef.current;
    const data = {
      labels: ["Recovered", "Infected", "Deaths"],
      datasets: [
        {
          barPercentage: 0.4,
          data: [
            selectedCountry?.recovered,
            selectedCountry?.cases,
            selectedCountry?.deaths,
          ],
          backgroundColor: [
            theme.palette.darkBlue,
            theme.palette.lightBlue,
            theme.palette.red,
          ],
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: { padding: 10 },
          },
        ],
      },
    };
    const globalSettings = Chart.defaults.global;
    Chart.defaults.scale.gridLines.drawOnChartArea = false;
    Chart.defaults.scale.ticks.fontColor = theme.palette.black;
    Chart.defaults.scale.gridLines.color = theme.palette.orange;
    Chart.defaults.scale.gridLines.lineWidth = 2;
    globalSettings.legend.display = false;
    globalSettings.defaultFontFamily = theme.typography.fontFamily;
    const chart = new Chart(canvasRef.getContext("2d"), {
      type: "bar",
      data,
      options,
    });
    return () => {
      chart.destroy();
    };
  }, [theme, chartCanvasRef]);
  return (
    <Box className={classes.root}>
      <Box className={classes.inner}>
        <canvas
          id="myChart"
          width="300px"
          height="280px"
          ref={chartCanvasRef}
        ></canvas>
      </Box>
    </Box>
  );
};

export default ChartStat;
