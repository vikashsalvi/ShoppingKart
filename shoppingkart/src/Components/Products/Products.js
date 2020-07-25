import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Product from "./Product";
import Axios from "axios";

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            list1:[],
            list2:[],
            list3:[]
        }
    }

    shuffle(array) {
        let counter = array.length;
    
        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);
    
            // Decrease counter by 1
            counter--;
    
            // And swap the last element with it
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
    
        return array;
    }

    async componentDidMount() {
        const products  = await Axios.get("http://localhost:5000/product/getTopProducts" );
        this.setState( {
            list: products.data.data
        })
        this.setState({
            list: this.shuffle(this.state.list)
        })
        for(let i=0;i<this.state.list.length;i++){
            if(i<=3){
                this.setState( {
                    list1: this.state.list1.concat(this.state.list[i])
                })
            }else if(i>=4 && i<=7){
                this.setState( {
                    list2: this.state.list2.concat(this.state.list[i])
                })
            }
            else if(i>=8 && i<12){
                this.setState( {
                    list3: this.state.list3.concat(this.state.list[i])
                })
            }
        }
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
                {this.generateProductRow(this.state.list2)}
                {this.generateProductRow(this.state.list3)}
            </div>
            </Container>
        );
    }
}

export default Products;
