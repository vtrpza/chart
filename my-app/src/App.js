import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Chart} from './Chart'
import {SelectionBoxYear} from './SelectionBoxYear'
import {SelectionBoxValue} from './SelectionBoxValue'


const oneYear = [
  {name: 'January',reais:2200, bitcoin: 1000},
  {name: 'February',reais:2420, bitcoin: 440},
  {name: 'March',reais:2662, bitcoin: 1043},
  {name: 'April',reais:2928, bitcoin: 1560},
  {name: 'May',reais:3220, bitcoin: 789},
  {name: 'June',reais:3542, bitcoin: 866},
  {name: 'July',reais:3896, bitcoin: 999},
  {name: 'August',reais:4285, bitcoin: 1440},
  {name: 'September',reais:4713, bitcoin: 1650},
  {name: 'October',reais:5184, bitcoin: 1043},
  {name: 'November',reais:5702, bitcoin: 1450},
  {name: 'December',reais:6272, bitcoin: 1500},
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

onHandleChange = (data, listDataFromChild) => {
  if(this.state.listDataFromChild === 'oneYear'){
    this.setState({
      data:oneYear
    })
   } else if(this.state.listDataFromChild === 'twoYear'){
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
