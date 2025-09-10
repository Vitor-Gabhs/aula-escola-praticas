function buscarProduto(produtos, nomeProduto) {

  for (let i = 0; i < produtos.length; i++) {
  
    if (produtos[i].nome.toLowerCase() === nomeProduto.toLowerCase()) {
      return produtos[i];
    }
  }

  return null;
}


const produtos = [
  { nome: 'Notebook', preco: 2500 },
  { nome: 'Celular', preco: 1200 },
  { nome: 'Tablet', preco: 800 }
];

const produtoBuscado = buscarProduto(produtos, 'celular');
console.log(produtoBuscado);

const produtoNaoEncontrado = buscarProduto(produtos, 'Câmera');
console.log(produtoNaoEncontrado);
