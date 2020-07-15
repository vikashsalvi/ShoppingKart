import React, {Component} from "react";
import Brand from "../Brands/Brands";
import AboutUs from "../AboutUs/AboutUs";
import Products from "../Products/Products";
import Slider from "../Carousel/Slider";

class Home extends Component {
    render() {
        return (
            <div>
                <Slider />
                <Products />
                <Brand/>
                <AboutUs/>
            </div>
        );
    }
}

export default Home;
