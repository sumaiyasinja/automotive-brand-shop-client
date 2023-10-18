import { useEffect, useState } from "react";

const Brands = () => {
    const [cars, setCars] = useState([])

    const carBrands = ['tesla', 'bmw', 'benz', 'ferrari', 'ford', 'audi'];
    const uniqueBrands = [];

    const brandLogos = {
        tesla: 'https://listing.maxwheelswp.com/wp-content/uploads/2021/03/tesla_logo_PNG19.png',
        bmw: 'URL_FOR_BMW_LOGO',
        benz: 'URL_FOR_BENZ_LOGO',
        ferrari: 'URL_FOR_FERRARI_LOGO',
        ford: 'URL_FOR_FORD_LOGO',
        audi: 'URL_FOR_AUDI_LOGO',
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
        <div>
            <h2>Browse By Brands</h2>
            <div className="flex flex-wrap justify-betweenS items-center">
           {uniqueBrands?.map((brand) => (
          <div key={brand}>
            <img src={brandLogos[brand]} alt={brand} />
            <h3>{brand}</h3>
          </div>
        ))}

            </div>
        </div>
    );
};

export default Brands;