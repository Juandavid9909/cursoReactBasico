import imagen from "../../public/img/nosotros.jpg";
import styles from "../styles/nosotros.css";

export const meta = () => {
    return [
        {
            title: "GuitarLA - Sobre Nosotros",
            description: "Venta de guitarras, blog de música"
        }
    ];
}

export const links = () => {
    return [
        {
            rel: "stylesheet",
            href: styles
        },
        {
            rel: "preload",
            href: imagen,
            as: "image"
        }
    ];
}

const Nosotros = () => {
    return (
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>

            <div className="contenido">
                <img src={ imagen } alt="Imagen sobre nosotros" />

                <div>
                    <p>Vestibulum vulputate, ex et imperdiet tincidunt, diam justo ultrices arcu, non pharetra est velit in odio. Curabitur consequat malesuada magna, vitae imperdiet mi pellentesque at. Morbi et maximus arcu, ultrices accumsan sapien. Quisque vulputate lectus eu sagittis aliquam. Nunc eu mi ut nibh scelerisque vehicula. Morbi tortor ex, vestibulum non malesuada porta, molestie eu elit. Proin et neque commodo, facilisis neque sit amet, congue mi.</p>

                    <p>Vestibulum vulputate, ex et imperdiet tincidunt, diam justo ultrices arcu, non pharetra est velit in odio. Curabitur consequat malesuada magna, vitae imperdiet mi pellentesque at. Morbi et maximus arcu, ultrices accumsan sapien. Quisque vulputate lectus eu sagittis aliquam. Nunc eu mi ut nibh scelerisque vehicula. Morbi tortor ex, vestibulum non malesuada porta, molestie eu elit. Proin et neque commodo, facilisis neque sit amet, congue mi.</p>
                </div>
            </div>
        </main>
    );
}

export default Nosotros;