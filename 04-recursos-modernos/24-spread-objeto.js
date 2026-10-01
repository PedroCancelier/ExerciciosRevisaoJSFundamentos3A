// EXERCÍCIO 24 - SPREAD EM OBJETO
// Crie um objeto usuario com nome e email.
// Utilize Spread para criar um novo objeto que mantenha os dados
// e acrescente a propriedade ativo com valor true.
//
// Escreva sua solução abaixo:

let usuario = {
    nome: "Pedro",
    email: "pedro@email.com"
};

let novoUsuario = {
    ...usuario,
    ativo: true
};

console.log(novoUsuario);