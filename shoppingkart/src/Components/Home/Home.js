import React, {Component} from "react";
import Brand from "../Brands/Brands";
import AboutUs from "../AboutUs/AboutUs";
import Products from "../Products/Products";
import Navigation from "../NavBar/NavBar";
import Slider from "../Carousel/Slider";
import Footer from '../Footer/Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Slider />
                <Products />
                <Brand/>
                <AboutUs/>
                <Footer />
            </div>
        );
    }
}

export default Home;
