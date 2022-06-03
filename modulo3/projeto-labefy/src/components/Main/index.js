import React from "react";
import {Container, Header, SideBar,Logo,MainApp,Page, Playlists,NewPlaylist, MusicsList} from './styles';
import {GiMusicSpell} from 'react-icons/gi';
import CardPlaylist from "../CardPlaylist";
import axios from "axios";
import {url,headers} from '../constants/constants'
import HeaderMainApp from "../HeaderMainApp";
import CardMusic from "../CardMusic";


class Main extends React.Component{

    state={
        playlists:[],
        playlistInput:"",
        namePlaylistSelected:"",
        idPlaylistSelected:"",
        musicsOnPlaylist:[],
        nameMusicAdd:"",
        artisMusicAdd:"",
        urlMusicAdd:"",
    }

    onChangeMusicName=(event)=>{
        this.setState({nameMusicAdd:event.target.value})
    }
    onChangeArtist=(event)=>{
        this.setState({artisMusicAdd:event.target.value})
    }
    onChangeUrlMusic=(event)=>{
        this.setState({urlMusicAdd:event.target.value})
    }
    onChangePlaylistInput =(event)=>{
        this.setState({playlistInput:event.target.value})
    }

    onClickAddMusic=async()=>{
       const body = {
            "name":this.state.nameMusicAdd,
            "artist":this.state.artisMusicAdd,
            "url":this.state.urlMusicAdd
        }
        try{
        await axios.post(`${url}/${this.state.idPlaylistSelected}/tracks`,body,headers);
        this.setState({nameMusicAdd:""});
        this.setState({artisMusicAdd:""});
        this.setState({urlMusicAdd:""});
        }catch(err){
            alert(err.response.data.message);
            console.log(err.response.data)
        }
        this.onSelectPlaylist(this.state.idPlaylistSelected,this.state.namePlaylistSelected)
        }

    getPlaylistTracks = ()=>{
        console.log(axios.get(`${url}/${this.state.idPlaylistSelected}/tracks`,headers))
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

    onSelectPlaylist = async(id,name) =>{
        this.setState({namePlaylistSelected:name});
        this.setState({idPlaylistSelected:id});
        try {        
        const res = await axios.get(`${url}/${id}/tracks`,headers);
        this.setState({musicsOnPlaylist:res.data.result.tracks})
    }catch(err){
        alert(err.response.data.message);
        console.log(err.data)
    }
    }
    deleteMusic=async(id)=>{
        try{
            await axios.delete(`${url}/${this.state.idPlaylistSelected}/tracks/${id}`,headers)
            this.onSelectPlaylist(this.state.idPlaylistSelected,this.state.namePlaylistSelected)
        }catch(err){
            alert(err.response.data.message)
        }
    }

    render(){
        const playlistsRender = this.state.playlists.map((item)=>{
            return (
            <CardPlaylist 
            key={item.id} 
            nome={item.name} 
            id={item.id} 
            onClickDelete={()=>this.deletePlaylist(item.id,item.name)} 
            onClickPlaylist={()=>(this.onSelectPlaylist(item.id,item.name))}
            />
        )})
        const musicsOnPlatlist = this.state.musicsOnPlaylist.map((item)=>{
            return <CardMusic key={item.id} id={item.id} name={item.name} url={item.url} artist={item.artist} deletemusic={this.deleteMusic}/>
        })
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
                        <HeaderMainApp 
                        name={this.state.namePlaylistSelected}
                        musicname={this.state.nameMusicAdd}
                        changemusicname={this.onChangeMusicName}
                        artist={this.state.artisMusicAdd}
                        changeartist={this.onChangeArtist}
                        urlmusic={this.state.urlMusicAdd}
                        changeurlmusic={this.onChangeUrlMusic}
                        clickaddmusic={this.onClickAddMusic}
                        />
                        <MusicsList>
                            {musicsOnPlatlist}
                        </MusicsList>
                    </MainApp>
                </Page>
            </Container>
        )
}
}

export default Main