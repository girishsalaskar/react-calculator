import React, { Component } from "react";
import OutputRow from "./outputrow";

class Output extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <div>
                <OutputRow value={this.props.answer} textSize={ {fontSize:'20px'} }></OutputRow>
                <OutputRow value={this.props.user} textSize={ {fontSize:'25px'} }></OutputRow>
            </div>
         );
    }
}
 
export default Output;