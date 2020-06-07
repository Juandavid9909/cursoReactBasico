// Creando una función

// Function Declaration
function saludar(nombre) {
    console.log(`Bienvenido ${ nombre }`);
}

saludar("Juan");

// Function Expression
const cliente = function(nombreCliente) {
    console.log("Mostrando los datos del cliente: " + nombreCliente);
}

cliente("Juan");