// EXERCÍCIO 19 - ARRAY DE OBJETOS
// Crie um array com três objetos de filmes.
// Cada filme deve possuir titulo, genero e duracao.
// Percorra o array e mostre o título de cada filme.
//
// Escreva sua solução abaixo:

const filmes = [
    {titulo: "De repente 30", genero: "romance", duracao: "2 horas"},
    {titulo: "10 cisas que odeio em você", genero: "romance", duracao: "2 horas"},
    {titulo: "Sociedade dos poetas mortos", genero: "drama", duracao: "3 horas"}
]

const filmesNovo = filmes.forEach(a => console.log(a.titulo));