// EXERCÍCIO 09 - FIND - PRODUTO
// Crie um array de objetos com nome e preço de quatro produtos.
// Utilize find() para localizar o produto chamado "Teclado".
// Mostre o produto encontrado.
//
// Escreva sua solução abaixo:

const preco = [
    {nome: "computador", preco: 4000 },
    {nome: "Teclado", preco: 350 },
    {nome: "Celular", preco: 2500 },
    {nome: "mouse", preco: 160 },
  ]
     

const produtoEncontrado = preco.find(item => item.nome === "Teclado");

console.log(produtoEncontrado);