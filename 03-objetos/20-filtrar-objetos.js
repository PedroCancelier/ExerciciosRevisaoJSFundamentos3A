// EXERCÍCIO 20 - FILTRANDO OBJETOS
// Crie um array com cinco produtos contendo nome e preco.
// Utilize filter() para selecionar apenas os produtos que custam até R$ 100.
// Mostre o novo array.
//
// Escreva sua solução abaixo:

const objetos = [
    {nome:"Tv", preco: "5000"},
    {nome:"geladeira", preco: "3000"},
    {nome:"estojo", preco: "50"},
    {nome:"caderno", preco: "75"},
    {nome:"armario", preco: "1000"}
]

const objetoNovos = objetos.filter((elementos)=> elementos.preco >= 100);
console.log(objetoNovos)
