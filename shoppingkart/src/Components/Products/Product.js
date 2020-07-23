import React from "react";
import { Container, Card } from "react-bootstrap";
import {withRouter} from "react-router-dom";
/**
 @author    Vikash Salvi => B00838074
 **/
class Product extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Container>
                <div className='container-fluid'>
                    <Card>
                        <Card.Img variant="top" src={this.props.img} />
                        <Card.Title className="text-center mt-2">
                            <div onClick={() => 
                                this.props.history.push('/product', {'query': this.props.productID})}>
                                <u>{this.props.text}</u>
                            </div>
                        </Card.Title>
                    </Card>
                </div>
            </Container>
        );
    }
}

export default withRouter(Product);