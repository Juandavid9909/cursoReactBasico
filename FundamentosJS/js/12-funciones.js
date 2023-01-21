// Funciones - Function Declaration

function sumar(numero = 0, numero2 = 0)  {
    console.log(numero + numero2)
}

sumar(10, 20)
sumar(2, 3)
sumar(100)
sumar()

function sumar1(numero = 0, numero2 = 0)  {
    return {
        resultado: numero + numero2,
        mensaje: 'Hola Mundo'
    }
}

const { resultado, mensaje } = sumar1(20, 30)

console.log(resultado)
console.log(mensaje)