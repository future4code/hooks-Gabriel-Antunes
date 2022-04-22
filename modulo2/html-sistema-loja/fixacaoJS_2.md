function calculaPrecoTotal(quantidade) {
  let custoMaca=0
  
  if(quantidade<12){
    custoMaca=1.3 
  }else{
    custoMaca=1
  }
  return (quantidade*custoMaca)
} 