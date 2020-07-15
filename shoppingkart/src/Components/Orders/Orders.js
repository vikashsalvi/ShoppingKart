import React,{Component} from 'react'
import Container from 'react-bootstrap/Container';
import productImage from '../static/img/ProductPlaceHolder.jpg'
import { Table, Card, Col, Image, Button } from 'react-bootstrap';
import './order.css'

class Orders extends Component {

    render() {
        return (
            <div className="wrapper">
                <Container className="mt-4">
                    <Card>
                        <p></p>
                        <Card.Header><p className="display-4">Your orders</p></Card.Header>
                        <Card.Body>
                            <div className="row">
                                <div className="col-sm">
                                    <Table striped bordered hover>
                                        <tbody>
                                            <tr>
                                                <td>Order Placed <p> Delivered, Jun 10,2020</p></td>
                                                <td>Total amount<p> $##,###</p></td>
                                                <td>Order Number <p> ########</p></td>
                                            </tr>
                                            <tr>
                                                <p className="font-weight-bold ml-2">Ongoing order</p>
                                                <Col className="text-center mt-1">
                                                    <Image style={{ "width": "100px", "height": "100px" }}
                                                        src={productImage}
                                                        fluid />
                                                </Col>
                                                <td>
                                                    <p>Product title</p>
                                                    <p>Product description: Lorem Ipsum is simply dummy text</p></td>
                                                <td>
                                                    <Button className="buts" variant="dark">Track package</Button>

                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>

                                    <Table striped bordered hover>
                                        <tbody>
                                            <tr>
                                                <td>Order delivered </td>
                                                <td>Total amount <p>$##,###</p></td>
                                                <td>Order Number <p> ########</p></td>
                                            </tr>
                                            <tr>
                                                <p className="font-weight-bold ml-2">Delivered, May 10,2020</p>
                                                <Col className="text-center mt-1">
                                                    <Image style={{ "width": "100px", "height": "100px" }}
                                                        src={productImage}
                                                        fluid />
                                                </Col>
                                                <td>
                                                    <p>Product title</p>
                                                    <p>Product description: Lorem Ipsum is simply dummy text</p></td>
                                                <td>
                                                    <Button className="buts" variant="dark">Return order</Button>
                                                    <br/>
                                                    <Button variant="dark" className="buts mt-2">Provide review</Button>
                                                    <br />
                                                    <Button variant="dark" className="buts mt-2">Buy again</Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>

                                    <Table striped bordered hover>
                                        <tbody>
                                            <tr>
                                                <td>Order delivered</td>
                                                <td>Total amount <p>$##,###</p></td>
                                                <td>Order Number <p> ########</p></td>
                                            </tr>
                                            <tr>
                                                <p className="font-weight-bold ml-2">Delivered, Apr 10,2020</p>
                                                <Col className="text-center mt-1">
                                                    <Image style={{ "width": "100px", "height": "100px" }}
                                                        src={productImage}
                                                        fluid />
                                                </Col>
                                                <td>
                                                    <p>Product title</p>
                                                    <p>Product description: Lorem Ipsum is simply dummy text</p></td>
                                                <td>
                                                    <Button className="buts" variant="dark">Return order</Button>
                                                    <br/>
                                                    <Button className="buts mt-2">Provide review</Button>
                                                    <br />
                                                    <Button className="buts mt-2">Buy again</Button>
                                                </td>
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

export default Orders;
