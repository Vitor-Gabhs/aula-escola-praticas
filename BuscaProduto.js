function buscarProduto(listaProdutos, nomeBusca) {
  const nomeFormatado = nomeBusca.toLowerCase().trim();

  const produtoEncontrado = listaProdutos.find(produto =>
    produto.nome.toLowerCase().trim() === nomeFormatado
  );

  return produtoEncontrado || null;
}

const estoque = [
  { nome: "Smartphone", preco: 1500.00 },
  { nome: "Notebook", preco: 3200.50 },
  { nome: "Teclado Mecânico", preco: 450.99 },
];

const nomeBusca1 = "notebook";
const produto1 = buscarProduto(estoque, nomeBusca1);

console.log(`\n### Buscando: "${nomeBusca1}" ###`);
if (produto1) {
  console.log(`Produto encontrado: ${produto1.nome} (R$ ${produto1.preco.toFixed(2)})`);
} else {
  console.log(`Produto "${nomeBusca1}" não encontrado.`);
}

const nomeBusca2 = "Webcam";
const produto2 = buscarProduto(estoque, nomeBusca2);

console.log(`\n### Buscando: "${nomeBusca2}" ###`);
if (produto2) {
  console.log(`Produto encontrado: ${produto2.nome} (R$ ${produto2.preco.toFixed(2)})`);
} else {
  console.log(`Produto "${nomeBusca2}" não encontrado.`);
}
