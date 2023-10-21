
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
import BrandBanner from './BrandBanner';
import { Link } from 'react-router-dom';
const BrandPage = () => {
    const {brands} = useParams()
    const navigate = useNavigate()

    const products = useLoaderData();
    console.log("products",products);
    const filteredproduct = products?.filter(pord => (pord?.brands == brands));
    console.log(filteredproduct);
    console.log(brands)
  

    const handleUpdate =(product)=>{
    console.log("Viewing update page of",product)
    navigate(`/update/${product._id}`)
   }
    const handleDetails =(product)=>{
    console.log("Viewing deails page of",product._id)
    navigate(`/products/${product._id}`)
   }

    return (
        <div>
            <BrandBanner brands={filteredproduct}></BrandBanner>
            <h2 className='text-3xl'>Brand page</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

            
            {
    filteredproduct ? (
                filteredproduct.map((product) => (
                    <div key={product?._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={product?.photo} alt={product?.name} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product?.name}</h2>
                            <p>Brand Name: {product?.brands}</p>
                            <p>Type: {product?.types}</p>
                            <p>Price: {product?.price}</p>
                            <p>Rating: {product?.rating}</p>
                            <div className="card-actions justify-between">

                              {/* <Link to={`/products/${product._id}`}>
                                <button className="custom-btn">Details</button>

                              </Link> */}
                                <button onClick={() => {handleDetails(product)} } className="custom-btn">Details</button>
                                <button onClick={() => {handleUpdate(product)} } className="custom-btn">Update</button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="">
                
                        <h2 className="card-title text-7xl text-red-900">No Data Found</h2>
                            
                        </div>
                    )
        }
        </div>


        </div>
    );
};

export default BrandPage;