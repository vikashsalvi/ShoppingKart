import React, { Component } from "react";
import { Card, CardDeck } from "react-bootstrap";
import card from "../images/card.png";
import PayPal from "../images/paypal.png";
import Cheese from "../images/cheese.jpg";
import Bread from "../images/bread.jpg";
import Chicken from "../images/chicken.jpg";
import eggs from "../images/eggs.png";
import "./Checkout.css";
import Axios from "axios";

let storage = window.localStorage;

class Checkout extends Component {
  state = {
    items: this.props.location.data,
    firstname: "",
    lastname: "",
    address: ""
  };

  findTotal() {
    let total = 0;
    this.state.items.map((result) => (total = total + result.totalPrice));
    return total;
  }

  getSubTotal() {
    if (this.state.items.length > 0) {
      return (
        <div className="totalDivOrder">
          <span className="totalDivspan">SubTotal :</span>
          <span className="totalDivValue">${this.findTotal()}</span>
        </div>
      );
    }
  }

  async componentDidMount(){
    const url = "http://localhost:5000/orders/getUserDetails/chanchan";            /// CHANGE URL 
    const response = await Axios.get(url);
        if(response.data.Status === "Success"){
            this.setState({
                firstname: response.data.data[0].firstname,
                lastname: response.data.data[0].lastname,
                address: response.data.data[0].address
            })
        }       
  }

  async saveAddress() {
    document.getElementById("address").contentEditable = false;
    let res = "";

    const url = "http://localhost:5000/orders/changeAddress/chanchan"; ///////////////// CHANGE URL USERNAME
    await Axios.put(url, {
      username: "chanchan",          ////////////////////////////////////////////// CHANGE USERNAME
      address: document.getElementById("address").textContent,
    }).then(function (response) {
      res = response;
    });
  }

  async placeOrder() {
    let res = "";
    const url = "http://localhost:5000/orders/addToCart/";
    await Axios.post(url, {
      username: storage.getItem("username"),
      orderItems: this.state.items,
      grandTotal: this.findTotal(),
    }).then(function (response) {
      res = response;
    });
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <p className="mainTitle">Order Confirmation</p>
          </div>
          <div style={{ display: "flex" }}>
            <div className="left-div-order">
              <div className="left-div-delivery-div">
                <div>
                  <div className="left-div-delivery-title">
                    {" "}
                    Delivery Address
                  </div>
                </div>
                <div className="left-div-address-div">
                  <div id="contactDetails" className="contactDiv">
                    <b id="userName">{this.state.firstname} {this.state.lastname}</b>
                    <div id="address" className="addressDiv">
                      {this.state.address}
                    </div>
                  </div>
                  <div className="left-div-edit-save-div">
                    <button
                      onClick={() =>
                        (document.getElementById(
                          "address"
                        ).contentEditable = true)
                      }
                      className="edit-save-button"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => this.saveAddress()}
                      className="edit-save-button"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
              <div className="left-div-delivery-div">
                <div className="left-div-delivery-title">Payment Method</div>
                <div className="left-div-address-div">
                  <div style={{ display: "flex", padding: "5px 5px 15px 5px" }}>
                    <input type="radio" value="Card" name="payment" />
                    <img src={card} className="radio-button-img" alt="test"/>
                    Credit/Debit Card
                  </div>

                  <div style={{ display: "flex", padding: "5px 5px 15px 5px" }}>
                    <input type="radio" value="Paypal" name="payment" />
                    <img src={PayPal} className="radio-button-img" alt="test"/>
                    PayPal
                  </div>
                </div>
              </div>
              <div className="left-div-delivery-div">
                <div className="left-div-delivery-title">Your grocery bag </div>
                <div className="left-div-address-div">
                  <CardDeck>
                    {this.state.items.map((result) => (
                      <Card className="cardDeck">
                        <Card.Img
                          variant="top"
                          src={result.img}
                          className="items-size"
                        />
                        <Card.Body className="cardBody">
                          <Card.Title className="cardTitle">
                            {result.name}
                          </Card.Title>
                        </Card.Body>
                        <Card.Footer className="cardFooter">
                          <small className="text-muted">
                            ${result.totalPrice}
                          </small>
                        </Card.Footer>
                      </Card>
                    ))}
                  </CardDeck>
                </div>
              </div>
            </div>
            <div className="right-div-order">
              <div>
                <p className="right-div-mainTitle"> Order summery</p>
              </div>
              <div>{this.getSubTotal()}</div>
              <div className="totalDivOrder">
                <span className="totalDivspan">Delivery Charges:</span>
                <span className="totalDivValue"> $5.66</span>
              </div>
              <div className="totalDivOrder">
                <span className="totalDivspan grandTotal"> Grand Total:</span>
                <span className="totalDivValue grandTotal">
                  ${this.findTotal() + 5.66}
                </span>
              </div>
              <div className="discountDiv">
                <span htmlFor="discount" className="discountDivTitle">
                  Discount code
                </span>
                <div>
                  <input
                    type="text"
                    name="discount"
                    className="discountInput"
                  />
                  <button className="discountButton">Apply</button>
                </div>
              </div>
              <div className="checkout-div">
                <button
                  className="checkoutButton"
                  onClick={() => this.placeOrder()}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
