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
        "caption": "Project Plan for Construction of a Store (time duration in weeks)",
        "arrowatstart": "0",
        "arrowatend": "1",
        "viewMode": "1",
        "connectorToolText": "$label Weeks",
        "theme": "fusion"
    },
    "dataset": [
        {
            "id": "1",
            "seriesname": "DS1",
            "data": [
                {
                    "id": "2",
                    "x": "15",
                    "y": "56",
                    "name": "A",
                    "radius": "20",
                    "shape": "CIRCLE",
                    "tooltext": "A. Excavate"
                },
                {
                    "id": "3",
                    "x": "28",
                    "y": "56",
                    "name": "B",
                    "radius": "20",
                    "shape": "CIRCLE",
                    "tooltext": "B. Foundation"
                },
                {
                    "id": "4",
                    "x": "42",
                    "y": "56",
                    "name": "C",
                    "radius": "20",
                    "shape": "CIRCLE",
                    "tooltext": "C. Rough Wall"
                },
                {
                    "id": "5",
                    "x": "45",
                    "y": "28",
                    "name": "D",
                    "radius": "20",
                    "shape": "CIRCLE",
                    "tooltext": "D. Roof"
                },
                {
                    "id": "6",
                    "x": "56",
                    "y": "56",
                    "name": "E",
                    "radius": "20",
                    "shape": "CIRCLE",
                    "tooltext": "E. Exterior Plumbing"
                },
                {
                    "id": "7",
                    "x": "64",
                    "y": "71",
                    "name": "F",
                    "radius": "20",
                    "shape": "CIRCLE",
                    "tooltext": "F. Interior Plumbing"
                },
                {
                    "id": "8",
                    "x": "59",
                    "y": "28",
                    "name": "G",
                    "radius": "20",
                    "shape": "CIRCLE",
                    "tooltext": "G. Exterior Siding"
                },
                {
                    "id": "9",
                    "x": "70",
                    "y": "28",
                    "name": "H",
                    "radius": "20",
                    "shape": "CIRCLE",
                    "tooltext": "H. Exterior Painting"
                },
                {
                    "id": "10",
                    "x": "82",
                    "y": "40",
                    "name": "M",
                    "radius": "20",
                    "shape": "CIRCLE",
                    "tooltext": "M. Exterior Fixtures"
                },
                {
                    "id": "11",
                    "x": "44",
                    "y": "81",
                    "name": "I",
                    "radius": "20",
                    "shape": "CIRCLE",
                    "tooltext": "I. Electrical Work"
                },
                {
                    "id": "12",
                    "x": "70",
                    "y": "82",
                    "name": "J",
                    "radius": "20",
                    "shape": "CIRCLE",
                    "tooltext": "J. Wallboard"
                },
                {
                    "id": "13",
                    "x": "79",
                    "y": "94",
                    "name": "L",
                    "radius": "20",
                    "shape": "CIRCLE",
                    "tooltext": "L. Interior Painting"
                },
                {
                    "id": "14",
                    "x": "87",
                    "y": "82",
                    "name": "N",
                    "radius": "20",
                    "shape": "CIRCLE",
                    "tooltext": "N. Interior Fixtures"
                },
                {
                    "id": "15",
                    "x": "80",
                    "y": "70",
                    "name": "K",
                    "radius": "20",
                    "shape": "CIRCLE",
                    "tooltext": "K. Flooring"
                },
                {
                    "id": "1",
                    "x": "4",
                    "y": "57",
                    "name": "Start",
                    "height": "15",
                    "width": "40",
                    "shape": "RECTANGLE",
                    "tooltext": "Start of Construction"
                },
                {
                    "id": "16",
                    "x": "95",
                    "y": "59",
                    "name": "Finish",
                    "height": "15",
                    "width": "40",
                    "shape": "RECTANGLE",
                    "tooltext": "End Of Construction"
                }
            ]
        }
    ],
    "connectors": [
        {
            "stdthickness": "2",
            "connector": [
                {
                    "from": "2",
                    "to": "3",
                    "color": "#1aaf5d",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": "4"
                },
                {
                    "from": "3",
                    "to": "4",
                    "color": "#1aaf5d",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": "10"
                },
                {
                    "from": "4",
                    "to": "5",
                    "color": "#1aaf5d",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": "6"
                },
                {
                    "from": "4",
                    "to": "6",
                    "color": "#f2c500",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": "4"
                },
                {
                    "from": "4",
                    "to": "11",
                    "color": "#1aaf5d",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": "7"
                },
                {
                    "from": "5",
                    "to": "8",
                    "color": "#f2c500",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": "7"
                },
                {
                    "from": "6",
                    "to": "9",
                    "color": "#f2c500",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": "9"
                },
                {
                    "from": "9",
                    "to": "10",
                    "color": "#f2c500",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": "2"
                },
                {
                    "from": "6",
                    "to": "7",
                    "color": "#f2c500",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": "5"
                },
                {
                    "from": "11",
                    "to": "12",
                    "color": "#1aaf5d",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": "8"
                },
                {
                    "from": "7",
                    "to": "12",
                    "color": "#f2c500",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": ""
                },
                {
                    "from": "12",
                    "to": "13",
                    "color": "#1aaf5d",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": "5"
                },
                {
                    "from": "12",
                    "to": "15",
                    "color": "#f2c500",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": "4"
                },
                {
                    "from": "13",
                    "to": "14",
                    "color": "#1aaf5d",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": "6"
                },
                {
                    "from": "15",
                    "to": "14",
                    "color": "#f2c500",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": ""
                },
                {
                    "from": "1",
                    "to": "2",
                    "color": "#1aaf5d",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": "2"
                },
                {
                    "from": "8",
                    "to": "9",
                    "color": "#f2c500",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": ""
                },
                {
                    "from": "14",
                    "to": "16",
                    "color": "#1aaf5d",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": ""
                },
                {
                    "from": "10",
                    "to": "16",
                    "color": "#f2c500",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": ""
                }
            ]
        }
    ],
    "annotations": {
        "origw": "400",
        "origh": "300",
        "autoscale": "1",
        "groups": [
            {
                "color": "#0075c2",
                "fontSize": "12",
                "y": "$chartEndY - $chartBottomMargin - 54",
                "items": [
                    {
                        "id": "anno-A",
                        "type": "text",
                        "label": "A. Excavate",
                        "align": "Left",
                        "verticalAlign": "top",
                        "bold": "1",
                        "x": "$chartStartX + $chartLeftMargin + 24"
                    },
                    {
                        "id": "anno-B",
                        "type": "text",
                        "label": "B. Foundation",
                        "align": "Left",
                        "verticalAlign": "top",
                        "bold": "1",
                        "x": "$chartStartX + $chartLeftMargin + 124"
                    },
                    {
                        "id": "anno-C",
                        "type": "text",
                        "label": "C. Rough Wall",
                        "align": "Left",
                        "verticalAlign": "top",
                        "bold": "1",
                        "x": "$chartStartX + $chartLeftMargin + 224"
                    },
                    {
                        "id": "anno-D",
                        "type": "text",
                        "label": "D. Roof",
                        "align": "Left",
                        "verticalAlign": "top",
                        "bold": "1",
                        "x": "$chartStartX + $chartLeftMargin + 315"
                    }
                ]
            },
            {
                "color": "#0075c2",
                "fontSize": "12",
                "y": "$chartEndY - $chartBottomMargin - 42",
                "items": [
                    {
                        "id": "anno-E",
                        "type": "text",
                        "label": "E. Exterior Plumbing",
                        "align": "Left",
                        "verticalAlign": "top",
                        "bold": "1",
                        "x": "$chartStartX + $chartLeftMargin + 24"
                    },
                    {
                        "id": "anno-F",
                        "type": "text",
                        "label": "F. Interior Plumbing",
                        "align": "Left",
                        "verticalAlign": "top",
                        "bold": "1",
                        "x": "$chartStartX + $chartLeftMargin + 124"
                    },
                    {
                        "id": "anno-G",
                        "type": "text",
                        "label": "G. Exterior Siding",
                        "align": "Left",
                        "verticalAlign": "top",
                        "bold": "1",
                        "x": "$chartStartX + $chartLeftMargin + 224"
                    },
                    {
                        "id": "anno-H",
                        "type": "text",
                        "label": "H. Exterior Painting",
                        "align": "Left",
                        "verticalAlign": "top",
                        "bold": "1",
                        "x": "$chartStartX + $chartLeftMargin + 315"
                    }
                ]
            },
            {
                "color": "#0075c2",
                "fontSize": "12",
                "y": "$chartEndY - $chartBottomMargin - 30",
                "items": [
                    {
                        "id": "anno-I",
                        "type": "text",
                        "label": "I. Electrical Work",
                        "align": "Left",
                        "verticalAlign": "top",
                        "bold": "1",
                        "x": "$chartStartX + $chartLeftMargin + 24"
                    },
                    {
                        "id": "anno-J",
                        "type": "text",
                        "label": "J. Wallboard",
                        "align": "Left",
                        "verticalAlign": "top",
                        "bold": "1",
                        "x": "$chartStartX + $chartLeftMargin + 124"
                    },
                    {
                        "id": "anno-K",
                        "type": "text",
                        "label": "K. Flooring",
                        "align": "Left",
                        "verticalAlign": "top",
                        "bold": "1",
                        "x": "$chartStartX + $chartLeftMargin + 224"
                    },
                    {
                        "id": "anno-L",
                        "type": "text",
                        "label": "L. Interior Painting",
                        "align": "Left",
                        "verticalAlign": "top",
                        "bold": "1",
                        "x": "$chartStartX + $chartLeftMargin + 315"
                    }
                ]
            },
            {
                "color": "#0075c2",
                "fontSize": "12",
                "y": "$chartEndY - $chartBottomMargin - 18",
                "items": [
                    {
                        "id": "anno-M",
                        "type": "text",
                        "label": "M. Exterior Fixtures",
                        "align": "Left",
                        "verticalAlign": "top",
                        "bold": "1",
                        "x": "$chartStartX + $chartLeftMargin + 24"
                    },
                    {
                        "id": "anno-N",
                        "type": "text",
                        "label": "N. Interior Fixtures",
                        "align": "Left",
                        "verticalAlign": "top",
                        "bold": "1",
                        "x": "$chartStartX + $chartLeftMargin + 124"
                    }
                ]
            }
        ]
    }
};
const chartConfigs8 = {
    type: 'dragnode',// The chart type
    width: "1000",
  height: "600", // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: myDataSource
        
    
}
export default chartConfigs8