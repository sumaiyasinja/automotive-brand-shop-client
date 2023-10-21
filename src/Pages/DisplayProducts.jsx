import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleProductDetails from "./SingleProductDetails";

const DisplayProducts = () => {
    const {id} = useParams();
    const products = useLoaderData()


    const product = products?.filter(pord => (pord?._id == id));
    console.log('my pord',product);
    console.log(products)


    console.log(products)
    return (
      <div>
        {product?.map((product) => (
           <SingleProductDetails key={product?._id} product={product} />
        ))}
      </div>
    );
};

export default DisplayProducts;
