import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Product from "./Product";
import Axios from "axios";

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list1: []
        }
    }

    async componentDidMount() {
        const products  = await Axios.get("http://localhost:5000/product/getTopProducts" );
        this.setState( {
            list1: products.data.data
        })
    }

    generateProductRow(data) {
        /* Fetch products from backend and generate products dynamically*/
        return (

            <div className="row" >
                {
                    data.map((l) => (
                        <div className="col-md-2 mt-4 ml-4">
                            <Product text={l.productName}
                            img={l.imageURL}
                            productID={l.productID} />
                        </div>
                    ))
                }
            </div>
        );
    }

    render() {
        return (
            <Container>
            <div className="container-fluid">

                {this.generateProductRow(this.state.list1)}
            </div>
            </Container>
        );
    }
}

export default Products;
