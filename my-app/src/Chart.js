import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const oneYear = [
    {name: 'January',reais:1000, bitcoin: 1000},
    {name: 'February',reais:1100, bitcoin: 440},
    {name: 'March',reais:1200, bitcoin: 1043},
    {name: 'April',reais:1300, bitcoin: 1560},
    {name: 'May',reais:1400, bitcoin: 789},
    {name: 'June',reais:1500, bitcoin: 866},
    {name: 'July',reais:1600, bitcoin: 999},
    {name: 'August',reais:1700, bitcoin: 1440},
    {name: 'September',reais:1800, bitcoin: 1650},
    {name: 'October',reais:1900, bitcoin: 1043},
    {name: 'November',reais:2000, bitcoin: 1450},
    {name: 'December',reais:2100, bitcoin: 1500},
  ];

const twoYear = [
    {name: 'January',reais:1000, bitcoin: 1000},
    {name: 'February',reais:1100, bitcoin: 440},
    {name: 'March',reais:1200, bitcoin: 1043},
    {name: 'April',reais:1300, bitcoin: 1560},
    {name: 'May',reais:1400, bitcoin: 789},
    {name: 'June',reais:1500, bitcoin: 866},
    {name: 'July',reais:1600, bitcoin: 999},
    {name: 'August',reais:1700, bitcoin: 1440},
    {name: 'September',reais:1800, bitcoin: 1650},
    {name: 'October',reais:1900, bitcoin: 1043},
    {name: 'November',reais:2000, bitcoin: 1450},
    {name: 'December',reais:2100, bitcoin: 1500},
    {name: 'January',reais:1000, bitcoin: 1000},
    {name: 'February',reais:1100, bitcoin: 440},
    {name: 'March',reais:1200, bitcoin: 1043},
    {name: 'April',reais:1300, bitcoin: 1560},
    {name: 'May',reais:1400, bitcoin: 789},
    {name: 'June',reais:1500, bitcoin: 866},
    {name: 'July',reais:1600, bitcoin: 999},
    {name: 'August',reais:1700, bitcoin: 1440},
    {name: 'September',reais:1800, bitcoin: 1650},
    {name: 'October',reais:1900, bitcoin: 1043},
    {name: 'November',reais:2000, bitcoin: 1450},
    {name: 'December',reais:2100, bitcoin: 1500},
  ];


class SelectionBoxYear extends React.Component {
    
    render() {
        return( 
        <div>
            <p>Select the year of the investment:</p>
            <select> 
                <option value="oneyear">One year ago</option>
                <option value="twoyear">Two years ago</option>
            </select>
        </div>    
        )
    }
}

class SelectionBoxValue extends React.Component {
    render() {
        return( 
        <div>
            <p>Select the value of the investment:</p>
            <select>
                <option value="twok">2.000 R$</option>
                <option value="tenk">10.000 R$</option>
            </select>
        </div>    
        )
    }
}

export class Chart extends React.Component {
    render() {

        return (
            <div>
            <LineChart width={1200} height={300} data={oneYear}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="reais" stroke="#8884d8" activeDot={{r: 8}}/>
                <Line type="monotone" dataKey="bitcoin" stroke="#82ca9d" />
            </LineChart>
            
            <SelectionBoxYear />
            <SelectionBoxValue />
            
        </div>
        )
    }
}