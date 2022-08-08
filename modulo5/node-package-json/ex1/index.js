const nome = process.argv[2];
const idade = process.argv[3];
const idadeFutura = Number(idade) + Number("7")

console.log(` Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeFutura}.`)