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
    
        "caption": "The Global Wealth Pyramid",
        "captionOnTop": "0",
        "captionPadding": "25",
        "alignCaptionWithCanvas": "1",
        "subcaption": "Credit Suisse 2013",
        "subCaptionFontSize": "12",
        "borderAlpha": "20",
        "is2D": "1",
        "showValues": "1",
        "numberPrefix": "$",
        "numberSuffix": "M",
        "plotTooltext": "$label of world population is worth USD $value tn ",
        "showPercentValues": "1",
        "chartLeftMargin": "40",
        "theme": "fusion"
    },
    "data": [
        {
            "label": "Top 32 mn (0.7%)",
            "value": "98.7"
        },
        {
            "label": "Next 361 mn (7.7%)",
            "value": "101.8"
        },
        {
            "label": "Next 1.1 bn (22.9%)",
            "value": "33"
        },
        {
            "label": "Last 3.2 bn (68.7%)",
            "value": "7.3"
        }
    ]
};
const chartConfigs6 = {
    type: 'pyramid',// The chart type
    width: "1000",
    height: "600",// Height of the chart
    dataFormat: 'json', // Data type
    dataSource: myDataSource
        
    
}
export default chartConfigs6