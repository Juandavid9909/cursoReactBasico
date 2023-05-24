import Layout from "@/components/layout";
import ListadoGuitarras from "@/components/listado-guitarras";

const Tienda = () => {
    return (
        <Layout
            title="Tienda Virtual"
            description="Tienda virtual, venta de guitarras, instrumentos, GuitarLA"
        >
            <main className="contenedor">
                <h1 className="heading">Nuestra Colección</h1>

                <ListadoGuitarras
                    
                />
            </main>
        </Layout>
    );
}

export default Tienda;