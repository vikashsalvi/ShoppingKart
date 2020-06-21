import React, {Component} from "react";
import Brand from "../Brands/Brands";
import AboutUs from "../AboutUs/AboutUs";

class Home extends Component {
    render() {
        return (
            <div>
                <div>NAVBAR</div>
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
