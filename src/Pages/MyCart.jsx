import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { ImBin } from 'react-icons/im';
// import { GrDocumentUpdate } from 'react-icons/gr';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";


const MyCart = () => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext)
  const navigate= useNavigate()

  const ProductCard = ({ product }) => (
    <div key={product?._id} className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={product?.photo} alt={product?.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product?.name}</h2>
        <p>Brand Name: {product?.brands}</p>
        <p>Type: {product?.types}</p>
        <p>Price: {product?.price}</p>
        <div className="card-actions justify-between">
        <button onClick={() =>{ handleDelete(product?._id)}} className="custom-btn">
            <ImBin></ImBin>
        </button>

  </div>
      </div>
    </div>
  );

  useEffect(() => {
    fetch("https://automotive-brand-shop-server-49zcewzwu-sumaiyasinja.vercel.app/cart")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  const handleDelete=(id)=>{
    console.log('delete',id)
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {


            fetch(`https://automotive-brand-shop-server-49zcewzwu-sumaiyasinja.vercel.app/cart/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your Coffee has been deleted.',
                            'success'
                        )
                    }
                })

        }
    })
}

  const filteredProducts = products.filter((product) => product?.email === user?.email);

  return (
    <div className="pb-5 pt-24">
      <h2 className="text-3xl font-bold text-center text-red-500 ">My Cart:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-5 container mx-auto">
      {filteredProducts.length !== 0 ? (
        filteredProducts.map((product) => <ProductCard key={product?._id} product={product} />)
      ) : (
        <p className="text-center font-bold py-40">No products in your cart.</p>
      )}
      </div>
    </div>
  );
};

export default MyCart;
