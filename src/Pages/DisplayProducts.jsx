
import { useLoaderData, useParams } from "react-router-dom";
import SingleProductDetails from "./SingleProductDetails";

const DisplayProducts = () => {
    const {id} = useParams();
    console.log('id',id);
    const products = useLoaderData()
    console.log("sdjdunsd",products)

  
    // const product = products?.find(pord => (pord?._id == id));
    // console.log('my pord',product);
    // const product = Array.isArray(products) ? products.find(pord => pord?._id == id) : null;


    console.log(products)
    return (
      <div>
        {/* {product?.map((product) => (
        ))} */}
        <SingleProductDetails key={products?._id} product={products} />
      </div>
    );
};

export default DisplayProducts;
