// EXERCÍCIO 11 - SOME - ESTOQUE
// Considere as quantidades em estoque: [5, 3, 0, 8, 2].
// Utilize some() para verificar se existe algum produto sem estoque.
// Mostre true ou false.
//
// Escreva sua solução abaixo:

const estoque = [
    {nome:"mouse", preco : "5"},
    {nome:"teclado", preco : "3"},
    {nome:"cabo", preco : "0"},
    {nome:"celular", preco : "8"},
    {nome:"fone", preco : "2"}
]

const coferirEstoque = estoque.some((quantidade) => quantidade === 0);
console.log(coferirEstoque)