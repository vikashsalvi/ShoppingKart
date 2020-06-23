import React, { useState } from 'react';
import { Form, Toast, Button, Col } from 'react-bootstrap';

const INITIALIZE_RATING = {
    product_rating: '',
    product_description: '',
}

function AddReview() {

    const [rate, SetRating] = useState(INITIALIZE_RATING);
    const [success, SetSuccess] = useState(false);
    const showtoast = () => SetSuccess(!success);



    function handleChange(event) {
        const { name, value } = event.target;
        SetRating(prevState => ({ ...prevState, [name]: value }))
    }

    function checkEmpty() {
        const rating = document.getElementById('rating');
        const desp = document.getElementById('desp');


        if ((rating.value === "") || (desp.value === "")) {
            alert("Please fill all the fields");
            return false;
        }

        return true;
    }

    async function handleSubmit(event) {
        //to prevent refreshing the page
        event.preventDefault()
        if (checkEmpty()) {
            SetRating(INITIALIZE_RATING)
            SetSuccess(true)
        }
        else {
            SetSuccess(false);
        }
    }


    return (
                <div>
                    <Form>
                        <h4>Add Review </h4>
                        <Toast show={success} onClose={showtoast}>
                            <Toast.Header>
                                <strong className="mr-auto">Success!!!</strong>
                            </Toast.Header>
                            <Toast.Body>your review has been posted</Toast.Body>
                        </Toast>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Control
                                    name="rating"
                                    id= "rating"
                                    label={rate}
                                    placeholder="Rating"
                                    min="0"
                                    step="1"
                                    max="5"
                                    type="Number"
                                    onChange={handleChange}

                                />
                            </Form.Group>
                            

                            <Form.Group as={Col}>
                                <Form.Control
                                    name="description"
                                    id="desp"
                                    label="Description"
                                    placeholder="Description"
                                    type="textarea"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" type="submit" className="btn-btn-success btn-block" onClick = {handleSubmit} >
                        Submit
                        </Button>
                    </Form>
                </div>


    );
}

export default AddReview;