import React,{Component} from "react";
import '../CSS/Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker,faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";


class Footer extends Component {
    render() {
        return (
            <div className="main-footer ">
                <div>
                    <div className="row ml-2" style={{marginRight: "0px"}}>
                        <div className="col-sm" style={{ "marginTop": "20px" }}>
                            <h4>ShoppingKart</h4>
                            <p>
                                &copy;{new Date().getFullYear()} ShoppingKart | All rights reserved
                            </p>
                        </div>
                        <div className="col-sm ml-2" style={{ "marginTop": "20px" }}>
                            About the company
                        <p>
                                ShoppingKart is an electronic-commerce web application that facilitates transactions of services
                                and goods online. The website will help users to buy products like groceries, daily essentials,
                                and many commodities with the convenience of their house
                        </p>
                        </div>
                        <div className="col-sm ml-2" style={{ "marginTop": "20px" }}>
                            <p><FontAwesomeIcon icon={faMapMarker} /> &nbsp;Canada </p>
                            <p>
                            <FontAwesomeIcon icon={faPhone} /> &nbsp; <a style={{"color":"#ffffff"}} href="tel:+1-999-999-9999">(999)-999-9999</a>
                            </p>
                            <FontAwesomeIcon icon={faEnvelope} /> &nbsp; <a style={{"color":"#ffffff"}} href = "mailto: contatncshoppingkart@shoppingkar.com">contatnc@shoppingkar.com</a>
                        </div>

                    </div>

                </div>
            </div>

        );
    }
}

export default Footer;
