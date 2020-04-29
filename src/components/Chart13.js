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
var myDataSource = {
   
   
    chart: {
        "caption": "Total Profit Calculation",
        "subcaption": "Last month",
        "yAxisname": "Amount (In USD)",
        "numberprefix": "$",
        "connectordashed": "1",
        "sumlabel": "Total {br} Profit",
        "positiveColor": "#6baa01",
        "negativeColor": "#e44a00",
        "theme": "fusion"
    },
    "data": [
        {
            "label": "Online sales",
            "value": "420000"
        },
        {
            "label": "Store Sales",
            "value": "710000"
        },
        {
            "label": "Total Sales",
            "issum": "1"
        },
        {
            "label": "Fixed Costs",
            "value": "-250000"
        },
        {
            "label": "Variable Costs",
            "value": "-156000"
        },
        {
            "label": "COGS",
            "value": "-310000"
        },
        {
            "label": "Promotion Costs",
            "value": "-86000"
        },
        {
            "label": "Total Costs",
            "issum": "1",
            "cumulative": "0"
        }
    ]
};
const chartConfigs12 = {
    type:"waterfall2d",// The chart type
    width: "1000",
  height: "600", // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: myDataSource
        
    
}
export default chartConfigs12