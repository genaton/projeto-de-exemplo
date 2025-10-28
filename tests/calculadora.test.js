const calculadora = require("../src/calculadora")
describe("calculadora", () => {

    test("deve permitir somar dois valores", () => {
        const resultado = calculadora.somar(5, 2);
        expect(resultado).toBe(7);
        console.log(resultado)

    })

    test("deve permitir subtrair dois valores", () => {
        const resultado = calculadora.subtrair(5, 2);
        expect(resultado).toBe(3);
        console.log(resultado)

    })
    test("deve permitir multiplicar dois valores", () => {
        const resultado = calculadora.multiplicar(5, 2);
        expect(resultado).toBe(10);
        console.log(resultado)

    })

     test("deve permitir dividir dois valores", () => {
        const resultado = calculadora.dividir(2, 2);
        expect(resultado).toBe(1);
        console.log(resultado)

    })
})