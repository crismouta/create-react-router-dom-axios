import { useState } from "react";
import { createProduct } from "../../services/ApiProductsService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {

    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const [urlImagen, setUrlImagen] = useState("");

    const navigate = useNavigate();

    const addProduct = async (event) => {
        event.preventDefault();
        
        const porductoNuevo = {
            title: titulo,
            description: descripcion,
            price: precio,
            imageUrl: urlImagen
        }

        await createProduct(porductoNuevo);
        navigate("/")
    }

    return (
        <form onSubmit={addProduct}>
            <div>
                <label>Titulo del producto</label>
                <input
                    type="text"
                    value={titulo}
                    onChange={(event) => setTitulo(event.target.value)}
                />
            </div>
            <div>
                <label>Descripción</label>
                <input
                    type="text"
                    value={descripcion}
                    onChange={(event) => setDescripcion(event.target.value)}
                />
            </div>
            <div>
                <label>Precio</label>
                <input
                    type="text"
                    value={precio}
                    onChange={(event) => setPrecio(event.target.value)}
                />
            </div>
            <div>
                <label>Url de la imagen</label>
                <input
                    type="text"
                    value={urlImagen}
                    onChange={(event) => setUrlImagen(event.target.value)}
                />
            </div>
            <button type="submit">Añadir Producto</button>
            <Link to={"/"}><button>Cancelar</button></Link>
        </form>
    )
}

export default CreateProduct