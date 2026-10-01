// EXERCÍCIO 26 - PARÂMETRO PADRÃO
// Crie uma função saudacao que receba nome e periodo.
// O parâmetro periodo deve ter o valor padrão "dia".
// Teste a função informando e omitindo o período.
//
// Escreva sua solução abaixo:

function saudacao(nome, periodo = "dia") {
    console.log(`Bom ${periodo}, ${nome}!`);
}

saudacao("Pedro", "dia");
saudacao("Pedro");