function calcularPrecoFinal(produto) {
  const desconto = produto.desconto ?? 0;
  const precoFinal = produto.preco - (produto.preco * desconto / 100);

  // 1. Nova linha adicionada para o Preço inicial
  console.log(`Preço inicial de ${produto.nome}: R$ ${produto.preco.toFixed(2)}`);
  
  // 2. Linha original do Preço final
  console.log(`Preço final de ${produto.nome}: R$ ${precoFinal.toFixed(2)}`);
}

// Exemplo de uso
const produto1 = {
  nome: "Fone de ouvido",
  preco: 200,
  desconto: 25 // 3. Valor do desconto alterado de 15 para 25
};

calcularPrecoFinal(produto1);
