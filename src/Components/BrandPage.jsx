
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
const BrandPage = () => {
    const {brands} = useParams()
    const navigate = useNavigate()

    const products = useLoaderData();
    const product = products?.filter(pord => (pord?.brands == brands));
    console.log(product);
    console.log(brands)
   const handleDetails =(product)=>{
    console.log('details')
    console.log("Viewing details of",product)
    navigate(`/products/${product._id}`)
   }

    return (
        <div>
            <h2>Brand page</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

            
            {
    product ? (
                product.map((product) => (
                    <div key={product?._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={product?.photo} alt={product?.name} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product?.name}</h2>
                            <p>Brand Name: {product?.brands}</p>
                            <p>Type: {product?.types}</p>
                            <p>Price: {product?.price}</p>
                            <p>Rating: {product?.rating}</p>
                            <div className="card-actions justify-between">
                                <button onClick={() => {handleDetails(product)} }className="custom-btn">Details</button>
                                <button className="custom-btn">Update</button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="">
                
                        <h2 className="card-title text-7xl">No Data Found</h2>
                            
                        </div>
                    )
        }
        </div>


            {/* {brandProducts?.map(product => (
                <div key={product?._id}>
                    <h2>{product?.name}</h2>
                </div>
            ))} */}
        </div>
    );
};

export default BrandPage;