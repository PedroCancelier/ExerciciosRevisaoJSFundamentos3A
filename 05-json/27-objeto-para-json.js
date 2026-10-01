// EXERCÍCIO 27 - OBJETO PARA JSON
// Crie um objeto pedido com numero, cliente e valorTotal.
// Converta o objeto para JSON utilizando JSON.stringify()
// e mostre o resultado.
//
// Escreva sua solução abaixo:

let pedido = {
    numero: 1,
    cliente: "Pedro",
    valorTotal: 150
};

let pedidoJSON = JSON.stringify(pedido);

console.log(pedidoJSON);