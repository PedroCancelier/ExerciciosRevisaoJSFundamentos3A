// EXERCÍCIO 28 - JSON PARA OBJETO
// Considere a String JSON: '{"nome":"Notebook","preco":3500,"estoque":8}'.
// Converta-a em objeto utilizando JSON.parse() e mostre apenas o nome do produto.
//
// Escreva sua solução abaixo:

let produtoJSON = '{"nome":"Notebook","preco":3500,"estoque":8}';

let produto = JSON.parse(produtoJSON);

console.log(produto.nome);