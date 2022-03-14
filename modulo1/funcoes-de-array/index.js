//Interpretação 
//1) vai ser impresso o objeto de cada indice, o indice e o array inteiro.
//2) "Amanda Rangel", "Laís Petra","Leticia chijo" 
//3)  { nome: "Amanda Rangel", apelido: "Mandi" }, { nome: "Laís Petra", apelido: "Laura" }

//Escrita de código

//1 
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//a)
const nomes = pets.map((item)=>{
    return item.nome
})
console.log(nomes)

//b)
const salsichas = pets.filter((item)=>{
    return item.raca === "Salsicha"
})
console.log(salsichas)

//c)
const filtroPoodle = pets.filter((item)=>{
    return item.raca === "Poodle"
})
const promo = filtroPoodle.map((item)=>{
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
})

console.log(promo)


//Escrita 02
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a)
 const nomesProdutos = produtos.map((item)=>{
     return item.nome
 })
 console.log(nomesProdutos)

 //b)
const novosPrecos = produtos.map((item)=>{
    return {nome: item.nome, preco: (item.preco)*0.95}
})
console.log(novosPrecos)

//c)
const bebidas = produtos.filter((item)=>{
    return item.categoria === "Bebidas"
})
console.log(bebidas)

//d)
const ype = produtos.filter((item)=>{
    
    return item.nome.includes("Ypê")
})
console.log(ype)

//e)
const propaganda = ype.map((item)=>{
    return `Compre ${item.nome} por ${item.preco}`
})
console.log(propaganda)


//desafio
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 //a)
 const nomesPokemons = pokemons.map((item)=>{
     return item.nome
     
})
 nomesPokemons.sort()
 console.log(nomesPokemons)

 //b)

 const tipos = pokemons.map((item)=>{
     return item.tipo
 })

//c)

let tiposUnicos = []

const filtroUnico = tipos.filter((item)=>{

    if (tiposUnicos.includes(item) === false){
        tiposUnicos.push(item)
    }})
console.log(tiposUnicos)