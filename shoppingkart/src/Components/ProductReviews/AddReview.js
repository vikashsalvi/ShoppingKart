/**
 @author    Bharat Bhargava => B00838511
 **/

import React, { Component } from 'react';
import { Form, Button, Col, } from 'react-bootstrap';
import Axios from 'axios';

let myStorage = window.localStorage;

class AddReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product_rating: '',
            product_description: '',
        };
        debugger;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(event) {
        if (event.target.name === "rating") {
            this.setState({ 'product_rating': event.target.value });
        }
        else if (event.target.name === "description") {
            this.setState({ 'product_description': event.target.value });
        }
    }

    checkEmpty() {
        const rating = document.getElementById('rating');
        const desp = document.getElementById('desp');

        if ((rating.value === "") || (desp.value === "")) {
            alert("Please fill all the fields");
            return false;
        }
        return true;
    }

    async handleSubmit(event) {
        if (myStorage.getItem("token")) {
            event.preventDefault()
            if (this.checkEmpty()) {
                let payload = {
                    product_rating: this.state.product_rating,
                    product_description: this.state.product_description,
                    user_id: myStorage.getItem("userid"),
                    product_id: this.props.productId
                };
                Axios.post("http://localhost:5000/review/putReview", payload)
                    .then(res => {
                        alert("Review added");
                    })

            }
        } else {
            this.props.parentProps.history.push({
                pathname: "/login"
            });
        }
    }

    render() {
        return (
            <div>
                <Form>
                    <h4>Add Review </h4>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Control
                                name="rating"
                                id="rating"
                                placeholder="Rating"
                                min="0"
                                step="1"
                                max="5"
                                type="Number"
                                onBlur={this.handleChange}

                            />
                        </Form.Group>


                        <Form.Group as={Col}>
                            <Form.Control
                                name="description"
                                id="desp"
                                label="Description"
                                placeholder="Description"
                                type="textarea"
                                onBlur={this.handleChange}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Button variant="primary" type="submit" className="btn-btn-success btn-block" onClick={this.handleSubmit} >
                        Submit
                    </Button>
                </Form>
            </div>


        );
    }

}

export default AddReview;