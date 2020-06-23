import React, { useState } from 'react';
import { Form, Toast, Button, Col } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import './createprod.css';
import Footer from '../Footer/Footer';

const INITIALIZE_PRODUCTS = {
    product_name: '',
    product_price: '',
    product_description: '',
    product_img: ''

}

function CreateProduct() {

    const [product, setProduct] = useState(INITIALIZE_PRODUCTS);

    const [success, SetSuccess] = useState(false);

    const showtoast = () => SetSuccess(!success);



    function handleChange(event) {
        const { name, value } = event.target;

        setProduct(prevState => ({ ...prevState, [name]: value }))

    }


    function checkEmpty() {
        const prodname = document.getElementById('prodname');
        const price = document.getElementById('price');
        const desp = document.getElementById('desp');
        const img = document.getElementById('img');

        if ((prodname.value === "") || (price.value === "") || (desp.value === "") || (img.value === "")) {
            alert("Please fill all the fields");
            return false;
        }

        return true;
    }

    async function handleSubmit(event) {
        //to prevent refreshing the page
        event.preventDefault()
        if (checkEmpty()) {
            setProduct(INITIALIZE_PRODUCTS)
            SetSuccess(true)
        }
        else {
            SetSuccess(false);
        }
    }


    return (
        <div className="wrapper">
        <div class="container-fluid bg">
            <div class="row">
                <div class="col-md-4 col-sm-4 col-xs-12"></div>
                <div class="col-md-4 col-sm-4 col-xs-12">
                    <div className="form-container">
                        <Form >
                            <div className="h1">Create Product</div>
                            <br />
                            <Toast show={success} onClose={showtoast} className="toast-box">
                                <Toast.Header>
                                    <strong className="mr-auto">Success!!!</strong>
                                </Toast.Header>
                                <Toast.Body>your product has been posted</Toast.Body>
                            </Toast>
                            <Form.Row>

                                <Form.Group as={Col}>
                                    <Form.Control
                                        name="prodname"
                                        lable = {product}
                                        placeholder="Product Name"
                                        type="text"
                                        id="prodname"
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control
                                        name="price"
                                        label="Price"
                                        placeholder="Price"
                                        min="0.00"
                                        step="0.01"
                                        type="Number"
                                        id="price"
                                        onChange={handleChange}

                                    />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group>
                                <Form.Control
                                    name="media"
                                    label="Media"
                                    content="Select Image"
                                    type="file"
                                    id="img"
                                    accept="image/*"
                                    onChange={handleChange}

                                />

                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    name="description"
                                    label="Description"
                                    placeholder="Description"
                                    type="textarea"
                                    id="desp"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="btn-btn-success btn-block" onClick={handleSubmit}>
                                <label>Submit  </label>
                                <FaShoppingCart />
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
            
        </div>
        <Footer />
        </div>
    );
}

export default CreateProduct;