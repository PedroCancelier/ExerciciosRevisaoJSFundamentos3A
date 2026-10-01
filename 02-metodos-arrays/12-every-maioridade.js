// EXERCÍCIO 12 - EVERY - MAIORIDADE
// Considere as idades: [19, 22, 18, 25, 30].
// Utilize every() para verificar se todas as pessoas são maiores de idade.
// Mostre true ou false.
//
// Escreva sua solução abaixo:

const idades = [19, 22, 18, 25, 30]

const maioridade = idades.every((maior)=> maior >= 18 )
console.log(maioridade)