import React,{Component} from 'react';
import userImage from './static/img/user.png'
import { Container, Table, Card,Col,Image } from 'react-bootstrap';

class ProductReviews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productReviews: []
        }
        this.addReviews=this.addReviews.bind(this)
    }

    async componentDidMount() {
        let id = this.props.productId + ""
        const productData = await Axios.get("http://localhost:5000/review/getProductReview/" + id);
        this.setState({
            productReviews: productData.data.data[0].productDetails
        })
    }

    addReviews() {
        let rows = [];
        let reviews = this.state.productReviews;
        for (let i = 0; i < reviews.length; i++) {
            rows.push(
                    <tr>
                        <Col className="text-center mt-1">
                            <Image style={{"width":"40px","height":"40px"}} 
                            src={userImage} roundedCircle 
                            fluid/>
                            /**Fetch user and display user name based on user id i.e. reviews[i].userId */
                            <p>User A</p>
                        </Col>
                        <td>{reviews[i].productDescription}</td>
                    </tr>  
            );
        }
        
        return rows
    }

    render() {
        return (
            <div className="mt-5">
                <Container>
                    <Card>
                        <Card.Header>Reviews</Card.Header>
                        <Card.Body>
                            <div className="row">
                                <div className="col-sm">
                                    <Table striped bordered hover>
                                        <tbody>
                                            {this.addReviews()}
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