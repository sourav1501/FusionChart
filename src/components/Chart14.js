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
   
    "chart": {
        "caption": "Revenue Vs Expense",
        "subCaption": "Last year",
        "xaxisname": "Month",
        "yaxisname": "Amount (In USD)",
        "numberprefix": "$",
        "useforwardsteps": "0",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "Jan"
                },
                {
                    "label": "Feb"
                },
                {
                    "label": "Mar"
                },
                {
                    "label": "Apr"
                },
                {
                    "label": "May"
                },
                {
                    "label": "Jun"
                },
                {
                    "label": "Jul"
                },
                {
                    "label": "Aug"
                },
                {
                    "label": "Sep"
                },
                {
                    "label": "Oct"
                },
                {
                    "label": "Nov"
                },
                {
                    "label": "Dec"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "Revenue",
            "linethickness": "3",
            "anchorradius": "3",
            "data": [
                {
                    "value": "374000"
                },
                {
                    "value": "350000"
                },
                {
                    "value": "380000"
                },
                {
                    "value": "340000"
                },
                {
                    "value": "398000"
                },
                {
                    "value": "326000"
                },
                {
                    "value": "448000"
                },
                {
                    "value": "379000"
                },
                {
                    "value": "355000"
                },
                {
                    "value": "374000"
                },
                {
                    "value": "348000"
                },
                {
                    "value": "402000"
                }
            ]
        },
        {
            "seriesname": "Expense",
            "linethickness": "3",
            "anchorradius": "3",
            "data": [
                {
                    "value": "100000"
                },
                {
                    "value": "115000"
                },
                {
                    "value": "135000"
                },
                {
                    "value": "150000"
                },
                {
                    "value": "110000"
                },
                {
                    "value": "98000"
                },
                {
                    "value": "118000"
                },
                {
                    "value": "197000"
                },
                {
                    "value": "228000"
                },
                {
                    "value": "249000"
                },
                {
                    "value": "229000"
                },
                {
                    "value": "208000"
                }
            ]
        }
    ]
};
const chartConfigs13 = {
    type:"msstepline",// The chart type
    width: "1000",
  height: "600", // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: myDataSource
        
    
}
export default chartConfigs13