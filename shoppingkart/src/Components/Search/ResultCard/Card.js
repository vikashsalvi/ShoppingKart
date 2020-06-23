import React, {Component} from "react";
import './Card.css';
import placeholder from './raw/placeholder.png';
import {withRouter} from "react-router-dom";

class Card extends Component {
    render() {
        return (
            <div className="product">
                <div className="hoverClass" onClick={() => this.props.history.push('/product')}>
                    <img className="productImage" alt="placeholder" src={placeholder}/>
                    <div className="productName">{this.props.name}</div>
                    <div className="price">${this.props.price}</div>
                    <div className="brandName">Brand: {this.props.brand}</div>
                </div>
                <button className="addtocart">Add to Cart</button>
            </div>
        );
    }
}

export default withRouter(Card);
