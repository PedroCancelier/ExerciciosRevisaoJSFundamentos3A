// EXERCÍCIO 16 - ALTERANDO PROPRIEDADE
// Crie um objeto produto com nome, preco e estoque.
// Altere o preço e diminua uma unidade do estoque.
// Mostre o objeto antes e depois das alterações.
//
// Escreva sua solução abaixo:

const produto = {
    nome: "teclado",
    preco: 200,
    estoque: 27
}

console.log(produto)

produto.preco = 150
produto.estoque = 26

console.log(produto);