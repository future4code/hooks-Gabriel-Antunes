import React from "react";
import {Container, Header, SideBar,Logo,MainApp,Page, Playlists,NewPlaylist} from './styles';
import {GiMusicSpell} from 'react-icons/gi';
import CardPlaylist from "../CardPlaylist";
import axios from "axios";
import {url,headers} from '../constants/constants'
import HeaderMainApp from "../HeaderMainApp";


class Main extends React.Component{

    state={
        playlists:[],
        playlistInput:"",
    }

    onChangePlaylistInput =(event)=>{
        this.setState({playlistInput:event.target.value})
    }

    pressEnter = (e)=>{
        if(e.key === "Enter"){
            this.addNewPlaylist()
        }
    }
    getAllPlaylists=async()=>{
        try{
            const res = await axios.get(url,headers);this.setState({playlists:res.data.result.list})
        }catch(err){
            alert('Error to get playlists');console.log(err.response.data.message)
        }
    }

    componentDidMount(){
        this.getAllPlaylists()
    }
    
    deletePlaylist=async(id,name)=>{
        try{
            await axios.delete(`${url}/${id}`,headers);
            alert(`Playlist ${name} deleted successfully`);
            this.getAllPlaylists();
        }catch(err){
            alert(`error deleting the ${name} playlist. More information in the browser console.`);
            console.log(err.response.data.message);
            this.getAllPlaylists();
        }
    }

    addNewPlaylist=async()=>{
        const body={name:this.state.playlistInput.toUpperCase()};

        try{
            await axios.post(url,body,headers);
            alert(`Playlist ${body.name} successfully created.`);
            this.setState({playlistInput:""});
            this.getAllPlaylists()
        }catch(err){
            alert(err.response.data.message);
            this.setState({playlistInput:""});
            this.getAllPlaylists();
        }
    }

    play = (id) =>{console.log(id)}

    render(){
        const playlistsRender = this.state.playlists.map((item)=>{
            return (
            <CardPlaylist 
            key={item.id} 
            nome={item.name} 
            id={item.id} 
            onClickDelete={()=>this.deletePlaylist(item.id,item.name)} 
            onClickPlaylist={()=>(this.play(item.id))}
            />
        )})
        return(
            <Container>
                <Header>
                    <Logo>
                        <GiMusicSpell/>
                        <span>LabeFy</span>
                    </Logo>
                    <input placeholder="Search your favorite playlist"/>
                </Header>
                <Page>
                    <SideBar>
                        <Playlists>
                            {playlistsRender}
                        </Playlists>
                        <NewPlaylist>
                            <span>Create a new Playlist</span>
                            <input onKeyPress={this.pressEnter}value={this.state.playlistInput} onChange={this.onChangePlaylistInput}/>
                            <button onClick={this.addNewPlaylist}>Create</button>
                        </NewPlaylist>
                    </SideBar>
                    <MainApp>
                        <HeaderMainApp/>
                    </MainApp>
                </Page>
            </Container>
        )
}
}

export default Main