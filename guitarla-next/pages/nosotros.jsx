import Image from "next/image";
import Layout from "@/components/layout";
import styles from "../styles/nosotros.module.css";

const Nosotros = () => {
    return (
        <Layout
            title="Nosotros"
            description="Sobre nosotros, GuitarLA, tienda de música"
        >
            <main className="contenedor">
                <h1 className="heading">Nosotros</h1>

                <div className={ styles.contenido }>
                    <Image src="/img/nosotros.jpg" alt="Imagen sobre nosotros" width={ 1000 } height={ 800 } />

                    <div>
                        <p>Nunc aliquet leo at mi venenatis tristique. In aliquam turpis erat, in dapibus quam fringilla sit amet. Integer nec finibus neque. Maecenas a lorem viverra, tempus dui in, ornare quam. Aliquam a auctor lacus, et ullamcorper nunc. Nam placerat augue non pulvinar bibendum. In feugiat lorem leo, vel molestie lacus convallis eget. Praesent et risus vel sapien posuere convallis nec quis sapien.</p>

                        <p>Mauris id ligula sodales, dignissim elit nec, dictum elit. Fusce malesuada ac erat consequat rhoncus. Phasellus semper, ante vitae gravida pellentesque, magna erat aliquam ligula, non volutpat eros massa in libero. Nunc non justo a odio mollis porttitor. Sed facilisis sapien ut posuere pretium. Mauris est tortor, cursus vitae turpis eget, rhoncus consequat libero.</p>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Nosotros;