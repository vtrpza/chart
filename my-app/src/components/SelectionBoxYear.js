import React from 'react';


export class SelectionBoxYear extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: 'oneYear'
        };
        
        this.handleChange = this.handleChange.bind(this);
    }

    /*
    handleChange(e) {
        this.setState({
            value: e.target.value
        });
        const {value} = this.state
        this.props.callbackFromParent(value);
        this.props.onHandleChange(this.state.value, this.props.dataFromParent)
      } */
    
      handleChange(e) {
        this.setState({
            value: e.target.value
        },()=>{
            let { value } = this.state;
            this.props.callbackFromParent(value);
            this.props.onHandleChange(value, this.props.dataFromParent)
        });
    }
    
    render() {
        return( 
        <div>
            <label>
                <p>Select the year of the investment:</p>
                <select value={this.state.value} onChange={this.handleChange}> 
                    <option value="oneYear">One year ago</option>
                    <option value="twoYear">Two years ago</option>
                </select>
            </label>
        </div>
        
        )
    }
}