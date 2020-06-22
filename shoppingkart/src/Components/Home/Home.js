import React, {Component} from "react";
import Brand from "../Brands/Brands";
import AboutUs from "../AboutUs/AboutUs";
import Navigation from "../NavBar/NavBar";

class Home extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <div>CAROUSEL</div>
                <div>PRODUCTS</div>
                <Brand/>
                <AboutUs/>
                <div>FOOTER</div>
            </div>
        );
    }
}

export default Home;
