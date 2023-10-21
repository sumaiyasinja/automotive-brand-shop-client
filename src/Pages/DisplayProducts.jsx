import { useLoaderData } from "react-router-dom";

const DisplayProducts = () => {
    const loadedProducts = useLoaderData();
    return (
        <div>
            {loadedProducts?.map((product) => (
                <div key={product._id}>
                    <h3>{product.name}</h3>
                    <p>Price: {product.price}</p>
                    <p>Rating: {product.rating}</p>
                    <p>Description: {product.description}</p>
                    <img src={product.photo} alt={product.name} />
                </div>
            ))}
        </div>
    );
};

export default DisplayProducts;
