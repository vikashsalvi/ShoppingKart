import React, { Component } from "react";
import emptyCart from "./images/emptyCart.png";
import "./Mycart.css";

export class EmptyCart extends Component{
    render() {
        return (
          <div className="emptyCart">
            <div>
                <img src={emptyCart} className="emptyCart-img"/>
            </div>
            <div className="emptyCart-label-div">
                <p className="emptyCart-label">Your cart is empty</p>
                <a href="./" className="emptyCart-label"> Start Shopping </a>
            </div>
          </div>
        );
      }
} 

export default EmptyCart;