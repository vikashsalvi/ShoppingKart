import React, { useState } from 'react';
import { Form, Toast, Col } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import './createprod.css';

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
            <div className="form_area">

                <h1>Insert new product</h1>
                <Form >
                    <Toast show={success} onClose={showtoast} className="toast-box">
                        <Toast.Header>
                            <strong className="mr-auto">Success!!!</strong>
                        </Toast.Header>
                        <Toast.Body>your product has been posted</Toast.Body>
                    </Toast>
                    <Form.Row>

                        <Form.Group as={Col}>
                            <input
                                name="prodname"
                                lable = {product}
                                placeholder="Product Name"
                                type="text"
                                id="prodname"
                                className="inp"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <input
                                name="price"
                                label="Price"
                                placeholder="Price"
                                min="0.00"
                                step="0.01"
                                type="Number"
                                id="price"
                                className="inp"
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
                        <input
                            name="description"
                            label="Description"
                            placeholder="Description"
                            className="inp"
                            type="textarea"
                            id="desp"
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Form>
                <button type="submit" className="submit" onClick={handleSubmit}>
                    <span>Submit</span>
                    <FaShoppingCart />
                </button>
            </div>
            <div style={{margin: "50px"}}/>
        </div>
    );
}

export default CreateProduct;
