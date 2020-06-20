import React, {Component} from "react";
import './Card.css';
import placeholder from './raw/placeholder.png';

class Card extends Component {
    render() {
        return (
            <div className="product">
                <img className="productImage" alt="placeholder" src={placeholder}/>
                <div className="productName">{this.props.name}</div>
                <div className="price">{this.props.price}</div>
                <div className="brandName">{this.props.brand}</div>
                <button className="addtocart">Add to Cart</button>
            </div>
        );
    }
}

export default Card;
