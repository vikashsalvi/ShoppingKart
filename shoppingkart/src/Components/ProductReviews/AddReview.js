import React, { useState, Component } from 'react';
import { Form, Toast, Button, Col } from 'react-bootstrap';
import Axios from 'axios';


class AddReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product_rating: '',
            product_description: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)

    }

    // const [rate, SetRating] = useState(INITIALIZE_RATING);
    // const [success, SetSuccess] = useState(false);
    // const showtoast = () => SetSuccess(!success);



    handleChange(event) {
        // const { name, value } = event.target;
        // SetRating(prevState => ({ ...prevState, [name]: value }))
        // debugger;
        // console.log(event.target.value);
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
        //to prevent refreshing the page
        event.preventDefault()
        if (this.checkEmpty()) {
            let payload = {
                product_rating : this.state.product_rating,
                product_description : this.state.product_description
            };
            // SetRating(INITIALIZE_RATING)
            Axios.post("http://localhost:5000/review/putReview", payload)
                .then(res => {
                    this.props.history.push('/ProductDetails');
                })

        }
        // else {
        //     SetSuccess(false);
        // }
    }

    render() {
        return (
            <div>
                <Form>
                    <h4>Add Review </h4>
                    {/* <Toast show={success} onClose={showtoast}>
                        <Toast.Header>
                            <strong className="mr-auto">Success!!!</strong>
                        </Toast.Header>
                        <Toast.Body>your review has been posted</Toast.Body>
                    </Toast> */}
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Control
                                name="rating"
                                id="rating"
                                // label={rate}
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