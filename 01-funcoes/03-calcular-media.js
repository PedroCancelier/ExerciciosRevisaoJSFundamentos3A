// EXERCÍCIO 03 - CALCULAR MÉDIA
// Crie uma função que receba quatro notas, calcule e retorne a média.
// Mostre o resultado no console.
//
// Escreva sua solução abaixo:

function calcularMedia (nota1, nota2, nota3,nota4){
    return (nota1 + nota2 + nota3 + nota4)/4
}

const resultado = calcularMedia (10, 7, 5, 5);
console.log(`${resultado}`)