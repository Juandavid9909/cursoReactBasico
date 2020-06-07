// Parámetros por default en las funciones

// function actividad(nombre = "Walter White", actividad = "Enseñar Química") {
//     console.log(`La persona ${ nombre }, está realizando la actividad ${ actividad }`);
// }

const actividad = function(nombre = "Walter White", actividad = "Enseñar Química") {
    console.log(`La persona ${ nombre }, está realizando la actividad ${ actividad }`);
}

actividad("Juan", "Aprender JavaScript");