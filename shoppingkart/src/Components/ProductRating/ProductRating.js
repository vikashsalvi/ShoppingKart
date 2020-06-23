import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import './ProductRating.css';
import AddReview from '../ProductReviews/AddReview'

class ProductDetails extends Component {

    render() {
        return (
            <div className="wrapper">
                <Container>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <div className="content text-center">
                                    <div className="ratings">
                                        <span className="product-rating">4.6</span><span>/5</span>
                                        <div class="stars">
                                            <FontAwesomeIcon icon={faStar} style={{ "color": "orange" }} />
                                            <FontAwesomeIcon icon={faStar} style={{ "color": "orange" }} />
                                            <FontAwesomeIcon icon={faStar} style={{ "color": "orange" }} />
                                            <FontAwesomeIcon icon={faStar} style={{ "color": "orange" }} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                        <div className="rating-text">
                                            <span>46 ratings & 15 reviews</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="content text-center">
                                    <div className="ratings">
                                        <div className="text-center">
                                            <AddReview />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

        );
    }
}
export default ProductDetails