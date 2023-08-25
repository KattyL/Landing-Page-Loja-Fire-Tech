function somaImpares() {
    let soma = 0;
  
    for (let i = 11; i < 30; i += 2) {
      soma += i;
    }
  
    return soma;
  }
  
  console.log("A soma dos números ímpares é: " + somaImpares());
  