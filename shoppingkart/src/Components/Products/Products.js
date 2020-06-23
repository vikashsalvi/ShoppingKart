import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Product from "./Product";

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list1: [
                { "product": "Milk" },
                { "product": "Orange" },
                { "product": "Choclate" },
                { "product": "Apple" }
            ],
            list2: [
                { "product": "Mango" },
                { "product": "Grapes" },
                { "product": "Water" },
                { "product": "Peach" }
            ],
            list3: [
                { "product": "Bread" },
                { "product": "Tomatoes" },
                { "product": "Onion" },
                { "product": "Cabbage" }
            ],
        }
    }

    generateProductRow(data) {
        /* Fetch products from backend and generate products dynamically*/
        return (
            
            <div className="row" >
                {
                    data.map((l) => (
                        <div className="col-md-2 mt-4 ml-4">
                            <Product text={l.product} img={"./static/"+ l.product + ".jpg"} />
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
                {this.generateProductRow(this.state.list2)}
                {this.generateProductRow(this.state.list3)}
                {this.generateProductRow(this.state.list1)}
            </div>
            </Container>
        );
    }
}

export default Products;