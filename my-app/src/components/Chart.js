import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';




export const Chart = ({dataFromParent, typeInvestment}) => {
    return (
        <div>
        <LineChart width={1400} height={300} data={dataFromParent}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey={typeInvestment} stroke="#8884d8" activeDot={{r: 8}}/>
        </LineChart>
    </div>
    )
}

