import React, { Component } from "react";
import { Card, CardDeck } from "react-bootstrap";
import card from "../images/card.png";
import PayPal from "../images/paypal.png";
import Cheese from "../images/cheese.jpg";
import Bread from "../images/bread.jpg";
import Chicken from "../images/chicken.jpg";
import eggs from "../images/eggs.png";
import "./Checkout.css";

class Checkout extends Component {
  state = {
    items: this.props.location.data || [
      {
        id: 1,
        img: Cheese,
        name: "Diamond bar cheese",
        quantity: 1,
        price: 5,
        totalPrice: 5,
      },
      {
        id: 2,
        img: Bread,
        name: "Old mill bread",
        quantity: 1,
        price: 3,
        totalPrice: 3,
      },
      {
        id: 3,
        img: Chicken,
        name: "Farmer's chicken",
        quantity: 1,
        price: 10,
        totalPrice: 10,
      },
      {
        id: 4,
        img: eggs,
        name: "Farmer's eggs",
        quantity: 1,
        price: 5,
        totalPrice: 5,
      },
    ],
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
          <label className="totalDivlabel">SubTotal :</label>
          <label className="totalDivValue">${this.findTotal()}</label>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div>HEADER</div>
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
                    <b>Chanandler Bong</b>
                    {
                      "\n3017  Pine Street, Altario\nAlberta T0C 0E0 Canada\n403-552-0734"
                    }
                  </div>
                  <div className="left-div-edit-save-div">
                    <button
                      onClick={() =>
                        (document.getElementById(
                          "contactDetails"
                        ).contentEditable = true)
                      }
                      className="edit-save-button"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() =>
                        (document.getElementById(
                          "contactDetails"
                        ).contentEditable = false)
                      }
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
                    <img src={card} className="radio-button-img" />
                    Credit/Debit Card
                  </div>

                  <div style={{ display: "flex", padding: "5px 5px 15px 5px" }}>
                    <input type="radio" value="Paypal" name="payment" />
                    <img src={PayPal} className="radio-button-img" />
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
                <label className="totalDivlabel">Delivery Charges:</label>
                <label className="totalDivValue"> $5.66</label>
              </div>
              <div className="totalDivOrder">
                <label className="totalDivlabel grandTotal">
                  {" "}
                  Grand Total:
                </label>
                <label className="totalDivValue grandTotal">
                  ${this.findTotal() + 5.66}
                </label>
              </div>
              <div className="discountDiv">
                <label htmlFor="discount" className="discountDivTitle">
                  Discount code
                </label>
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
                <button className="checkoutButton">Place Order</button>
              </div>
            </div>
          </div>
        </div>
        <div>FOOTER</div>
      </div>
    );
  }
}

export default Checkout;
