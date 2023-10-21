import Banner from "../Components/Banner";
import Brands from "../Components/Brands";
import Footer from "../Components/Footer";
import ShopFAQAccordion from "../Components/ShopFAQAccordion";
import TestimonialSlider from "../Components/TestimonialSlider.jsx";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <TestimonialSlider></TestimonialSlider>
            <ShopFAQAccordion></ShopFAQAccordion>
            <Footer></Footer>
        </div>
    );
};

export default Home;