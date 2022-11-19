import React, { Component } from "react";
import Output from "../output/output";
import './layout.css';


class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            input: '0',
            result: ''
         }
    }

    handleClick = (event) => {
        const value = event.target.innerText;
        if(value === '=') {
            if(this.state.input!=='') {
                let res = '';
                try {
                    res = eval(this.state.input);
                } catch(err) {
                    this.setState({result:'Math error'});
                    console.log(err);
                }
                if(res === undefined) {
                    this.setState({result:'Math error'});
                } else {
                    this.setState({result:this.state.input + "="});
                    this.setState({input:res});
                }
            }
        } else if( value === 'C' ) {
            this.setState({result:'', input:'0'});
        } else if(value === 'DEL') {
            let str = this.state.input;
            str = str.substring(0, str.length-1);
            this.setState({input:str});
        } else if(value==='0') {
            this.setState({input:value});
        } else {
            this.setState({input: this.state.input + value});
        }
    }
    
    render() { 
        return ( 
            <div className="frame">
                <div className="calculator">
                    <Output user={this.state.input} answer={this.state.result}></Output>
                    <br /><br />
                    <div className="keys">
                        <button className="button clear" onClick={this.handleClick}>C</button>
                        <button className="button operator" onClick={this.handleClick}>DEL</button>
                        <button className="button operator" onClick={this.handleClick}>%</button>
                        <button className="button operator" onClick={this.handleClick}>/</button>

                        <button className="button " onClick={this.handleClick}>7</button>
                        <button className="button " onClick={this.handleClick}>8</button>
                        <button className="button " onClick={this.handleClick}>9</button>
                        <button className="button operator" onClick={this.handleClick}>*</button>

                        <button className="button " onClick={this.handleClick}>4</button>
                        <button className="button " onClick={this.handleClick}>5</button>
                        <button className="button " onClick={this.handleClick}>6</button>
                        <button className="button operator" onClick={this.handleClick}>-</button>

                        <button className="button " onClick={this.handleClick}>1</button>
                        <button className="button " onClick={this.handleClick}>2</button>
                        <button className="button " onClick={this.handleClick}>3</button>
                        <button className="button operator" onClick={this.handleClick}>+</button>

                        <button className="button " onClick={this.handleClick}>0</button>
                        <button className="button " onClick={this.handleClick}>.</button>
                        <button className="button operator" onClick={this.handleClick}>=</button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Layout;