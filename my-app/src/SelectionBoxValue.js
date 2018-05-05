import React from 'react';


export class SelectionBoxValue extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: 'twok'
        };
    
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
      }
    
    render() {
        return( 
        <div>
            <p>Select the value of the investment:</p>
            <select value={this.state.value} onChange={this.handleChange}>
                <option value="twok">2.000 R$</option>
                <option value="tenk">10.000 R$</option>
            </select>
        </div>    
        )
    }
}