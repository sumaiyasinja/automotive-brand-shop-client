import { useEffect, useState } from "react";

const Brands = () => {
    const [cars, setCars] = useState([])

    const carBrands = ['tesla', 'bmw', 'mercedes', 'ferrari', 'ford', 'audi'];
    const uniqueBrands = [];

    const brandLogos = {
        tesla: 'https://listing.maxwheelswp.com/wp-content/uploads/2021/03/tesla_logo_PNG19.png',
        bmw: 'https://listing.maxwheelswp.com/wp-content/uploads/2021/03/bmw.png',
        mercedes: 'https://listing.maxwheelswp.com/wp-content/uploads/2021/03/mercedes.png',
        ferrari: 'https://listing.maxwheelswp.com/wp-content/uploads/2021/04/ferrari_.png',
        ford: 'https://listing.maxwheelswp.com/wp-content/uploads/2021/03/ford-logo-icon-png-14228.png',
        audi: 'https://listing.maxwheelswp.com/wp-content/uploads/2021/03/audi-logo-2.png',
      };
      

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
            setCars(data)
        })
    },[])



    cars.forEach(car => {
        if (car?.brands) {
            const brand = car.brands.toLowerCase(); 
            if (carBrands.includes(brand) && !uniqueBrands.includes(brand)) {
                uniqueBrands.push(brand);
                console.log(brand);
            }
        }
    });
    if (uniqueBrands.length === carBrands.length) {
        console.log('All brands are present.');
    }
    
    return (
        <div className=" my-6 ">
            <h2 className="text-4xl font-bold text-center p-6">Browse By Brands</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pb-10 justify-between items-center">
           {uniqueBrands?.map((brand) => (
        
        <div  key={brand} className=" w-96 bg-base-100 shadow-xl rounded-xl">
                <figure className="h-64 flex justify-center items-center text-center"> 
                    <img src={brandLogos[brand]} alt={brand}/>
                </figure>
          <div className=" w-full px-3 py-4 font-semibold text-center ">
            <p className="text-gray-400 text-xs">Category</p>
            <h2 className="card-title capitalize text-red-500">{brand}</h2>

          </div>
        </div>

        ))}

            </div>
        </div>
    );
};

export default Brands;





