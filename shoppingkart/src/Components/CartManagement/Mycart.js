import React, { Component } from "react";

import EmptyCart from "./EmptyCart";
import Cheese from "./images/cheese.jpg";
import Bread from "./images/bread.jpg";
import Chicken from "./images/chicken.jpg";
import eggs from "./images/eggs.png";
import "./Mycart.css";

let myStorage = window.localStorage;

class Mycart extends Component {
  constructor(){
    super();
    this.state = { 
      items: JSON.parse(myStorage.getItem('tempCart'))
    };
  }
  
  // {
  //   items: [
  //     {
  //       id: 1,
  //       img: Cheese,
  //       name: "Diamond bar cheese",
  //       quantity: 1,
  //       price: 5,
  //       totalPrice: 5,
  //     }]
  
  handleLocalStorage(){
    myStorage.setItem('tempCart', JSON.stringify(this.state.items));
  }

  handleIncrement(index) {
    let items = this.state.items;
    items[index].quantity = items[index].quantity + 1;
    items[index].totalPrice = items[index].price * items[index].quantity;
    this.setState({
      items,
    });
    this.handleLocalStorage();
  }

  handleDecrement(index) {
    let items = this.state.items;
    if (items[index].quantity > 1) {
      items[index].quantity = items[index].quantity - 1;
      items[index].totalPrice = items[index].price * items[index].quantity;
      this.setState({
        items,
      });
    }
    this.handleLocalStorage();
  }

  deleteCard(index) {
    let items = this.state.items.filter((c) => c.id !== index);
    this.setState({ items },this.handleLocalStorage);
  }

  findTotal() {
    let total = 0;
    this.state.items.map((result) => (total = total + result.totalPrice));
    return total;
  }

  getEmptyCart() {
    if (this.state.items.length === 0) {
      myStorage.removeItem('tempCart');
      myStorage.removeItem('id');
      return (
        <div>
          <EmptyCart />
        </div>
      );
    }
  }

  getSubTotal() {
    if (this.state.items.length > 0) {
      return (
        <div className="totalDiv">
          <span className="totalDiv-title">SubTotal :</span>
          <span className="totalDiv-value">${this.findTotal()}</span>
        </div>
      );
    }
  }

  orderCheckout(){
    if(myStorage.getItem("token")){
      this.props.history.push({
        pathname: "/orderConfirmation",
        data: this.state.items,
      })
    } else {
      this.props.history.push({
        pathname: "/login"
      })
    }
  }
  
  render() {
    return (
      <div>
        <div>
          <p className="mainTitle"> Your Shopping Cart </p>
        </div>
        <div style={{ display: "flex" }}>
          <div className="left-div">
            <div className="itemsDiv">
              {this.state.items.map((result, index) => (
                <div className="orderDiv">
                  <img
                    src={result.img}
                    alt="grocery item"
                    className="orderedImages"
                  />
                  <div>
                    <p className="orderTitle">{result.name}</p>
                    <div className="priceQuantityTotalDiv">
                      <div className="price-Total-div">
                        <span className="price-total-quantity">Price : </span>
                        <span className="values">${result.price}</span>
                      </div>
                      <div className="quantityDiv">
                        <div>
                          <p className="price-total-quantity">Quantity</p>
                        </div>
                        <div className="orderDiv-info-quantity-button">
                          <button
                            className="minusButton"
                            onClick={() => this.handleDecrement(index)}
                          >
                            -
                          </button>
                          <p className="values">{result.quantity}</p>
                          <button
                            className="plusButton"
                            onClick={() => this.handleIncrement(index)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="price-Total-div">
                        <span className="price-total-quantity">Total : </span>
                        <span className="values">${result.totalPrice}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      className="removeButton"
                      onClick={() => this.deleteCard(result.id)}
                    >
                      Remove this item
                    </button>
                  </div>
                </div>
              ))}
              {this.getEmptyCart()}
            </div>

          </div>
          <div>
            <div>
              <p className="right-div-title"> Order summery</p>
            </div>
            <div>{this.getSubTotal()}</div>
            <div className="checkout-div">
              <button
                className="checkoutButton"
                onClick={() => this.orderCheckout()}
              >
                Checkout Securely Now{" "}
              </button>
            </div>
            <p className="discountText">
              Apply coupons, Discount on the next step
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Mycart;
