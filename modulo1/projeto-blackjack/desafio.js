/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
     
   if (confirm('Bem vindo ao jogo de Blackjack! Quer iniciar uma nova rodada?')){
      
   let calculaValor = (arr) => {
         return arr.reduce((inicio, item)=> inicio + item.valor, 0)
   } 
   let imprimeCartas = (arr) => {
         return (arr.map(item => item.texto)).join([separador = ' '])
   }

   let cartasJogador = [comprarCarta(), comprarCarta()]
   let cartasComp = [comprarCarta(), comprarCarta()]
   
   let testeAAJogador = calculaValor(cartasJogador)
   let testeAAComp = calculaValor(cartasComp)

   while (testeAAJogador === 22){
      cartasJogador = [comprarCarta(),comprarCarta()]
      testeAAJogador = calculaValor(cartasJogador)
   }
   while (testeAAComp === 22){
      cartasComp = [comprarCarta(),comprarCarta()]
      testeAAComp = calculaValor(cartasComp)
   }   
    
 
   let comprarMaisCarta = 0;
   let pontosJogador = calculaValor(cartasJogador);
   
   for(;;){

      if (pontosJogador > 20 || comprarMaisCarta === false){
         break
      }    
      comprarMaisCarta = confirm(`Suas cartas são ${imprimeCartas(cartasJogador)}. A carta revelada pelo computador é ${cartasComp[0].texto}. Deseja comprar mais uma carta?`) 

      
      if(comprarMaisCarta === true){

         cartasJogador.push(comprarCarta())
         pontosJogador = calculaValor(cartasJogador)
         console.log(cartasJogador)
             
      }
       
   }
   pontosComp = calculaValor(cartasComp)
   
   for (;;){

      if(pontosComp > pontosJogador || pontosComp > 16 || pontosJogador > 21 || (pontosJogador === 21 && cartasJogador.length === 2)){
         break
      }     

      else {
         cartasComp.push(comprarCarta())
         pontosComp = calculaValor(cartasComp)
         
      }
   }

   console.log(pontosJogador, pontosComp)
   
   let resultado = ""
   if ((calculaValor(cartasJogador)) > calculaValor(cartasComp) && (calculaValor(cartasJogador)) < 22 || (calculaValor(cartasComp)) > 21){
      resultado = "O usuário ganhou!"
   }if ((calculaValor(cartasJogador)) < calculaValor(cartasComp) && (calculaValor(cartasComp)) < 22 || (calculaValor(cartasJogador)>21)){
      resultado = "O computador ganhou!"
   }if ((calculaValor(cartasJogador)) === calculaValor(cartasComp) && (calculaValor(cartasComp)<22)){
      resultado = "O jogo empatou" 
   }
   alert(`Usuário - cartas: ${imprimeCartas(cartasJogador)} - Pontuação: ${calculaValor(cartasJogador)}\nComputador - cartas: ${imprimeCartas(cartasComp)} - Pontuação: ${calculaValor(cartasComp)}\n${resultado}`)

   }else{
   
   alert(`O jogo acabou!`)}
     
   
   


// duas formas de separar os valores dos objetos "carta" dentro das arrays "jogador". map cria uma array usando só os itens "valor" e o reduce soma estes itens. 
// let valorCartas = cartasUsuario.map(item => item.valor).reduce((prev, curr) => prev + curr,0)
// let valorCartas2 = cartasUsuario.reduce((prev, cartasUsuario) => prev + cartasUsuario.valor, 0)
