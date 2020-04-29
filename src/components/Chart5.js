// Include react
import React from 'react';
import ReactDOM from 'react-dom';

// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

//Import the Widgets
import Widgets from 'fusioncharts/fusioncharts.widgets';

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

//STEP 2 - Defining the dataset for the angular gauge along with the color configuration
const colorRange = {
  "color": [{
    "minValue": "0",
    "maxValue": "50",
    "code": "#e44a00"
  }, {
    "minValue": "50",
    "maxValue": "75",
    "code": "#f8bd19"
  }, {
    "minValue": "75",
    "maxValue": "100",
    "code": "#6baa01"
  }]
};

const dials = {
  "dial": [{
    "value": "67"
  }]
};

// STEP 3 - Creating the JSON object to store the chart configurations
const chartConfigs4 = {
    type: 'angulargauge',// The chart type
    width: "1000",
    height: "600",// Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
        "chart": {
          "caption": "Customer Satisfaction Score",
          "subcaption": "Last week",
          "lowerLimit": "0",
          "upperLimit": "100",
          "theme": "fusion"
        },
        "colorRange": colorRange,
        "dials": dials
    }
}
export default chartConfigs4