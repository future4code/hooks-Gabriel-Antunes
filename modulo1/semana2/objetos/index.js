// Interpretação 01
// console:
// "Matheus Nachtergaele"
// "Virginia Cavendish"
// canal: "Globo", horario: "14h"

// Interpretação 02
// a)
// {nome:"Juca", idade:3, raça:"SRD"}
// {nome:"Juba", idade:3, raça:"SRD"}
// {nome:"Jubo", idade:3, raça:"SRD"}

// b) o ... faz o spread das informações do objeto apontado.

// Interpretação 03
// Não consegui chegar a nenhuma conclusão.

// Escrita de código 01

const pessoa = {
    nome: 'Gabriel',
    apelidos: ['tunico', 'Antunes', 'Nego']
}

const minhaFuncao = (objeto) =>{
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
}
minhaFuncao(pessoa)

const novaPessoa = {
    ...pessoa,
    apelidos:['James','Casado','Indio']
}
minhaFuncao(novaPessoa)

// Escrita de cósigo 02

const primeiraPessoaExercicio02 = {
    nome: 'Gabriel',
    idade: 27,
    profissao: 'orçamentista'
}

const segundaPessoaExercicio02 = {
    nome: 'Eduardo',
    idade: 34,
    profissao: 'Projetista'
}

const funcaoExercicio02 = (objeto) =>{
    const arrayExercicio02 = [objeto.nome,objeto.nome.length,objeto.idade,objeto.profissao,objeto.profissao.length]
    console.log(arrayExercicio02)
}
funcaoExercicio02(primeiraPessoaExercicio02)
funcaoExercicio02(segundaPessoaExercicio02)

// Escrita de código 03
const carrinho =[]

const fruta01 = {
    nome: 'maça',
    disponibilidade: true
}
const fruta02 = {
    ...fruta01,
    nome: 'banana'
}
const fruta03 = {
    ...fruta01,
    nome: 'uva',
    disponibilidade: false
}

const funcaoExercicio03 = (objeto) =>{
    carrinho.push(objeto)
}
funcaoExercicio03(fruta01)
funcaoExercicio03(fruta02)
funcaoExercicio03(fruta03)
console.log(carrinho)

// Desafio 03
const funcaoDesafio03 = (fruta) =>{

    console.log(!fruta.disponibilidade)
}
funcaoDesafio03(carrinho[1])
// Desafio 01

const funcaoDesafio01 = () =>{
    const nomeUsuario = prompt('Digite seu nome')
    const idadeUsuario = Number(prompt('Digite sua idade'))
    const profissaoUsuario = prompt('Digite sua profissão')

    const objeto = {
        nome: nomeUsuario,
        idade: idadeUsuario,
        profissao: profissaoUsuario
    }
console.log(objeto)
console.log(typeof objeto)
}

funcaoDesafio01()

// Desafio02


const filme01 = {
    nome: 'Bastardos Inglórios',
    anoLancamento: 2013
}
const filme02 = {
    nome: 'Django Livre',
    anoLancamento: 2012
}

const funcaoDesafio02 = (objeto1, objeto2) =>{
    console.log(`O ${objeto1.nome} foi lançado antes do ${objeto2.nome}?`,objeto1.anoLancamento < objeto2.anoLancamento)
    console.log(`O ${objeto1.nome} foi lançado no mesmo ano do ${objeto2.nome}?`,objeto1.anoLancamento === objeto2.anoLancamento)
}

funcaoDesafio02(filme01,filme02)

// Desafio 03 na linha 82
