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
      caption: "Top 10 iOS Apps - July 2020",
      subCaption: "Downloads (In Millions)",
      "canvasBgAlpha": "0",
      "bgColor": "#ffffff",
      "bgAlpha": "70",
      "baseFont": "Roboto",
      "baseFontSize": "14",
      "showAlternateVGridColor": "1",
      "alternateVGridAlpha": "5",
      "labelFontSize": "15",
      "captionFontSize": "20",
      "subCaptionFontSize": "16",
      "toolTipColor": "#000000",
      "toolTipBgColor": "#ffffff",
      "toolTipAlpha": "90",
      "captionFontBold": "0",
      "subCaptionFontBold": "0",
      "paletteColors": "#8E24AA",
      "valueFontSize": "13",
      "valueFontBold": "0",
      "animation": "0",
      "divLineAlpha": "15",
      "divLineDashed": "0",
      "plotFillAlpha": "90",
      theme: "ocean"
    },
    "data": [{
      "label": "Sarahah",
      "value": "3880000"
    }, {
      "label": "Messenger",
      "value": "2570000"
    }, {
      "label": "Snake vs Block",
      "value": "2420000"
    }, {
      "label": "Facebook",
      "value": "2140000"
    }, {
      "label": "Amazon",
      "value": "1830000"
    }, {
      "label": "Spotify Music",
      "value": "1540000"
    }, {
      "label": "Netflix",
      "value": "1530000"
    }, {
      "label": "Word Connect",
      "value": "1440000"
    }, {
      "label": "Pandora",
      "value": "1300000"
    }, {
      "label": "WhatsApp Messenger",
      "value": "1210000"
    }]
  };

  var chartConfigs5 = {
    id: "bar-chart",
    renderAt: "chart-container",
    type: "bar2d",
    width: "1000",
  height: "600",
    dataFormat: "json",
    dataSource: myDataSource
  };
  export default chartConfigs5