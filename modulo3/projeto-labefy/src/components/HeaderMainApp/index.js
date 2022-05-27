import React from "react";
import {Container} from './styles';
import {MdOutlinePlaylistAdd} from 'react-icons/md';


class HeaderMainApp extends React.Component{
    render(){
        return(
            <Container>
                <h2>João</h2>
                <span>Contador de musicas</span>
                <div>
                    <MdOutlinePlaylistAdd/>
                    <p>Add music to plalyst</p>
                   
                </div>
            </Container>
        )
    }
}
export default HeaderMainApp