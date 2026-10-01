// EXERCÍCIO 21 - DESESTRUTURAÇÃO DE OBJETO
// Crie um objeto curso com nome, cargaHoraria e modalidade.
// Utilize desestruturação para criar variáveis com essas propriedades.
// Mostre as variáveis no console.
//
// Escreva sua solução abaixo:

const curso = { Curso: "Desenvolvimento de sistemas",cargaHoraria: "45 horas",modalidade: "Ead"}

const{Curso, cargaHoraria,modalidade} = curso

console.log(Curso, cargaHoraria, modalidade)