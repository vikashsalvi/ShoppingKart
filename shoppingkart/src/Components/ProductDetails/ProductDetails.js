import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import Product from '../Products/Product';
import ProductRating from '../ProductRating/ProductRating';
import ProductSpecifics from '../ProductSpecifics/ProductSpecifics';
import ProductReviews from '../ProductReviews/ProductReviews';
import Axios from "axios";

/**
 @author    Vikash Salvi => B00838074
 **/

let myStorage = window.localStorage;
let productArray;
let productID;

class ProductDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            productName: "",
            productDescription: "",
            productUrl: "",
            productQuantity: 0,
            productPrice: 0
        };
        console.log(props)
    }

    async componentDidMount() {
        console.log("Id " + this.props.location.state.query);
        const productData  = await Axios.get("http://localhost:5000/product/getProductDetails/" + this.props.location.state.query);
        this.setState( {
            productName: productData.data.data[0].productName,
            productDescription: productData.data.data[0].productDescription,
            productUrl: productData.data.data[0].imageUrl,
            productQuantity: productData.data.data[0].productQuantity,
            productPrice: productData.data.data[0].productPrice
        })
    }

    onDropdownSelected(e) {
        console.log("Quantity ", e.target.value);
    }
    
    createSelectuantity() {
        let items = [];
        let counter = 5;
        let start = 1;
        if(this.state.productQuantity < 5 ){
            counter = this.state.productQuantity
        }
        if(this.state.productQuantity == 0){
            start = 0
        }         
        for (let i = start; i <= counter; i++) {             
             items.push(<option key={i} value={i}>{i}</option>);
        }
        return items;
    } 

    getStockText(){
        if(this.state.productQuantity === 0 ){
            return <h6 className="text-danger">No stock left</h6>
        }else{
        return <h6 className="text-success">In sotck, Quantity left: {this.state.productQuantity}</h6>
        }
    }

    getPurchaseButtons(){
        let list = []
        if(this.state.productQuantity === 0 ){
            list.push(<button type="button" className="btn btn-outline-primary w-100" disabled>Buy now</button>);        
            list.push(<button type="button" class="btn btn-outline-primary w-100 mt-4" disabled>Add to cart</button>);
        }else{
            list.push(<button type="button" className="btn btn-outline-primary w-100">Buy now</button>);          
            list.push(<button type="button" class="btn btn-outline-primary w-100 mt-4" onClick ={() => this.addItemsToCart()}>Add to cart</button>)
        }
        return list;
    }

    addItemsToCart(){
        productArray = myStorage.getItem('tempCart')? JSON.parse(myStorage.getItem('tempCart')) : []; 
        productID = myStorage.getItem('id') ? JSON.parse(myStorage.getItem('id'))+1 : 0;
        productArray.push({
            id: productID,
            name: this.state.productName,
            img:this.state.productUrl,
            quantity: parseInt(document.getElementById("quantitySelectBox").value),
            price: this.state.productPrice,
            totalPrice: 0
        });
        productArray[productArray.length - 1].totalPrice = productArray[productArray.length - 1].price * productArray[productArray.length - 1].quantity;
        myStorage.setItem('tempCart', JSON.stringify(productArray));
        myStorage.setItem('id', productID);
    }

    render() {
        return (

            <div className="wrapper">
                <Container >
                    <div className="row container-fluid">
                        <div className="col-lg-4 col-xs-5 mt-5">
                            <div className="row h-100">
                                <div className="col">
                                    <Product img={this.state.productUrl}/>
                                </div>
                            </div>
                        </div>
                        <div className="ml-4 col-lg-6 col-xs-5 mt-1">
                            <div className="row h-80">
                                <div class="h-50  col" style={{ "marginBottom": "5px" }}>
                                    <div className="mt-5">
                                        <h1 className="display-4">
                                            {
                                                this.state.productName
                                            }
                                        </h1>
                                        {this.getStockText()}
                                        
                                    </div>
                                </div>
                                <div className="w-100 ml-3 container-fluid" >
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-md-4">
                                                Quantity
                                                <select className="form-control"
                                                onChange={this.onDropdownSelected} 
                                                id="quantitySelectBox">
                                                    {this.createSelectuantity()}
                                                </select>
                                            </div>

                                            <div className="col-md-4 mt-3 ml-3">
                                                {this.getPurchaseButtons()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="h-50 col mt-4" >
                                    <h4>Product price: &nbsp;$
                                    {this.state.productPrice}
                                    </h4>
                                    <br />
                                    Product description:
                                    <hr />
                                    <p className="h6">
                                        {
                                            this.state.productDescription
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ProductSpecifics productId={this.props.location.state.query}/>
                    <ProductRating />
                    <ProductReviews />
                </Container>
                <br />
                <br />
            </div>
        );
    }
}

export default ProductDetails;
