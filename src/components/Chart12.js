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
        "theme": "fusion",
        "caption": "Top 25 NPM Packages for Node.js Developers",
        "subCaption": "March 2019",
        "plottooltext": "$datavalue Downloads",
        "YAxisname": "Number of Downloads",
        "XAxisname": "Packages"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "Commander.js"
                },
                {
                    "label": "Async.js"
                },
                {
                    "label": "Request – Simplified HTTP Client"
                },
                {
                    "label": "Express"
                },
                {
                    "label": "WebPack"
                },
                {
                    "label": "Underscore"
                },
                {
                    "label": "React"
                },
                {
                    "label": "JSDom"
                },
                {
                    "label": "Cheerio"
                },
                {
                    "label": "Mocha"
                },
                {
                    "label": "Marked"
                },
                {
                    "label": "LESS"
                },
                {
                    "label": "Morgan"
                },
                {
                    "label": "Karma"
                },
                {
                    "label": "MongoDB Node.JS Driver"
                },
                {
                    "label": "Nodemailer"
                },
                {
                    "label": "Passport"
                },
                {
                    "label": "Browserify"
                },
                {
                    "label": "Grunt"
                },
                {
                    "label": "JSHint"
                },
                {
                    "label": "Angular"
                },
                {
                    "label": "Bower"
                },
                {
                    "label": "Pug"
                },
                {
                    "label": "PM2"
                },
                {
                    "label": "Hapi"
                }
            ]
        }
    ],
    "dataset": [
        {
            "data": [
                {
                    "value": "97294205"
                },
                {
                    "value": "95482197"
                },
                {
                    "value": "60224172"
                },
                {
                    "value": "33018247"
                },
                {
                    "value": "31615028"
                },
                {
                    "value": "28984878"
                },
                {
                    "value": "25391784"
                },
                {
                    "value": "23581733"
                },
                {
                    "value": "12321215"
                },
                {
                    "value": "10838161"
                },
                {
                    "value": "7808888"
                },
                {
                    "value": "7127519"
                },
                {
                    "value": "6659395"
                },
                {
                    "value": "5731933"
                },
                {
                    "value": "4843888"
                },
                {
                    "value": "3264090"
                },
                {
                    "value": "2755188"
                },
                {
                    "value": "2661761"
                },
                {
                    "value": "2371272"
                },
                {
                    "value": "2201511"
                },
                {
                    "value": "1821149"
                },
                {
                    "value": "1683996"
                },
                {
                    "value": "1602832"
                },
                {
                    "value": "1267422"
                },
                {
                    "value": "1042206"
                }
            ]
        }
    ]
};
const chartConfigs11 = {
    type:"scrollbar2d",// The chart type
    width: "1000",
    height: "600",// Height of the chart
    dataFormat: 'json', // Data type
    dataSource: myDataSource
        
    
}
export default chartConfigs11