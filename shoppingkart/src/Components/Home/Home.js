import React, {Component} from "react";
import Brand from "../Brands/Brands";
import AboutUs from "../AboutUs/AboutUs";
import Products from "../Products/Products";
import Navigation from "../NavBar/NavBar";
import Slider from "../Carousel/Slider";

class Home extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Slider />
                <Products />
                <Brand/>
                <AboutUs/>
                <div>FOOTER</div>
            </div>
        );
    }
}

export default Home;
