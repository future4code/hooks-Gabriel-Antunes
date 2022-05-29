import React from "react";
import {Container} from './styles';
import {MdOutlinePlaylistAdd} from 'react-icons/md';


class HeaderMainApp extends React.Component{
    render(){
        return(
            <Container>
                <h2>{this.props.name}</h2>
                <span>{this.props.quantity}</span>
                <div>
                    <p>New music to plalyst</p> 
                    <input 
                    placeholder={'Music Name'} 
                    value={this.props.musicname} 
                    onChange={this.props.changemusicname}/>
                    <input 
                    placeholder={'Artist'} 
                    value={this.props.artist} 
                    onChange={this.props.changeartist}/>
                    <input 
                    placeholder={'URL'} 
                    value={this.props.urlmusic} 
                    onChange={this.props.changeurlmusic}/>
                    <button onClick={this.props.clickaddmusic}>
                        <span>Add</span>
                        <MdOutlinePlaylistAdd/>
                    </button>
                    </div>
                
            </Container>
        )
    }
}
export default HeaderMainApp