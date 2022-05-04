import React from "react";

import {Container} from './styles';

class Final extends React.Component{

    render(){
        return(
            <Container >
              <p>Thank you for the answers</p>
              <p>{this.props.name}</p>
            </Container>
        )
    }
}

export default Final