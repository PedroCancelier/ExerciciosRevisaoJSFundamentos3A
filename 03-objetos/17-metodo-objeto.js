// EXERCÍCIO 17 - MÉTODO DE OBJETO
// Crie um objeto retangulo com largura, altura e um método calcularArea().
// O método deve retornar largura * altura. Mostre a área no console.
//
// Escreva sua solução abaixo:

const retangulo = {
    largura: 100,
    altura: 10,
    calcularArea() {
        return this.largura * this.altura;
    }
}

const resultado = retangulo.calcularArea();
console.log(resultado)


