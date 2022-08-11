//a entrada desta função é um array de números e a saída um objeto

function obterEstatisticas(numeros:number[]) {

    const numerosOrdenados:number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }
    type estatisticasTypes = {
        maior:number,
        menor:number,
        media:number
    }
    const estatisticas: estatisticasTypes = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
const numerosTeste = [1,2,3,4,5,6,8,9,45]
console.log(obterEstatisticas(numerosTeste))

type amostra = {
    numeros:number[],
    obterEstatisticas:any
}