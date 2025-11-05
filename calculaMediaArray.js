function calcularMediaArray(notas) {
  let soma = 0;
  for (le t nota of notas) {
    soma += nota;
  }
  return soma / notas.length;
}

const notas = [10, 9, 8];
const media = calcularMediaArray(notas);
console.log(`A média das notas é: ${media.toFixed(2)}`);
