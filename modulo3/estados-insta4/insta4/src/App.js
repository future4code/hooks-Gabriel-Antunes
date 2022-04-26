import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
         <Post
          nomeUsuario={'Claudia'}
          fotoUsuario={'https://picsum.photos/id/238/50/50'}
          fotoPost={'https://picsum.photos/id/239/200/150'}
        />
         <Post
          nomeUsuario={'Flavia'}
          fotoUsuario={'https://picsum.photos/id/222/50/50'}
          fotoPost={'https://picsum.photos/id/215/200/150'}
        />
      </MainContainer>
    );
  }
}

export default App;
