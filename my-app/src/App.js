import React, { Component } from 'react';
import './App.css';
import {Chart} from './components/Chart'
import {SelectionBox} from './components/SelectionBox'
import {Title} from './components/Title'

const oneYearBt2k = [
  {name: 'May/17',bitcoin:0.06},
  {name: 'June/17',bitcoin:0.08},
  {name: 'July/17',bitcoin:0.07},
  {name: 'Aug/17',bitcoin:0.09},
  {name: 'Sept/17',bitcoin:0.12},
  {name: 'Oct/17',bitcoin:0.09},
  {name: 'Nov/17',bitcoin:0.10},
  {name: 'Dec/17',bitcoin:0.13},
  {name: 'Jan/18',bitcoin:0.12},
  {name: 'Feb/18',bitcoin:0.14},
  {name: 'Mar/18',bitcoin:0.12},
  {name: 'Apr/18',bitcoin:0.13},
  {name: 'May/18',bitcoin:0.12}
];

const twoYearBt2k = [
  {name: 'May/16',bitcoin:0.06},
  {name: 'June/16',bitcoin:0.08},
  {name: 'July/16',bitcoin:0.07},
  {name: 'Aug/16',bitcoin:0.09},
  {name: 'Sept/16',bitcoin:0.12},
  {name: 'Oct/16',bitcoin:0.09},
  {name: 'Nov/16',bitcoin:0.10},
  {name: 'Dec/16',bitcoin:0.13},
  {name: 'Jan/17',bitcoin:0.12},
  {name: 'Feb/17',bitcoin:0.14},
  {name: 'Mar/17',bitcoin:0.13},
  {name: 'Apr/17',bitcoin:0.12},
  {name: 'May/17',bitcoin:0.15},
  {name: 'June/17',bitcoin:0.15},
  {name: 'July/17',bitcoin:0.13},
  {name: 'Aug/17',bitcoin:0.16},
  {name: 'Sept/17',bitcoin:0.14},
  {name: 'Oct/17',bitcoin:0.16},
  {name: 'Nov/17',bitcoin:0.18},
  {name: 'Dec/17',bitcoin:0.17},
  {name: 'Jan/18',bitcoin:0.18},
  {name: 'Feb/18',bitcoin:0.21},
  {name: 'Mar/18',bitcoin:0.22},
  {name: 'Apr/18',bitcoin:0.24},
  {name: 'May/18',bitcoin:0.25}
];

const oneYearBt10k = [
  {name: 'May/17',bitcoin:0.29},
  {name: 'June/17',bitcoin:0.30},
  {name: 'July/17',bitcoin:0.31},
  {name: 'Aug/17',bitcoin:0.30},
  {name: 'Sept/17',bitcoin:0.29},
  {name: 'Oct/17',bitcoin:0.28},
  {name: 'Nov/17',bitcoin:0.29},
  {name: 'Dec/17',bitcoin:0.30},
  {name: 'Jan/18',bitcoin:0.33},
  {name: 'Feb/18',bitcoin:0.33},
  {name: 'Mar/18',bitcoin:0.34},
  {name: 'Apr/18',bitcoin:0.32},
  {name: 'May/18',bitcoin:0.34}
];

const twoYearBt10k = [
  {name: 'May/16',bitcoin:0.29},
  {name: 'June/16',bitcoin:0.30},
  {name: 'July/16',bitcoin:0.31},
  {name: 'Aug/16',bitcoin:0.30},
  {name: 'Sept/16',bitcoin:0.29},
  {name: 'Oct/16',bitcoin:0.28},
  {name: 'Nov/16',bitcoin:0.29},
  {name: 'Dec/16',bitcoin:0.30},
  {name: 'Jan/17',bitcoin:0.33},
  {name: 'Feb/17',bitcoin:0.33},
  {name: 'Mar/17',bitcoin:0.34},
  {name: 'Apr/17',bitcoin:0.32},
  {name: 'May/17',bitcoin:0.31},
  {name: 'June/17',bitcoin:0.30},
  {name: 'July/17',bitcoin:0.32},
  {name: 'Aug/17',bitcoin:0.33},
  {name: 'Sept/17',bitcoin:0.34},
  {name: 'Oct/17',bitcoin:0.35},
  {name: 'Nov/17',bitcoin:0.34},
  {name: 'Dec/17',bitcoin:0.33},
  {name: 'Jan/18',bitcoin:0.34},
  {name: 'Feb/18',bitcoin:0.35},
  {name: 'Mar/18',bitcoin:0.36},
  {name: 'Apr/18',bitcoin:0.37},
  {name: 'May/18',bitcoin:0.35}
];

const oneYearTD2k = [
  {name: 'May/17',tesouroDireto:2000},
  {name: 'June/17',tesouroDireto:2016.6},
  {name: 'July/17',tesouroDireto:2033.33},
  {name: 'Aug/17',tesouroDireto:2050.21},
  {name: 'Sept/17',tesouroDireto:2067.22},
  {name: 'Oct/17',tesouroDireto:2084.37},
  {name: 'Nov/17',tesouroDireto:2101.67},
  {name: 'Dec/17',tesouroDireto:2119.11},
  {name: 'Jan/18',tesouroDireto:2136.69},
  {name: 'Feb/18',tesouroDireto:2154.42},
  {name: 'Mar/18',tesouroDireto:2172.30},
  {name: 'Apr/18',tesouroDireto:2190.33},
  {name: 'May/18',tesouroDireto:2208.17}
];

const twoYearTD2k = [
  {name: 'May/16',tesouroDireto:2000},
  {name: 'June/16',tesouroDireto:2016.6},
  {name: 'July/16',tesouroDireto:2033.33},
  {name: 'Aug/16',tesouroDireto:2050.21},
  {name: 'Sept/16',tesouroDireto:2067.22},
  {name: 'Oct/16',tesouroDireto:2084.37},
  {name: 'Nov/16',tesouroDireto:2101.67},
  {name: 'Dec/16',tesouroDireto:2119.11},
  {name: 'Jan/17',tesouroDireto:2136.69},
  {name: 'Feb/17',tesouroDireto:2154.42},
  {name: 'Mar/17',tesouroDireto:2172.30},
  {name: 'Apr/17',tesouroDireto:2190.33},
  {name: 'May/17',tesouroDireto:2208.50},
  {name: 'June/17',tesouroDireto:2226.83},
  {name: 'July/17',tesouroDireto:2245.31},
  {name: 'Aug/17',tesouroDireto:2263.94},
  {name: 'Sept/17',tesouroDireto:2282.73},
  {name: 'Oct/17',tesouroDireto:2301.67},
  {name: 'Nov/17',tesouroDireto:2320.77},
  {name: 'Dec/17',tesouroDireto:2340.03},
  {name: 'Jan/18',tesouroDireto:2359.45},
  {name: 'Feb/18',tesouroDireto:2379.03},
  {name: 'Mar/18',tesouroDireto:2398.77},
  {name: 'Apr/18',tesouroDireto:2418.67},
  {name: 'May/18',tesouroDireto:2438.06}
];

const oneYearTD10k = [
  {name: 'May/17',tesouroDireto:10000},
  {name: 'June/17',tesouroDireto:10083},
  {name: 'July/17',tesouroDireto:10166.68},
  {name: 'Aug/17',tesouroDireto:10250.37},
  {name: 'Sept/17',tesouroDireto:10335.07},
  {name: 'Oct/17',tesouroDireto:10420.78},
  {name: 'Nov/17',tesouroDireto:10506.48},
  {name: 'Dec/17',tesouroDireto:10593.19},
  {name: 'Jan/18',tesouroDireto:10680.92},
  {name: 'Feb/18',tesouroDireto:10768.64},
  {name: 'Mar/18',tesouroDireto:10857.37},
  {name: 'Apr/18',tesouroDireto:10947.11},
  {name: 'May/18',tesouroDireto:11037.86}
];

const twoYearTD10k = [
  {name: 'May/16',tesouroDireto:10000},
  {name: 'June/16',tesouroDireto:10083},
  {name: 'July/16',tesouroDireto:10166.68},
  {name: 'Aug/16',tesouroDireto:10250.37},
  {name: 'Sept/16',tesouroDireto:10335.07},
  {name: 'Oct/16',tesouroDireto:10420.78},
  {name: 'Nov/16',tesouroDireto:10506.48},
  {name: 'Dec/16',tesouroDireto:10593.19},
  {name: 'Jan/17',tesouroDireto:10680.92},
  {name: 'Feb/17',tesouroDireto:10768.64},
  {name: 'Mar/17',tesouroDireto:10857.37},
  {name: 'Apr/17',tesouroDireto:10947.11},
  {name: 'May/17',tesouroDireto:11037.86},
  {name: 'June/17',tesouroDireto:11128.60},
  {name: 'July/17',tesouroDireto:11220.36},
  {name: 'Aug/17',tesouroDireto:11313.12},
  {name: 'Sept/17',tesouroDireto:11406.89},
  {name: 'Oct/17',tesouroDireto:11500.66},
  {name: 'Nov/17',tesouroDireto:11595.45},
  {name: 'Dec/17',tesouroDireto:11691.23},
  {name: 'Jan/18',tesouroDireto:11788.03},
  {name: 'Feb/18',tesouroDireto:11885.84},
  {name: 'Mar/18',tesouroDireto:11983.64},
  {name: 'Apr/18',tesouroDireto:12082.45},
  {name: 'May/18',tesouroDireto:12182.28}
];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: oneYearTD2k,
      typeInvestment: null,
      periodInvestment: null,
      valueInvestment: null
    };
  }
  
  callback = (dataFromChild,dataFromChild1,dataFromChild2) => {
   this.setState({
    typeInvestment: dataFromChild,
    periodInvestment: dataFromChild1,
    valueInvestment: dataFromChild2
   })
  }
  
  onHandleSubmit = (typeInvestment, periodInvestment, valueInvestment, data) => { 
    if(typeInvestment === "tesouroDireto" && periodInvestment === "oneYear" && valueInvestment === "twok"){
      this.setState({
        data: oneYearTD2k
      })
    } if(typeInvestment === "tesouroDireto" && periodInvestment === "twoYear" && valueInvestment === "twok"){
      this.setState({
        data: twoYearTD2k
      })
    } if(typeInvestment === "tesouroDireto" && periodInvestment === "oneYear" && valueInvestment === "tenk"){
      this.setState({
        data: oneYearTD10k
      }) 
    } if(typeInvestment === "tesouroDireto" && periodInvestment === "twoYear" && valueInvestment === "tenk"){
      this.setState({
        data: twoYearTD10k
      }) 
    } if(typeInvestment === "bitcoin" && periodInvestment === "oneYear" && valueInvestment === "twok"){
      this.setState({
        data: oneYearBt2k
      })
    } if(typeInvestment === "bitcoin" && periodInvestment === "twoYear" && valueInvestment === "twok"){
      this.setState({
        data: twoYearBt2k
      })
    } if(typeInvestment === "bitcoin" && periodInvestment === "oneYear" && valueInvestment === "tenk"){
      this.setState({
      data: oneYearBt10k
      })
    } if(typeInvestment === "bitcoin" && periodInvestment === "twoYear" && valueInvestment === "tenk"){
      this.setState({
      data: twoYearBt10k
      })
    }
  }
  
    render() {
      const {data} = this.state;
      const {typeInvestment} = this.state;
    
      
      return (
        <div>
          
          <div className="wrapper">
            <div className="main">
              <div className="container">
                <Title/>
                <div className="row maincontainer">
                  <div className="col-xs-2">
                    <SelectionBox callback={this.callback} onHandleSubmit={this.onHandleSubmit}/>
                  </div>
                  <div className="col-xs-10">
                    <Chart dataFromParent={data} typeInvestment={typeInvestment} />  
                  </div>
                </div>
              </div>
            </div>
          </div>
       </div> 
      );
    }
}

export default App;
