import React from 'react';


export class SelectionBox extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: 'tesouroDireto',
            value1: 'oneYear',
            value2: 'twok'
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    
    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleChange1(e) {
        this.setState({
            value1: e.target.value
        })
    }

    handleChange2(e) {
        this.setState({
            value2: e.target.value
        })
    }
    
    handleSubmit(e) {
        let { value } = this.state;
        let { value1 } = this.state;
        let { value2 } = this.state;

        this.props.callback(value,value1,value2);
        this.props.onHandleSubmit(value, value1, value2)

        e.preventDefault();
      }

    render() {

        const { value } = this.state;
        const { value1 } = this.state;
        const { value2 } = this.state;
        
        return( 
        
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <p>Select the investment:</p>
                        <select value={value} onChange={this.handleChange}> 
                            <option value="tesouroDireto">Tesouro Direto</option>
                            <option value="bitcoin">Bitcoin</option>
                        </select>
                        <p>Select the year of the investment:</p>
                        <select value={value1} onChange={this.handleChange1}> 
                            <option value="oneYear">One year ago</option>
                            <option value="twoYear">Two years ago</option>
                        </select>
                        <p>Select the value of the investment:</p>
                        <select value={value2} onChange={this.handleChange2}> 
                            <option value="twok">R$2,000</option>
                            <option value="tenk">R$10,000</option>
                        </select>
                    </label>
                    <br/>
                    <br/>
                    <input type="submit" value="Generate" />
                </form>
            </div>
        
        )
    }
}