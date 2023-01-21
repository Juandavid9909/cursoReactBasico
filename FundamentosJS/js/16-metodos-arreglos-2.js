const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
const numeros = [10, 20, 30]

// Filter
nuevoArray = tecnologias.filter(tech => tech !== 'React')

// Comprobar si un elemento existe en el array
const resultado = tecnologias.includes('GraphQL')

// Some - Devuelve si al menos uno cumple la condición
const resultado1 = numeros.some(numero => numero > 15)

// Find - Devuelve el primer elemento que cumpla la condicion
const resultado2 = numeros.find(numero => numero > 5)

// Every - Retorna true o false si todos cumplen la condición
const resultado3 = numeros.every(numero => numero > 9)

// Reduce - Acumulando en el total
const resultado4 = numeros.reduce((total, numero) => numero + total, 0)

// Filter - Crea un nuevo array en base a una condición
const resultado5 = tecnologias.filter(tech => tech === 'Node.js')
const resultado6 = numeros.filter(numero => numero !== 10)

tecnologias.forEach((tech, index) => console.log(index))

// Crear un nuevo array
const arrayMap = tecnologias.map(tech => tech)

console.log(arrayMap)