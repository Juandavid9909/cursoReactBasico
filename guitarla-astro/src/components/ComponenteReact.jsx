import { useState } from "react";

const ComponenteReact = () => {
    const [cliente, setCliente] = useState("Juan");

    return (
        <div>{ cliente }</div>
    );
}

export default ComponenteReact;