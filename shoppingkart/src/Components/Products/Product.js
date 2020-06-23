import React from "react";
import { Container, Card } from "react-bootstrap";

class Product extends React.Component {
    render() {
        return (
            <Container>
                <div className='container-fluid'>
                    <Card>
                        <Card.Img variant="top" src={require(""+this.props.img)} />
                        <Card.Title className="text-center mt-2">
                            <a href={"/product?name="+ this.props.text }>{this.props.text}</a>
                        </Card.Title>
                    </Card>
                </div>
            </Container>
        );
    }
}

export default Product;