/*
INTERPRETAÇÃO 01
a. undefined
b. null
c. 11
d. 0
e. 3,19,5,6,7,8,9,10,11,12,13
f. 9

INTERPRETAÇÃO 02

SUBI NUM ONIBUS EM MIRROCOS
*/
//ESCRITA 01

/* let emailDoUsuario = prompt('Insira seu email!')
let nomeDoUsuario = prompt('Insira seu nome')

let frase=`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o),${nomeDoUsuario}!`
console.log(frase)

//ESCRITA 02

let comidasFavoritas=['churrasco','pizza','sushi','xis', 'pão de queijo']
//a.
console.log('a.',comidasFavoritas)

//b.
console.log('Essas são as minhas comidas preferidas: ')
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

//c.
let comidaUsuario = prompt('Digite sua comida preferida!')

comidasFavoritas [1]=comidaUsuario

console.log(comidasFavoritas) */

//ESCRITA 03
/*let listaDeTarefas = []

let tarefa1 = prompt('Digite uma tarefa do seu dia-a-dia!')
let tarefa2 = prompt('Digite outra tarefa do seu dia-a-dia!')
let tarefa3 = prompt('Digite mais uma tarefa do seu dia-a-dia!')

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

let itemRealizado = prompt('Digite o indice da tarefa realizada! (0,1 ou2)')

listaDeTarefas.splice(itemRealizado,1)

console.log(listaDeTarefas)

*/
//DESAFIO 01
/*
let fraseArr = prompt('digite uma frase')

let arrFrase = fraseArr.split(' ')
console.log(arrFrase)*/

//DESAFIO 02

let arr2 = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

let indiceAbacaxi = arr2.findIndex("Abacaxi")
console.log(indiceAbacaxi, arr2.length)