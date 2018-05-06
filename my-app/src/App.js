import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Chart} from './components/Chart'
import {SelectionBox} from './components/SelectionBox'

const oneYearBt2k = [
  {name: 'January',bitcoin:0.06},
  {name: 'February',bitcoin:0.08},
  {name: 'March',bitcoin:0.07},
  {name: 'April',bitcoin:0.09},
  {name: 'May',bitcoin:0.12},
  {name: 'June',bitcoin:0.09},
  {name: 'July',bitcoin:0.10},
  {name: 'August',bitcoin:0.13},
  {name: 'September',bitcoin:0.12},
  {name: 'October',bitcoin:0.14},
  {name: 'November',bitcoin:0.12},
  {name: 'December',bitcoin:0.13}
];

const twoYearBt2k = [
  {name: 'Jan',bitcoin:0.06},
  {name: 'Feb',bitcoin:0.08},
  {name: 'Mar',bitcoin:0.07},
  {name: 'Apr',bitcoin:0.09},
  {name: 'May',bitcoin:0.12},
  {name: 'June',bitcoin:0.09},
  {name: 'July',bitcoin:0.10},
  {name: 'Aug',bitcoin:0.13},
  {name: 'Sept',bitcoin:0.12},
  {name: 'Oct',bitcoin:0.14},
  {name: 'Nov',bitcoin:0.13},
  {name: 'Dec',bitcoin:0.12},
  {name: 'Jan',bitcoin:0.15},
  {name: 'Feb',bitcoin:0.15},
  {name: 'Mar',bitcoin:0.13},
  {name: 'Apr',bitcoin:0.16},
  {name: 'May',bitcoin:0.14},
  {name: 'June',bitcoin:0.16},
  {name: 'July',bitcoin:0.18},
  {name: 'Aug',bitcoin:0.17},
  {name: 'Sept',bitcoin:0.18},
  {name: 'Oct',bitcoin:0.21},
  {name: 'Nov',bitcoin:0.22},
  {name: 'Dec',bitcoin:0.24}
];

const oneYearBt10k = [
  {name: 'January',bitcoin:0.29},
  {name: 'February',bitcoin:0.30},
  {name: 'March',bitcoin:0.31},
  {name: 'April',bitcoin:0.30},
  {name: 'May',bitcoin:0.29},
  {name: 'June',bitcoin:0.28},
  {name: 'July',bitcoin:0.29},
  {name: 'August',bitcoin:0.30},
  {name: 'September',bitcoin:0.33},
  {name: 'October',bitcoin:0.33},
  {name: 'November',bitcoin:0.34},
  {name: 'December',bitcoin:0.32}
];

const twoYearBt10k = [
  {name: 'Jan',bitcoin:0.29},
  {name: 'Feb',bitcoin:0.30},
  {name: 'Mar',bitcoin:0.31},
  {name: 'Apr',bitcoin:0.30},
  {name: 'May',bitcoin:0.29},
  {name: 'June',bitcoin:0.28},
  {name: 'July',bitcoin:0.29},
  {name: 'Aug',bitcoin:0.30},
  {name: 'Sept',bitcoin:0.33},
  {name: 'Oct',bitcoin:0.33},
  {name: 'Nov',bitcoin:0.34},
  {name: 'Dec',bitcoin:0.32},
  {name: 'Jan',bitcoin:0.31},
  {name: 'Feb',bitcoin:0.30},
  {name: 'Mar',bitcoin:0.32},
  {name: 'Apr',bitcoin:0.33},
  {name: 'May',bitcoin:0.34},
  {name: 'June',bitcoin:0.35},
  {name: 'July',bitcoin:0.34},
  {name: 'Aug',bitcoin:0.33},
  {name: 'Sept',bitcoin:0.34},
  {name: 'Oct',bitcoin:0.35},
  {name: 'Nov',bitcoin:0.36},
  {name: 'Dec',bitcoin:0.37},
];

const oneYearTD2k = [
  {name: 'January',tesouroDireto:2000},
  {name: 'February',tesouroDireto:2016.6},
  {name: 'March',tesouroDireto:2033.33},
  {name: 'April',tesouroDireto:2050.21},
  {name: 'May',tesouroDireto:2067.22},
  {name: 'June',tesouroDireto:2084.37},
  {name: 'July',tesouroDireto:2101.67},
  {name: 'August',tesouroDireto:2119.11},
  {name: 'September',tesouroDireto:2136.69},
  {name: 'October',tesouroDireto:2154.42},
  {name: 'November',tesouroDireto:2172.30},
  {name: 'December',tesouroDireto:2190.33},
];

const twoYearTD2k = [
  {name: 'Jan',tesouroDireto:2000},
  {name: 'Feb',tesouroDireto:2016.6},
  {name: 'Mar',tesouroDireto:2033.33},
  {name: 'Apr',tesouroDireto:2050.21},
  {name: 'May',tesouroDireto:2067.22},
  {name: 'June',tesouroDireto:2084.37},
  {name: 'July',tesouroDireto:2101.67},
  {name: 'Aug',tesouroDireto:2119.11},
  {name: 'Sept',tesouroDireto:2136.69},
  {name: 'Oct',tesouroDireto:2154.42},
  {name: 'Nov',tesouroDireto:2172.30},
  {name: 'Dec',tesouroDireto:2190.33},
  {name: 'Jan',tesouroDireto:2208.50},
  {name: 'Feb',tesouroDireto:2226.83},
  {name: 'Mar',tesouroDireto:2245.31},
  {name: 'Apr',tesouroDireto:2263.94},
  {name: 'May',tesouroDireto:2282.73},
  {name: 'June',tesouroDireto:2301.67},
  {name: 'July',tesouroDireto:2320.77},
  {name: 'Aug',tesouroDireto:2340.03},
  {name: 'Sept',tesouroDireto:2359.45},
  {name: 'Oct',tesouroDireto:2379.03},
  {name: 'Nov',tesouroDireto:2398.77},
  {name: 'Dec',tesouroDireto:2418.67},
];

const oneYearTD10k = [
  {name: 'January',tesouroDireto:10000},
  {name: 'February',tesouroDireto:10083},
  {name: 'March',tesouroDireto:10166.68},
  {name: 'April',tesouroDireto:10250.37},
  {name: 'May',tesouroDireto:10335.07},
  {name: 'June',tesouroDireto:10420.78},
  {name: 'July',tesouroDireto:10506.48},
  {name: 'August',tesouroDireto:10593.19},
  {name: 'September',tesouroDireto:10680.92},
  {name: 'October',tesouroDireto:10768.64},
  {name: 'November',tesouroDireto:10857.37},
  {name: 'December',tesouroDireto:10947.11}
];

const twoYearTD10k = [
  {name: 'Jan',tesouroDireto:10000},
  {name: 'Feb',tesouroDireto:10083},
  {name: 'Mar',tesouroDireto:10166.68},
  {name: 'Apr',tesouroDireto:10250.37},
  {name: 'May',tesouroDireto:10335.07},
  {name: 'June',tesouroDireto:10420.78},
  {name: 'July',tesouroDireto:10506.48},
  {name: 'Aug',tesouroDireto:10593.19},
  {name: 'Sept',tesouroDireto:10680.92},
  {name: 'Oct',tesouroDireto:10768.64},
  {name: 'Nov',tesouroDireto:10857.37},
  {name: 'Dec',tesouroDireto:10947.11},
  {name: 'Jan',tesouroDireto:11037.86},
  {name: 'Feb',tesouroDireto:11128.60},
  {name: 'Mar',tesouroDireto:11220.36},
  {name: 'Apr',tesouroDireto:11313.12},
  {name: 'May',tesouroDireto:11406.89},
  {name: 'June',tesouroDireto:11500.66},
  {name: 'July',tesouroDireto:11595.45},
  {name: 'Aug',tesouroDireto:11691.23},
  {name: 'Sept',tesouroDireto:11788.03},
  {name: 'Oct',tesouroDireto:11885.84},
  {name: 'Nov',tesouroDireto:11983.64},
  {name: 'Dec',tesouroDireto:12082.45},
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
