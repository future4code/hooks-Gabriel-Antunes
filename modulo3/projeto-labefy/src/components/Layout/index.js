import React from "react";
import Main from "../Main";
import {Container} from './styles';

class Layout extends React.Component{
    render(){
        return(
            <Container>
                <Main/>
            </Container>
        )
    }
}

export default Layout