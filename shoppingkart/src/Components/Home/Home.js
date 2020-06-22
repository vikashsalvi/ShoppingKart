import React, {Component} from "react";
import Brand from "../Brands/Brands";
import AboutUs from "../AboutUs/AboutUs";
import Products from "../Products/Products";
import Navigation from "../NavBar/NavBar";

class Home extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <div>CAROUSEL</div>
                <Products />
                <Brand/>
                <AboutUs/>
                <div>FOOTER</div>
            </div>
        );
    }
}

export default Home;
