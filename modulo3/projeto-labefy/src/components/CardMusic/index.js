import React from "react";
import {Container} from './styles';
import {MdDelete} from 'react-icons/md';

class CardMusic extends React.Component{
    state={
        visibilityTrash:false,
    }
    toggleVisibility = ()=>{
        this.setState({visibilityTrash:!this.state.visibilityTrash})
    }
    render(){
        return(
            <Container onClick={this.toggleVisibility} visibility={this.state.visibilityTrash}>
                <span>{this.props.name} - {this.props.artist}</span>
                <audio src={this.props.url} controls/>
                <MdDelete onClick={()=>this.props.deletemusic(this.props.id)}/>
            </Container>
        )
    }
}

export default CardMusic