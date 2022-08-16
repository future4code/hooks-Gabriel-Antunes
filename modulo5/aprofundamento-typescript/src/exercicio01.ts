let minhaString:string="uma string"
// minhaString = 3

//A variavel não aceita number por ser do tipo string

let meuNumero:number | string = 5

//

enum corFavorita {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta",
} 

type person = {
    nome:string,
    idade:number,
    corFavorita:corFavorita
}

const pessoa1:person = {
    nome:'rafael',
    idade:12,
    corFavorita: corFavorita.LARANJA
}

const pessoa2:person = {
    nome:'maria',
    idade:14,
    corFavorita: corFavorita.VERMELHO
}

const pessoa3:person = {
    nome:'joao',
    idade:43,
    corFavorita:corFavorita.ANIL
}



