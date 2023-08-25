function somaPares() {
    let soma = 0;
  
    for (let i = 12; i < 30; i += 2) {
      soma += i;
    }
  
    return soma;
  }
  
  console.log("A soma dos números pares é: " + somaPares());
  