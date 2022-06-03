import React from "react";
import { Container } from "./styles";
import {MdDelete} from 'react-icons/md';


class CardPlaylist extends React.Component{
    render(){
        return(
            <Container>
                <p onClick={this.props.onClickPlaylist}>{this.props.nome}</p>
                <MdDelete onClick={this.props.onClickDelete}/>
            </Container>
        )
        
    }
}
export default CardPlaylist