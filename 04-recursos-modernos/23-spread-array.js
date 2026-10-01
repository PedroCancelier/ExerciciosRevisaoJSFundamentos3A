// EXERCÍCIO 23 - SPREAD EM ARRAY
// Crie dois arrays de tecnologias: um de Front-End e outro de Back-End.
// Utilize Spread para criar um terceiro array contendo todas as tecnologias.
//
// Escreva sua solução abaixo:

let frontEnd = ["HTML", "CSS", "JavaScript"];

let backEnd = ["Node.js", "Java", "Python"];

let tecnologias = [...frontEnd, ...backEnd];

console.log(tecnologias);