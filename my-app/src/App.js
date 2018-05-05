import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Chart} from './components/Chart'
import {SelectionBoxYear} from './components/SelectionBoxYear'
import {SelectionBoxValue} from './components/SelectionBoxValue'


const oneYear = [
  {name: 'January',reais:2000, bitcoin: 2000},
  {name: 'February',reais:2016.6, bitcoin: 2500},
  {name: 'March',reais:2033.33, bitcoin: 2400},
  {name: 'April',reais:2050.21, bitcoin: 2800},
  {name: 'May',reais:2067.22, bitcoin: 2789},
  {name: 'June',reais:2084.37, bitcoin: 2866},
  {name: 'July',reais:2101.67, bitcoin: 2999},
  {name: 'August',reais:2119.11, bitcoin: 3000},
  {name: 'September',reais:2136.69, bitcoin: 3650},
  {name: 'October',reais:2154.42, bitcoin: 3443},
  {name: 'November',reais:2172.30, bitcoin: 3450},
  {name: 'December',reais:2190.33, bitcoin: 13500},
];

const twoYear = [
  {name: 'Jan',reais:1000, bitcoin: 1000},
  {name: 'Feb',reais:1100, bitcoin: 440},
  {name: 'Mar',reais:1200, bitcoin: 1043},
  {name: 'Apr',reais:1300, bitcoin: 1560},
  {name: 'May',reais:1400, bitcoin: 789},
  {name: 'June',reais:1500, bitcoin: 866},
  {name: 'July',reais:1600, bitcoin: 999},
  {name: 'Aug',reais:1700, bitcoin: 1440},
  {name: 'Sep',reais:1800, bitcoin: 1650},
  {name: 'Oct',reais:1900, bitcoin: 1043},
  {name: 'Nov',reais:2000, bitcoin: 1450},
  {name: 'Dec',reais:2100, bitcoin: 1500},
  {name: 'Jan',reais:1000, bitcoin: 1000},
  {name: 'Febr',reais:1100, bitcoin: 440},
  {name: 'Mar',reais:1200, bitcoin: 1043},
  {name: 'Apr',reais:1300, bitcoin: 1560},
  {name: 'May',reais:1400, bitcoin: 789},
  {name: 'June',reais:1500, bitcoin: 866},
  {name: 'July',reais:1600, bitcoin: 999},
  {name: 'Aug',reais:1700, bitcoin: 1440},
  {name: 'Sept',reais:1800, bitcoin: 1650},
  {name: 'Oct',reais:1900, bitcoin: 1043},
  {name: 'Nov',reais:2000, bitcoin: 1450},
  {name: 'Dec',reais:2100, bitcoin: 1500},
];


class App extends Component {

constructor(props) {
  super(props);
  this.state = {
    data: oneYear,
    listDataFromChild: null
  };
}

myCallback = (dataFromChild) => {
 this.setState({
   listDataFromChild: dataFromChild
 })
}

onHandleChange = (data, listDataFromChild) => { // Don't know what's happening here, that's why I've switched the states which they react to
  if(this.state.listDataFromChild === 'twoYear'){
    this.setState({
      data:oneYear
    })
   } else if(this.state.listDataFromChild === 'oneYear'){
      this.setState({
        data:twoYear
      })
   }
}

  render() {
    const {data} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Chart App</h1>
        </header>  
        <Chart dataFromParent={data}/>
        <SelectionBoxYear callbackFromParent={this.myCallback} onHandleChange={this.onHandleChange} dataFromParent={data}/>
        <SelectionBoxValue/>
     </div> 
    );
  }
}

export default App;
