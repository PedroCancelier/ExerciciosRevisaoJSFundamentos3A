// EXERCÍCIO 02 - VERIFICAR APROVAÇÃO
// Crie uma função que receba a média de um aluno e retorne
// "Aprovado" quando a média for maior ou igual a 7
// e "Reprovado" nos demais casos.
//
// Escreva sua solução abaixo:

function media(nota){
    if(nota >= 7){
       return "Aluno aprovado";
    }else{
       return "Aluno reprovado";
    }


}

const resultado = media(7);
console.log(`${resultado}`)