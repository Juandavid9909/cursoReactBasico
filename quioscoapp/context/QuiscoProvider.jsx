import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
    const [categorias, setCategorias] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({});
    const [producto, setProducto] = useState({});
    const [modal, setModal] = useState(false);
    const [pedido, setPedido] = useState([]);

    const obtenerCategorias = async () => {
        const { data } = await axios("/api/categorias");

        setCategorias(data);
    }

    useEffect(() => {
        obtenerCategorias();
    }, []);

    useEffect(() => {
        setCategoriaActual(categorias[0]);
    }, [categorias]);

    const handleClickCategoria = (id) => {
        const categoria = categorias.filter((cat) => cat.id === id);

        setCategoriaActual(categoria[0]);
    }

    const handleSetProducto = (producto) => {
        setProducto(producto);
    }

    const handleChangeModal = () => {
        setModal(!modal);
    }

    const handleAgregarPedido = ({ categoriaId, imagen, ...producto }) => {
        if(pedido.some((productoState) => productoState.id === producto.id)) {
            const pedidoActualizado = pedido.map((productoState) => productoState.id === producto.id ? producto : productoState);

            setPedido(pedidoActualizado);
            toast.success("Guardado correctamente");
        }
        else {
            setPedido([...pedido, producto]);
            toast.success("Agregado al pedido");
        }

        setModal(false);
    }
    
    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                handleSetProducto,
                handleChangeModal,
                modal,
                producto,
                handleAgregarPedido,
                pedido
            }}
        >
            { children }
        </QuioscoContext.Provider>
    );
}

export {
    QuioscoProvider
}

export default QuioscoContext;