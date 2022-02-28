// Interpretação 01
// a) O código verifica se o resto da divisão do numero por 2 é igual a 0
// b)pares 
// c)ímpares

// Interpretação 02
// a) definir o preço de uma compra de acordo com a fruta selecionada
// b) O preço da fruta Maçã é R$ 2.25
// c) O preço da fruta Pêra é R$ 5

// Interpretação 03
// a)está recebendo uma mensagem do usuário e transformando em número.Interpretação
// b) 10: "Esse número passou no teste"  -10: nada seria impresso 
//c) daria erro pois a variavel mensagem é  local e não pode ser acessada fora do bloco

//Exercício de escrita 01:

const idade = Number(prompt('Qual sua idade?'))

const podeDirigir=(idade) =>{
    if (idade >=18){
        console.log('Você pode dirigir.')
    }
    else {
        console.log('Você não pode dirigir.')
    }
}
podeDirigir(idade)

//Exercício de escrita 02:

let turno = prompt('Em que turno você estuda? digitar M (matutino) ou V (Vespertino) ou N (Noturno').toUpperCase();


const saudacao = (resposta) =>{
    if (resposta === 'M'){
        console.log('Bom dia!')
    }
    else if (resposta === 'V'){
        console.log('Boa tarde!')
    }
    else if (resposta === 'N'){
        console.log('Boa noite!')
    }
    else {console.log('Digite um turno válido')}
}

saudacao(turno)

//Exercício de escrita 03:
let turno03 = prompt('Em que turno você estuda? digitar M (matutino) ou V (Vespertino) ou N (Noturno)').toUpperCase();

const saudacao03 = (resposta) =>{
        switch (resposta){
            case 'M':
                console.log('Bom dia!')
                break
            case 'V':
                console.log('Boa tarde!')
                break
            case 'N':
                console.log('Boa noite!')
                break
            default:
                console.log('Digite um turno válido')
                break
        }
    }
          
    saudacao03(turno03)

// //Exercício de escrita 04:

const generoFilme = prompt('Qual o gênero do filme?').toUpperCase()
const valorTicket = Number(prompt('Qual o valor do ingresso'))

const assistirFilme = (genero, valor) =>{
    if (genero === 'FANTASIA' && valor < 15){
        console.log('Bom filme!')
    }
    else {console.log('Escolha outro filme :(')}
}

assistirFilme(generoFilme,valorTicket)

// //DESAFIO 01

const generoFilme01 = prompt('Qual o gênero do filme?').toUpperCase()
const valorTicket01 = Number(prompt('Qual o valor do ingresso'))

const assistirFilme01 = (genero, valor) =>{
    if (genero === 'FANTASIA' && valor < 15){

        const lanche = prompt('Qual lanchinho você vai comprar?')

        console.log('Bom filme!')
        console.log(`Aproveite seu ${lanche}`)
    }
    else {console.log('Escolha outro filme :(')}
}

assistirFilme01(generoFilme01,valorTicket01)
    
//DESAFIO 02

const nome = prompt('Digite seu nome!')
const tipoDeJogo = prompt('Digite "IN" para jogo internacional e "DO" para jogo doméstico.').toUpperCase()
const etapaJogo = prompt('Digite SF para semi-final, DT para decisão de terceiro lugar e FI para final').toUpperCase()
const categoriaIngressos = Number(prompt('Qual categoria deseja? Digite 1, 2, 3 ou 4'))
const quantidadeIngressos = Number(prompt('Quantos ingressos deseja?'))
const cotacaoDolar = 4.1

let tipoDeCompeticao 
let valorIngresso 
let faseDaCompeticao 

if (etapaJogo === 'SF'){
    faseDaCompeticao = 'Semi-Final'
}else if (etapaJogo === 'DT'){
    faseDaCompeticao = 'Decisão do terceiro lugar'
}else if (etapaJogo === 'FI'){
    faseDaCompeticao = 'Final'
}

if (tipoDeJogo === 'IN' || tipoDeJogo === 'DO'){
    'ok'
}else {
    console.log('Digite um tipo de competição válida')
}

if (quantidadeIngressos <= 0){
    console.log('Coloque uma quantidade de ingressos válida!')
}


switch (etapaJogo){
    case 'SF':
        if (categoriaIngressos === 1){
            valorIngresso = 1320
        }else if (categoriaIngressos === 2){
            valorIngresso = 880
        }else if (categoriaIngressos === 3){
            valorIngresso = 550
        }else if (categoriaIngressos === 4){
            valorIngresso = 220
        } else {console.log('Digite uma categoria válida!')}
        break

    case 'DT':
        if (categoriaIngressos === 1){
            valorIngresso = 660
        }else if (categoriaIngressos === 2){
            valorIngresso = 440
        }else if (categoriaIngressos === 3){
            valorIngresso = 330
        }else if (categoriaIngressos === 4){
            valorIngresso = 170
        } else {console.log('Digite uma categoria válida!')}
        break

    case 'FI':
        if (categoriaIngressos === 1){
                valorIngresso = 1980
        }else if (categoriaIngressos === 2){
                valorIngresso = 1320
        }else if (categoriaIngressos === 3){
                valorIngresso = 880
        }else if (categoriaIngressos === 4){
                valorIngresso = 330
        } else {console.log('Digite uma categoria válida!')}
        break
    default :
    console.log('Digite uma etapa válida')
}

if (tipoDeJogo === 'IN' && categoriaIngressos >0 && categoriaIngressos <=4 && (etapaJogo === 'FI' || etapaJogo === 'DT' || etapaJogo === 'SF') && quantidadeIngressos>0){
    valorIngresso = (valorIngresso / cotacaoDolar).toFixed(2)
    valorTotal = (valorIngresso*quantidadeIngressos).toFixed(2)
    tipoDeCompeticao = 'Internacional'

    console.log(`---Dados da compra---\nNome do cliente:  ${nome}\nTipo do jogo:  ${tipoDeCompeticao}\nEtapa do jogo:  ${faseDaCompeticao}\nCategoria:  ${categoriaIngressos}\nQuantidade de Ingressos:  ${quantidadeIngressos} ingressos\n---Valores---\nValor do ingresso:  U$ ${valorIngresso}\nValor total:  U$ ${valorTotal}`)

}else if (tipoDeJogo === 'DO' && categoriaIngressos >0 && categoriaIngressos <=4 && (etapaJogo === 'FI' || etapaJogo === 'DT' || etapaJogo === 'SF') && quantidadeIngressos >0){
    tipoDeCompeticao = 'Nacional'
    valorTotal = valorIngresso*quantidadeIngressos

    console.log(`---Dados da compra---\nNome do cliente:  ${nome}\nTipo do jogo:  ${tipoDeCompeticao}\nEtapa do jogo:  ${faseDaCompeticao}\nCategoria:  ${categoriaIngressos}\nQuantidade de Ingressos:  ${quantidadeIngressos} ingressos\n---Valores---\nValor do ingresso:  R$ ${valorIngresso}\nValor total:  R$ ${valorTotal}`)
  
}else {console.log('Corrija os erros acima!')}





