import React from "react";

import Title from './styles'

class InputName extends React.Component{
    render(){
        return(
            <Title>{this.props.name}</Title>
        )
    }
}

export default InputName