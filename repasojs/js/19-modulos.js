/**************
 * Código otro archivo
 * ***************/

import Tarea from "./19-modulos.js";

const tarea1 = new Tarea("Aprender JavaScript", "Urgente");

console.log(tarea1);

tarea1.mostrar();



// import { nombreTarea, crearTarea, tareaCompletada } from "./19-modulos.js";

// console.log(nombreTarea);

// const tarea1 = crearTarea("Pasear al perro", "Media");
// console.log(tarea1);

// tareaCompletada();







// export const nombreTarea = "Pasear al perro";

// // Exportar una función
// export const crearTarea = (tarea, urgencia) => {
//     return `La tarea ${ tarea } tiene una urgencia de ${ urgencia }`;
// };

// export const tareaCompletada = () => {
//     console.log("La tarea se completó");
// };

// Escribir clases

export default class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad;
    }

    mostrar() {
        console.log(`${ this.nombre } tiene una prioridad de ${ this.prioridad }`);
    }
}

class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }

    mostrar() {
        super.mostrar();
        console.log(`y la cantidad de ${ this.cantidad }`);
    }
}