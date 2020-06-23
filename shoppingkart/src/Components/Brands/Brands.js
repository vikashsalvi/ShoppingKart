import React, {Component} from "react";
import './Brands.css';

class Brand extends Component {
    render() {
        return (
            <div className="brand-section">
                <p className="heading">Brands Associated</p>
                <div className="brand-area">
                    <div className="brand">Brand Image</div>
                    <div className="brand">Brand Image</div>
                    <div className="brand">Brand Image</div>
                    <div className="brand">Brand Image</div>
                    <div className="brand">Brand Image</div>
                    <div className="brand">Brand Image</div>
                    <div className="brand">Brand Image</div>
                    <div className="brand">Brand Image</div>
                    <div className="brand">Brand Image</div>
                </div>
            </div>
        );
    }
}

export default Brand;
