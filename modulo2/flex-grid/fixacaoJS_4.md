function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let numeroX = 0;
  for(let i=0;i<arrayDeNumeros.length;i++){
    if (arrayDeNumeros[i] === numeroEscolhido){
      numeroX++
    }
  }
  if (numeroX === 0){
    return  "Número não encontrado"
  }else{
    return `O número ${numeroEscolhido} aparece ${numeroX}x`
  }
}