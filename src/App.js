import React from 'react';
import './App.css';
import ReactFC from "react-fusioncharts";
import chartConfigs from './components/Chart'
import chartConfigs1 from './components/Chart2'
import chartConfigs2 from './components/Chart3'
import chartConfigs3 from './components/Chart4'
import chartConfigs4 from './components/Chart5'
import chartConfigs5 from './components/Chart6'
import chartConfigs6 from './components/Chart7'
import chartConfigs7 from './components/Chart8'
import chartConfigs8 from './components/Chart9'
import chartConfigs9 from './components/Chart10'
import chartConfigs10 from './components/Chart11'
import chartConfigs11 from './components/Chart12'
import chartConfigs12 from './components/Chart13'
import chartConfigs13 from './components/Chart14'
import chartConfigs14 from './components/Chart15'


function App() {
  return (
    <div>
    <div className="App">
    <ReactFC {...chartConfigs14} />
      <h2>Figure 1</h2>
    </div>
    <div className="App">
    <ReactFC {...chartConfigs13} />
    <h2>Figure 2</h2>
    </div>
    <div className="App">
    <ReactFC {...chartConfigs12} />
    <h2>Figure 3</h2>
    </div>
    <div className="App">

    <ReactFC {...chartConfigs11} />
    <h2>Figure 4</h2>
    </div>
    <div className="App">

    <ReactFC {...chartConfigs10} />
    <h2>Figure 5</h2>
    </div>
    <div className="App">

    <ReactFC {...chartConfigs9} />
    <h2>Figure 6</h2>
    </div>
    <div className="App">

    <ReactFC {...chartConfigs8} />
    <h2>Figure 7</h2>
    </div>
    <div className="App">

    <ReactFC {...chartConfigs7} />
    <h2>Figure 8</h2>
    </div>
    <div className="App">

    <ReactFC {...chartConfigs6} />
    <h2>Figure 9</h2>
    </div>
    <div className="App">

    <ReactFC {...chartConfigs5} />
    <h2>Figure 10</h2>
    </div>
    <div className="App">

    <ReactFC {...chartConfigs4} />
    <h2>Figure 11</h2>
    </div>
    <div className="App">

    <ReactFC {...chartConfigs3} />
    <h2>Figure 12</h2>
    </div>
    <div className="App">

    <ReactFC {...chartConfigs2} />
    <h2>Figure 13</h2>
    </div>
    <div className="App">

    <ReactFC {...chartConfigs1} />
    <h2>Figure 14</h2>
    </div>
    <div className="App">

    <ReactFC {...chartConfigs} />
    <h2>Figure 15</h2>
    </div>

    </div>
  );
}

export default App;
