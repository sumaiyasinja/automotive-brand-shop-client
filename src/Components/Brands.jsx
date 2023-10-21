// import { Link, NavLink } from "react-router-dom";

import Brand from "./Brand";
import { useEffect, useState } from "react";

const Brands = () => {
    const [brands, setBrands] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/brands")
            .then(res => res.json())
            .then(data => setBrands(data))
    },[])


    console.log(brands)

    return (
        <div className="my-6">
            <h2 className="text-4xl font-bold text-center p-6">Browse By Brands</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pb-10 justify-between items-center">
               {
                brands?.map(brand => 
                    <Brand key={brand._id}
                    brand={brand}
                    ></Brand>
                    )
               }
               
              
            </div>
        </div>
    );
};

export default Brands;

