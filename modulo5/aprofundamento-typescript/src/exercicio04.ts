type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//b) Criaria um script chamado de exercicio-4 que iria executar o comando: tsc exercicio-4.ts && node ./build/exercicio-4.js
//c) com a pasta 'src' o comando seria tsc ./src/exercicio-4.ts && node ./build/exercicio-4.js
//d) para transpilar multiplos arquivos, poderia criar um script assim: "tsc && node ./build"
