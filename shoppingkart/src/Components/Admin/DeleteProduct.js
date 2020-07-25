import React, { useState } from 'react';
import { Form, Toast, Col } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import './deleteprod.css';
import axios from 'axios';

const PRODUCT_INFO = {
    product_id:'',
}

function DeleteProduct() {

    const [product, setProduct] = useState(PRODUCT_INFO);

    const [success, SetSuccess] = useState(false);

    const showtoast = () => SetSuccess(!success);



    function handleChange(event) {
        const { name, value } = event.target;

        setProduct(prevState => ({ ...prevState, [name]: value }))

    }


    function checkEmpty() {
        const productid = document.getElementById('id');
    
        if (productid.value === "") {
            alert("Please enter the product ID");
            return false;
        }

        return true;
    }

    async function handleSubmit(event) {
        //to prevent refreshing the page
        event.preventDefault()
        if (checkEmpty()) {
            setProduct(PRODUCT_INFO)
           PRODUCT_INFO.product_id = document.getElementById('id').value;
           
            axios({
                method: "POST", 
                url:"http://localhost:5000/admin/deleteProduct", 
                data:  PRODUCT_INFO
              }).then((response)=>{
                if(response.data.Success==true){
                    alert("Product deleted successfully")
                }
                else{
                    alert("The product ID does not exists")
                }
              })
            console.log(PRODUCT_INFO)
            SetSuccess(true)
        }
        else {
            SetSuccess(false);

        }
    }

    return (
        <div className="wrapper">
            <div className="form_area">

                <h1>Delete an existing product</h1>
                <Form method="post">
                    <Form.Group>
                        <input
                            name="id"
                            label="id"
                            placeholder="Product ID"
                            type="number"
                            id="id"
                            className="inp"
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
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
}

export default DeleteProduct;
