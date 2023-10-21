
import { useLoaderData, useParams } from 'react-router-dom';
const BrandPage = () => {
    const {brands} = useParams()

    const products = useLoaderData();
    const product = products?.filter(pord => (pord?.brands == brands));
    // const { title, details, img,price } = product;
    console.log(product);
    console.log(brands)
    // console.log(allProducts);
    // console.log(singleProduct);

    return (
        <div>
            Brand page
            {/* {brandProducts?.map(product => (
                <div key={product?._id}>
                    <h2>{product?.name}</h2>
                </div>
            ))} */}
        </div>
    );
};

export default BrandPage;