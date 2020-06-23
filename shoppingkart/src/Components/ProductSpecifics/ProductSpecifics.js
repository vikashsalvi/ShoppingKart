import React,{Component} from 'react';
import { Container, Table } from 'react-bootstrap';

class ProductSpecifics extends Component {
    render() {
        return (
            <div className=" mt-5">
                <Container>
                    <div className="container">
                        <div className="text-center">
                            <h2>Product details</h2>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <Table striped bordered hover>
                                    <tbody>
                                        <tr>
                                            <td className="font-weight-bold">Size</td>
                                            <td>Lorem Ipsum is simply dummy text</td>
                                        </tr>
                                        <tr>
                                            <td className="font-weight-bold">Weight</td>
                                            <td>Lorem Ipsum is simply dummy text</td>
                                        </tr>
                                        <tr>
                                            <td className="font-weight-bold">Feature</td>
                                            <td>Lorem Ipsum is simply dummy text</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div className="col-sm">
                                <Table striped bordered hover>
                                    <tbody>
                                        <tr>
                                            <td className="font-weight-bold">Size</td>
                                            <td>Lorem Ipsum is simply dummy text</td>
                                        </tr>
                                        <tr>
                                            <td className="font-weight-bold">Weight</td>
                                            <td>Lorem Ipsum is simply dummy text</td>
                                        </tr>
                                        <tr>
                                            <td className="font-weight-bold">Feature</td>
                                            <td>Lorem Ipsum is simply dummy text</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default ProductSpecifics;