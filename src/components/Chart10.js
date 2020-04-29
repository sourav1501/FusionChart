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
        "caption": "Split of Visitors by Age Group",
        "subCaption": "Last year",
        "enableSmartLabels": "0",
        "startingAngle": "0",
        "showPercentValues": "1",
        "decimals": "1",
        "useDataPlotColorForLabels": "1",
        "theme": "fusion"
    },
    "data": [
        {
            "label": "Teenage",
            "value": "1250400"
        },
        {
            "label": "Adult",
            "value": "1463300"
        },
        {
            "label": "Mid-age",
            "value": "1050700"
        },
        {
            "label": "Senior",
            "value": "491000"
        }
    ]
};
const chartConfigs9 = {
    type: 'pie3d',// The chart type
    width: "1000",
    height: "600",// Height of the chart
    dataFormat: 'json', // Data type
    dataSource: myDataSource
        
    
}
export default chartConfigs9