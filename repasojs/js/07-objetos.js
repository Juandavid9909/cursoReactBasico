// Objetos

// Object Literal
const persona = {
    nombre: "Juan",
    profesion: "Desarrollador Web",
    edad: 500
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.profesion);
console.log(persona.edad);
console.log(persona['edad']);


// Object Constructor
function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

// Crear una nueva tarea
const tarea1 = new Tarea("Aprender JavaScript y React", "Urgente");
console.log(tarea1);
console.log(tarea1.nombre);