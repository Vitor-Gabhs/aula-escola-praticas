let avaliacao = parseFloat(prompt("insira a nota:")); // Ex. de nota pode ter casa decimal assim 0.00 - não use vírgula!

if (avaliacao >= 6) { //  Incluir a nota de aprovação
  console.log("Você está aprovado. Parabéns!");
} else {
  console.log("Infelizmente você foi reprovado."); 
  // Incluir msg da última condição
}
