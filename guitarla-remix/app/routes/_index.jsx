import { useLoaderData } from "@remix-run/react";
import ListadoGuitarras from "~/components/listado-guitarras";
import { getCurso } from "~/models/curso.server";
import { getGuitarras } from "~/models/guitarras.server";
import { getPosts } from "~/models/posts.server";
import stylesGuitarras from "../styles/guitarras.css";
import stylesPosts from "../styles/blog.css";
import stylesCurso from "../styles/curso.css";
import ListadoPosts from "~/components/listado-posts";
import Curso from "~/components/curso";

export function meta() {

}

export function links() {
    return [
        {
            rel: "stylesheet",
            href: stylesGuitarras
        },
        {
            rel: "stylesheet",
            href: stylesPosts
        },
        {
            rel: "stylesheet",
            href: stylesCurso
        }
    ];
}

export async function loader() {
    const [guitarras, posts, curso] = await Promise.all([getGuitarras(), getPosts(), getCurso()]);

    return {
        guitarras: guitarras.data,
        posts: posts.data,
        curso: curso.data
    };
}

const Index = () => {
    const { guitarras, posts, curso } = useLoaderData();

    return (
        <>
            <main className="contenedor">
                <ListadoGuitarras guitarras={ guitarras } />
            </main>

            <Curso curso={ curso.attributes } />

            <section className="contenedor">
                <ListadoPosts posts={ posts } />
            </section>
        </>
    );
}

export default Index;