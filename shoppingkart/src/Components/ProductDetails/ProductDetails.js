import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import Product from '../Products/Product';
import ProdutRating from '../ProductRating/ProductRating';
import ProductSpecifics from '../ProductSpecifics/ProductSpecifics';
import ProductReviews from '../ProductReviews/ProductReviews';
import Footer from '../Footer/Footer';
import Navigation from "../NavBar/NavBar";

class ProductDetails extends Component {
    constructor(props){
        super(props);

        if(this.props.location.search.split("=")[1] === ""){
            this.state = {
                pName:"Product name",
                img:"./static/ProductPlaceHolder.jpg"
            }
        }else{
            this.state = {
                pName:this.props.location.search.split("=")[1],
                img:"./static/"+this.props.location.search.split("=")[1]+".jpg"
            }
        }
        if(this.props.location.search === ""){
            this.state = {
                pName:"Product name",
                img:"./static/ProductPlaceHolder.jpg"
            }
        }
    }

    render() {
        return (

            <div className="wrapper">
                <Container >
                    <div className="row container-fluid">
                        <div className="col-lg-4 col-xs-5 mt-5">
                            <div className="row h-100">
                                <div className="col">
                                    <Product img={this.state.img}/>
                                </div>
                            </div>
                        </div>
                        <div className="ml-4 col-lg-6 col-xs-5 mt-1">
                            <div className="row h-80">
                                <div class="h-50  col" style={{ "marginBottom": "5px" }}>
                                    <div className="mt-5">
                                        <h1 className="display-4">
                                            {
                                                this.state.pName
                                            }
                                        </h1>
                                        <h6 >Product seller</h6>
                                        <h6 className="text-success">In sotck</h6>
                                    </div>
                                </div>
                                <div className="w-100 ml-3 container-fluid" >
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-md-4">
                                                Quantity
                                                <select className="form-control" id="quantitySelectBox">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                            </div>

                                            <div className="col-md-4 mt-3 ml-3">
                                            <button type="button" className="btn btn-outline-primary w-100">Buy now</button>
                                            <button type="button" class="btn btn-outline-primary w-100 mt-4">Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="h-50 col mt-4" >
                                    Product description
                                    <hr />
                                    <p className="h6">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ProductSpecifics />
                    <ProdutRating />
                    <ProductReviews />
                </Container>
                <br />
                <br />
            </div>
        );
    }
}

export default ProductDetails;
