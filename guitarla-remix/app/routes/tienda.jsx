import { getGuitarras } from "../models/guitarras.server";

export const loader = async() => {
    const guitarras = await getGuitarras();
    console.log(guitarras);

    return guitarras;
}

const Tienda = () => {
    return (
        <div>Tienda</div>
    );
}

export default Tienda;