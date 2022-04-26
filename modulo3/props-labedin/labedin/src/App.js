import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E03AQHqxZLsYUrmKA/profile-displayphoto-shrink_200_200/0/1647285533590?e=1655942400&v=beta&t=tbbhAQw8zA1MDxBdrjqfHRnS5n3slTek66J-grGkjG8" 
          nome="Gabriel Antunes" 
          descricao="Oi, eu sou Gabriel, aluno do curso de web full stack noturno na labenu, e estou com medo do styled components."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons.flaticon.com/png/512/2985/premium/2985149.png?token=exp=1650653094~hmac=f07d6f0a3c5fb9f62cf942b8d487c69f" 
          texto="Ver mais"
        />
      </div>
      <CardPequeno 
        imagem="https://cdn-icons.flaticon.com/png/512/3178/premium/3178158.png?token=exp=1650657674~hmac=975241543d965b48ddd577214d7a7a0c"
        tipoEndereco="E-mail"
        endereco="loren@hotmail.com"
      />
      <CardPequeno 
        imagem="https://cdn-icons-png.flaticon.com/512/1239/1239525.png"
        tipoEndereco="Endereço"
        endereco="Rua Loren nº 43"
      />
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://cdn-icons-png.flaticon.com/512/5266/5266264.png" 
          nome="Loren" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
