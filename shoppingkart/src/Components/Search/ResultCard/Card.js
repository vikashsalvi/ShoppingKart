import React, {Component} from "react";
import './Card.css';
import {withRouter} from "react-router-dom";

class Card extends Component {
    render() {
        return (
            <div className="product">
                <div className="hoverClass" onClick={() => this.props.history.push('/product', {'query': this.props.id})}>
                    <img className="productImage" alt={this.props.name} src={this.props.image}/>
                    <div className="productName">{this.props.name}</div>
                    <div className="price">${this.props.price}</div>
                    <div className="category">{this.props.category}</div>
                </div>
                <button className="addtocart">Add to Cart</button>
            </div>
        );
    }
}

export default withRouter(Card);
