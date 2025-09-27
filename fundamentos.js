//1.
let idade;
idade = 30;
console.log(idade);

//2.
function soma(n1, n2) {
    return n1+n2;
}
let n1 = 1;
let n2 = 2;
let resultado = soma(n1,n2);
console.log(resultado);

//3.
let num = prompt("digite um número:");
let numR = parseInt(num);
let resultado;
if (numR % 2 === 0){
    resultado = "é par!";
} else {
    resultado = "é ímpar!";
}
console.log("seu número", resultado)

//4.
let n1 = parseInt(prompt("digite três números para uma média:")), n2 = parseInt(prompt()), n3 = parseInt(prompt());
let calc = ((n1 + n2 + n3) /3);
console.log("resultado é:", calc);

//5.
console.log("Olá Mundo!");


//6.
let i = 5
while (i >= 1) {
 console.log(i);
 i--;
}

//7.
function calcularProduto(a, b) {
  let resultado = a * b;
  debugger;
  return resultado;
}
// Para ver o debugger em ação, chame a função e abra as Ferramentas do Desenvolvedor no navegador.
let a = calcularProduto(5, 10);
console.log(a);
