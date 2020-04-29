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
        caption: "Android Distribution for our app",
        subcaption: "For all users in 2017",
        showpercentvalues: "1",
        defaultcenterlabel: "Android Distribution",
        aligncaptionwithcanvas: "0",
        captionpadding: "0",
        decimals: "1",
        plottooltext:
          "<b>$percentValue</b> of our Android users are on <b>$label</b>",
        centerlabel: "# Users: $value",
        theme: "fusion"
      },
      data: [
        {
          label: "Ice Cream Sandwich",
          value: "1000"
        },
        {
          label: "Jelly Bean",
          value: "5300"
        },
        {
          label: "Kitkat",
          value: "10500"
        },
        {
          label: "Lollipop",
          value: "18900"
        },
        {
          label: "Marshmallow",
          value: "17904"
        }
      ]
};
const chartConfigs10 = {
    type:"doughnut2d",// The chart type
    width: "1000",
  height: "600",// Height of the chart
    dataFormat: 'json', // Data type
    dataSource: myDataSource
        
    
}
export default chartConfigs10