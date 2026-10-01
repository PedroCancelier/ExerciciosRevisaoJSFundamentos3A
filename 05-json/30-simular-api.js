// EXERCÍCIO 30 - SIMULANDO RESPOSTA DE API
// Crie um objeto resposta com as propriedades sucesso, mensagem e dados.
// A propriedade dados deve conter um array com dois produtos.
// Converta a resposta para JSON e depois converta novamente para objeto.
// Mostre a mensagem e os produtos recebidos.
//
// Escreva sua solução abaixo:

let resposta = {
    sucesso: true,
    mensagem: "Produtos recebidos com sucesso",
    dados: [
        {
            nome: "Notebook",
            preco: 3500
        },
        {
            nome: "Mouse",
            preco: 100
        }
    ]
};

let respostaJSON = JSON.stringify(resposta);

let respostaObjeto = JSON.parse(respostaJSON);

console.log(respostaObjeto.mensagem);
console.log(respostaObjeto.dados);
