import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-end;
  margin-top:10px;
  flex-wrap:wrap;
  max-height: 100vh;
`;
const Formulario = styled.div`
  width: 300px;
  height: 500px;
  position: absolute;
  left:50px;
  top:10px;
  background-image: linear-gradient(135deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
  /* Degradê copiado he he he   */
  border-radius: 20px;
  display:flex;
  flex-direction: column;
  justify-content:top;
  align-items:center;
  margin-top:30px;
`;

const Titulo = styled.h1`
  font-size:30px;
  color:white;
  font-weight: bold;
  width:300px;
  text-align:center;
`;
const SubTitulo = styled.h3`
  font-size:18px;
  color:white;
  width: 80%;
`;
const Input = styled.input`
  background-color: rgb(0,0,0,.3);
  width:80%;
  height:25px;
  border:none;
  border-radius:5px;
  margin-bottom: 20px;
  margin-top:-10px;
  padding-left:10px;
  color:rgb(255,255,240);
  &::placeholder{
    color:rgb(255,255,240);
    font-size:14px;
  }
`;
  const Botao = styled.button`
    width: 80px;
    height: 30px;
    border-radius:10px;
    border:none;
  `;


class App extends React.Component {

  state = {

    postagens : [
        {
          nome:'paulinha',
          perfil:'https://picsum.photos/50/50',
          foto:'https://picsum.photos/200/150'
        },
        {
          nome:'Claudia',
          perfil:'https://picsum.photos/id/238/50/50',
          foto:'https://picsum.photos/id/239/200/150'
        },
        {
          nome:'Flavia',
          perfil:'surge',
          foto:'https://picsum.photos/id/215/200/150',
        }
      
    ], 

    novoNome: "",
    novoPerfil: "",
    novaPostagem:"",

  }

  adicionaPost = () =>{
    const novoPost = {
          nome: this.state.novoNome,
          perfil:this.state.novoPerfil,
          foto:this.state.novaPostagem,
    }
    
    const novasPostagens = [...this.state.postagens, novoPost];

    this.setState({postagens:novasPostagens});
    this.setState({novoNome:""});
    this.setState({novoPerfil:""});
    this.setState({novaPostagem:""});
  }

  onChangeInputNome=(event)=>{
    this.setState({novoNome:event.target.value})
  }
  onChangeFotoPerfil=(event)=>{
    this.setState({novoPerfil:event.target.value})
  }
  onChangeFotoPost=(event)=>{
    this.setState({novaPostagem:event.target.value})
  }


  render() {

    const listaDePostagens = this.state.postagens.map((item,i)=>{
      return <Post key = {i} nomeUsuario = {item.nome} fotoUsuario={item.perfil} fotoPost = {item.foto}/>})
    return (
      <MainContainer>
        {listaDePostagens}
        <Formulario>
          <Titulo>New Post</Titulo>
          <SubTitulo>Nome</SubTitulo>
          <Input placeholder='Digite seu nome' value={this.state.novoNome} onChange ={this.onChangeInputNome}/>
          <SubTitulo>Foto de Perfil</SubTitulo>
          <Input placeholder='Cole o Link para foto de perfil'value={this.state.novoPerfil} onChange ={this.onChangeFotoPerfil}/>
          <SubTitulo>Foto Postagem</SubTitulo>
          <Input placeholder='Cole o link para a postagem'value={this.state.novaPostagem} onChange ={this.onChangeFotoPost}/>
          <Botao onClick={this.adicionaPost}>Enviar</Botao>
        </Formulario>
      </MainContainer>
    );
  }
}

export default App;
