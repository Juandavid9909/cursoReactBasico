// Tipos de datos 

// Undefined
let cliente
console.log(cliente)
console.log(typeof cliente)

// Boolean
const descuento = false
console.log(descuento)
console.log(typeof descuento)

// Number
const numero1 = 20.20
const numero2 = 30
const numero3 = -100

console.log(typeof numero1)
console.log(typeof numero2)
console.log(typeof numero3)

// Strings o Cadenas de Texto
const alumno = "Juan"
let producto = 'Monitor 20 pulgadas'

const numeroS = "30"
const numeroS2 = 30

console.log(typeof numeroS)
console.log(typeof numero2S)

// BigInt
const numeroGrande = BigInt(918298193891887139831091038173813)
console.log(typeof numeroGrande)
const numeroB = 10
const numeroB2 = 20
console.log(numeroB + Number(numeroGrande))

const numeroBC = "30"
const numeroBC2 = 30
console.log(typeof String(numeroBC2))
console.log(typeof Number(numeroBC))

// Symbol
const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)
console.log(primerSymbol === segundoSymbol)
console.log(primerSymbol.valueOf())
console.log(segundoSymbol.valueOf())

// Null
const descuentoN = null
console.log(typeof descuentoN)