import React from "react";
import { Btn } from "./styles";

class Button extends React.Component{
    render(){
        return(
            <Btn onClick={this.props.onClick}>
                {this.props.content}
            </Btn>
        )
        
    }
}
export default Button