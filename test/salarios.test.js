const { imprimirSalario } = require('./utilidades') // Asegúrate de importar la función correctamente

describe('Pruebas para la función imprimirSalario', () => {
    
    test('Debe devolver "El salario de Juan es $1500.00" con valores válidos', () => {
        expect(imprimirSalario("Juan", 1500)).toBe("El salario de Juan es $1500.00");
    });

    test('Debe fallar si el nombre es un número en lugar de una cadena', () => {
        expect(() => imprimirSalario(123, 2000)).toThrow();
    });

    test('Debe fallar si el salario no es un número', () => {
        expect(() => imprimirSalario("Ana", "2000 ")).toThrow();
    });

    test('Debe fallar si los argumentos están ausentes', () => {
        expect(() => imprimirSalario()).toThrow();
    });

    test('Debe fallar si el salario es un número negativo', () => {
        expect(() => imprimirSalario("Carlos", -1000)).toThrow();
    });

    test('Debe fallar si el nombre está vacío', () => {
        expect(() => imprimirSalario("", 3000)).toThrow();
    });

});
