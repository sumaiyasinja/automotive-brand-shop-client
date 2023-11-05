
const BrandBanner = ({ brands }) => {
  return (
    <div className="carousel w-full relative">
      {brands.map((brand, index) => (
        <div key={index} id={`slide${index + 1}`} className="carousel-item relative w-full">
          <img src={brand.photo} className="w-full opacity-70" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${index === 0 ? brands.length : index}`} className="btn btn-circle">❮</a>
            <a href={`#slide${index === brands.length - 1 ? 1 : index + 2}`} className="btn btn-circle">❯</a>
          </div>
          <div className="absolute text-white bottom-0 hidden lg:block p-4  w-full">
            
<div className=" chat chat-start">
          <h4 className="text-red-500 font-semibold chat-bubble p-3">Best Automotive Brand car in best ptice?</h4>

</div>
<div className=" chat chat-end">
                   <span className="chat-bubble my-4 p-3"> {brand?.name}</span> 
                   <h4 className="chat-bubble  my-4 p-3">Price: {brand.price}</h4>
                   <h4 className="chat-bubble  my-4 p-3">in DrivenWays Shop</h4>
                                      

</div>
          {/* <h4 className="text-white font-semibold chat-bubble">Absolulty DriveWays Shop</h4> */}
                
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrandBanner;
