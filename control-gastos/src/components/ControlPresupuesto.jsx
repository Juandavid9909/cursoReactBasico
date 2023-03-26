import React from "react";

const ControlPresupuesto = ({ presupuesto }) => {

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <p>Gráfica aquí</p>
            </div>

            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span> { formatearCantidad(Number(presupuesto)) }
                </p>

                <p>
                    <span>Disponible: </span> { formatearCantidad(Number(0)) }
                </p>

                <p>
                    <span>Gastado: </span> { formatearCantidad(Number(0)) }
                </p>
            </div>
        </div>
    );
}

export default ControlPresupuesto;