// Spread Operator

let lenguajes = ["JavaScript", "PHP", "Python"];
let frameworks = ["ReactJS", "Laravel", "Django"];

// Unir los arreglos en 1 solo
// let combinacion = lenguajes.concat(frameworks);
let combinacion = [...lenguajes, ...frameworks];

console.log(combinacion);