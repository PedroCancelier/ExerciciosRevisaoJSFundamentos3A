// EXERCÍCIO 01 - CALCULAR DESCONTO
// Crie uma função chamada calcularDesconto que receba o preço de um produto
// e a porcentagem de desconto. A função deve retornar o preço final.
// Teste a função com um produto de R$ 200 e desconto de 10%.
// 
// Saída esperada: Preço final: R$ 180
//
// Escreva sua solução abaixo:





function desconto (preço, desconto ) {
    return preço - (preço * (desconto/100));
    
}

const resultado = desconto(200,10);
console.log(`Preço final: ${resultado}`)