import { useContext } from "react";
import Banner from "../Components/Banner";
import Brands from "../Components/Brands";
import Footer from "../Components/Footer";
import ShopFAQAccordion from "../Components/ShopFAQAccordion";
import TestimonialSlider from "../Components/TestimonialSlider.jsx";
import { AuthContext } from "../provider/AuthProvider";

const Home = () => {
    const { isDarkMode } = useContext(AuthContext);

    return (
        <div className={` ${isDarkMode ? 'bg-black text-white' : ''}`}>
            <Banner></Banner>
            <Brands></Brands>
            <TestimonialSlider></TestimonialSlider>
            <ShopFAQAccordion></ShopFAQAccordion>
            <Footer></Footer>
        </div>
    );
};

export default Home;
