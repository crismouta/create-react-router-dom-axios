import { useEffect } from "react";
import { useState } from "react"
import { getAllProducts } from "../../services/ApiProductsService";
import { Link } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);

    const getAllProductsFromService = async () => {
        const response = await getAllProducts();
        console.log(response);
        setProducts(response)
    }

    useEffect(() => {
        getAllProductsFromService()
    }, [])



    return (
        <>
            <Link to={"/create-product"}><button>Añadir producto</button></Link>
            <div className="container-products">
                {
                    products.map((product) => (
                        <div className="container-product" key={product.id}>
                            <h3>{product.title}</h3>
                            <p>{product.price}</p>
                            <img src={product.imageUrl} alt="" />
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default Products