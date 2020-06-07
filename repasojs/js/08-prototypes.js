// Objetos

// Object Literal
const persona = {
    nombre: "Juan",
    profesion: "Desarrollador Web",
    edad: 500
};

// console.log(persona);

// const mostrarCliente = mostrarInformacionTarea(persona.tarea, persona.profesion);
// console.log(mostrarCliente);


// Object Constructor
function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

// Agregar un prototype
Tarea.prototype.mostrar = function() {
    return `La tarea ${ this.nombre } tiene una prioridad de ${ this.urgencia }`;
}

// Crear una nueva tarea
const tarea1 = new Tarea("Aprender JavaScript y React", "Urgente");
console.log(tarea1);

// const mostrarInfo = mostrarInformacionTarea(tarea1.nombre, tarea1.urgencia);
// console.log(mostrarInfo);