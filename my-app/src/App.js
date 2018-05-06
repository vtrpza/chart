import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Chart} from './components/Chart'
import {SelectionBox} from './components/SelectionBox'

const oneYearBt2k = [
  {name: 'May',bitcoin:0.06},
  {name: 'June',bitcoin:0.08},
  {name: 'July',bitcoin:0.07},
  {name: 'August',bitcoin:0.09},
  {name: 'September',bitcoin:0.12},
  {name: 'October',bitcoin:0.09},
  {name: 'November',bitcoin:0.10},
  {name: 'December',bitcoin:0.13},
  {name: 'January',bitcoin:0.12},
  {name: 'February',bitcoin:0.14},
  {name: 'March',bitcoin:0.12},
  {name: 'April',bitcoin:0.13},
  {name: 'May',bitcoin:0.12}
];

const twoYearBt2k = [
  {name: 'May',bitcoin:0.06},
  {name: 'June',bitcoin:0.08},
  {name: 'July',bitcoin:0.07},
  {name: 'Aug',bitcoin:0.09},
  {name: 'Sept',bitcoin:0.12},
  {name: 'Oct',bitcoin:0.09},
  {name: 'Nov',bitcoin:0.10},
  {name: 'Dec',bitcoin:0.13},
  {name: 'Jan',bitcoin:0.12},
  {name: 'Feb',bitcoin:0.14},
  {name: 'Mar',bitcoin:0.13},
  {name: 'Apr',bitcoin:0.12},
  {name: 'May',bitcoin:0.15},
  {name: 'June',bitcoin:0.15},
  {name: 'July',bitcoin:0.13},
  {name: 'Aug',bitcoin:0.16},
  {name: 'Sept',bitcoin:0.14},
  {name: 'Oct',bitcoin:0.16},
  {name: 'Nov',bitcoin:0.18},
  {name: 'Dec',bitcoin:0.17},
  {name: 'Jan',bitcoin:0.18},
  {name: 'Feb',bitcoin:0.21},
  {name: 'Mar',bitcoin:0.22},
  {name: 'Apr',bitcoin:0.24},
  {name: 'May',bitcoin:0.25}
];

const oneYearBt10k = [
  {name: 'May',bitcoin:0.29},
  {name: 'June',bitcoin:0.30},
  {name: 'July',bitcoin:0.31},
  {name: 'August',bitcoin:0.30},
  {name: 'September',bitcoin:0.29},
  {name: 'October',bitcoin:0.28},
  {name: 'November',bitcoin:0.29},
  {name: 'December',bitcoin:0.30},
  {name: 'January',bitcoin:0.33},
  {name: 'February',bitcoin:0.33},
  {name: 'March',bitcoin:0.34},
  {name: 'April',bitcoin:0.32},
  {name: 'May',bitcoin:0.34}
];

const twoYearBt10k = [
  {name: 'May',bitcoin:0.29},
  {name: 'June',bitcoin:0.30},
  {name: 'July',bitcoin:0.31},
  {name: 'Aug',bitcoin:0.30},
  {name: 'Sept',bitcoin:0.29},
  {name: 'Oct',bitcoin:0.28},
  {name: 'Nov',bitcoin:0.29},
  {name: 'Dec',bitcoin:0.30},
  {name: 'Jan',bitcoin:0.33},
  {name: 'Feb',bitcoin:0.33},
  {name: 'Mar',bitcoin:0.34},
  {name: 'Apr',bitcoin:0.32},
  {name: 'May',bitcoin:0.31},
  {name: 'June',bitcoin:0.30},
  {name: 'July',bitcoin:0.32},
  {name: 'Aug',bitcoin:0.33},
  {name: 'Sept',bitcoin:0.34},
  {name: 'Oct',bitcoin:0.35},
  {name: 'Nov',bitcoin:0.34},
  {name: 'Dec',bitcoin:0.33},
  {name: 'Jan',bitcoin:0.34},
  {name: 'Feb',bitcoin:0.35},
  {name: 'Mar',bitcoin:0.36},
  {name: 'Apr',bitcoin:0.37},
  {name: 'May',bitcoin:0.35}
];

const oneYearTD2k = [
  {name: 'May',tesouroDireto:2000},
  {name: 'June',tesouroDireto:2016.6},
  {name: 'July',tesouroDireto:2033.33},
  {name: 'August',tesouroDireto:2050.21},
  {name: 'September',tesouroDireto:2067.22},
  {name: 'October',tesouroDireto:2084.37},
  {name: 'November',tesouroDireto:2101.67},
  {name: 'December',tesouroDireto:2119.11},
  {name: 'January',tesouroDireto:2136.69},
  {name: 'February',tesouroDireto:2154.42},
  {name: 'March',tesouroDireto:2172.30},
  {name: 'April',tesouroDireto:2190.33},
  {name: 'May',tesouroDireto:2208.17}
];

const twoYearTD2k = [
  {name: 'May',tesouroDireto:2000},
  {name: 'June',tesouroDireto:2016.6},
  {name: 'July',tesouroDireto:2033.33},
  {name: 'Aug',tesouroDireto:2050.21},
  {name: 'Sept',tesouroDireto:2067.22},
  {name: 'Oct',tesouroDireto:2084.37},
  {name: 'Nov',tesouroDireto:2101.67},
  {name: 'Dec',tesouroDireto:2119.11},
  {name: 'Jan',tesouroDireto:2136.69},
  {name: 'Feb',tesouroDireto:2154.42},
  {name: 'Mar',tesouroDireto:2172.30},
  {name: 'Apr',tesouroDireto:2190.33},
  {name: 'May',tesouroDireto:2208.50},
  {name: 'June',tesouroDireto:2226.83},
  {name: 'July',tesouroDireto:2245.31},
  {name: 'Aug',tesouroDireto:2263.94},
  {name: 'Sept',tesouroDireto:2282.73},
  {name: 'Oct',tesouroDireto:2301.67},
  {name: 'Nov',tesouroDireto:2320.77},
  {name: 'Dec',tesouroDireto:2340.03},
  {name: 'Jan',tesouroDireto:2359.45},
  {name: 'Feb',tesouroDireto:2379.03},
  {name: 'Mar',tesouroDireto:2398.77},
  {name: 'Apr',tesouroDireto:2418.67},
  {name: 'May',tesouroDireto:2438.06}
];

const oneYearTD10k = [
  {name: 'May',tesouroDireto:10000},
  {name: 'June',tesouroDireto:10083},
  {name: 'July',tesouroDireto:10166.68},
  {name: 'August',tesouroDireto:10250.37},
  {name: 'September',tesouroDireto:10335.07},
  {name: 'October',tesouroDireto:10420.78},
  {name: 'November',tesouroDireto:10506.48},
  {name: 'December',tesouroDireto:10593.19},
  {name: 'January',tesouroDireto:10680.92},
  {name: 'February',tesouroDireto:10768.64},
  {name: 'March',tesouroDireto:10857.37},
  {name: 'April',tesouroDireto:10947.11},
  {name: 'May',tesouroDireto:11037.86}
];

const twoYearTD10k = [
  {name: 'May',tesouroDireto:10000},
  {name: 'June',tesouroDireto:10083},
  {name: 'July',tesouroDireto:10166.68},
  {name: 'Aug',tesouroDireto:10250.37},
  {name: 'Sept',tesouroDireto:10335.07},
  {name: 'Oct',tesouroDireto:10420.78},
  {name: 'Nov',tesouroDireto:10506.48},
  {name: 'Dec',tesouroDireto:10593.19},
  {name: 'Jan',tesouroDireto:10680.92},
  {name: 'Feb',tesouroDireto:10768.64},
  {name: 'Mar',tesouroDireto:10857.37},
  {name: 'Apr',tesouroDireto:10947.11},
  {name: 'May',tesouroDireto:11037.86},
  {name: 'June',tesouroDireto:11128.60},
  {name: 'July',tesouroDireto:11220.36},
  {name: 'Aug',tesouroDireto:11313.12},
  {name: 'Sept',tesouroDireto:11406.89},
  {name: 'Oct',tesouroDireto:11500.66},
  {name: 'Nov',tesouroDireto:11595.45},
  {name: 'Dec',tesouroDireto:11691.23},
  {name: 'Jan',tesouroDireto:11788.03},
  {name: 'Feb',tesouroDireto:11885.84},
  {name: 'Mar',tesouroDireto:11983.64},
  {name: 'Apr',tesouroDireto:12082.45},
  {name: 'May',tesouroDireto:12182.28}
];

class App extends Component {

constructor(props) {
  super(props);
  this.state = {
    data: oneYearTD2k,
    listDataFromChild: null,
    listDataFromChild1: null,
    listDataFromChild2: null
  };
}

myCallback = (dataFromChild) => {
 this.setState({
   typeInvestment: dataFromChild
 })
}
myCallback1 = (dataFromChild1) => {
  this.setState({
    periodInvestment: dataFromChild1
  })
 }
 myCallback2 = (dataFromChild2) => {
  this.setState({
    valueInvestment: dataFromChild2
  })
 }

onHandleChange = (typeInvestment, periodInvestment, valueInvestment, data) => { 
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Chart App</h1>
        </header>
        <Chart dataFromParent={data} typeInvestment={typeInvestment} />  
        <SelectionBox callbackFromParent={this.myCallback} callbackFromParent1={this.myCallback1} callbackFromParent2={this.myCallback2}  onHandleChange={this.onHandleChange} dataFromParent={data}/>
     </div> 
    );
  }
}

export default App;
