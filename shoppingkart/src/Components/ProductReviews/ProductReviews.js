import React,{Component} from 'react';
import userImage from './static/img/user.png'
import { Container, Table, Card,Col,Image } from 'react-bootstrap';

class ProductReviews extends Component {
    render() {
        return (
            <div className="wrapper mt-5">
                <Container>
                    <Card>
                        <Card.Header>Reviews</Card.Header>
                        <Card.Body>
                            <div className="row">
                                <div className="col-sm">
                                    <Table striped bordered hover>
                                        <tbody>
                                            <tr>
                                                <Col className="text-center mt-1">
                                                    <Image style={{"width":"40px","height":"40px"}} 
                                                    src={userImage} roundedCircle 
                                                    fluid/>
                                                    <p>User A</p>
                                                </Col>
                                                <td>Lorem Ipsum is simply dummy text</td>
                                            </tr>
                                            <tr>
                                                <Col className="text-center mt-1">
                                                    <Image style={{"width":"40px","height":"40px"}} 
                                                    src={userImage} roundedCircle 
                                                    fluid/>
                                                    <p>User B</p>
                                                </Col>
                                                <td>Lorem Ipsum is simply dummy text</td>
                                            </tr>
                                            <tr>
                                                <Col className="text-center mt-1">
                                                    <Image style={{"width":"40px","height":"40px"}} 
                                                    src={userImage} roundedCircle 
                                                    fluid/>
                                                    <p>User C</p>
                                                </Col>
                                                <td>Lorem Ipsum is simply dummy text</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>

                            </div>

                        </Card.Body>
                    </Card>
                </Container>
            </div>
        );
    }
}

export default ProductReviews;