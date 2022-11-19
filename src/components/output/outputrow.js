import React, { Component } from "react";
import './outputrow.css';

class OutputRow extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <div>
                <input type="text" readOnly className="screen" value={this.props.value} style={this.props.textSize} />
            </div>
         );
    }
}
 
export default OutputRow;