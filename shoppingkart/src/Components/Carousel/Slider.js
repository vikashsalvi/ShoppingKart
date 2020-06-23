import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "./images/slider1.jpg";
import slider2 from "./images/slider2.jpg";
import slider3 from "./images/slider3.jpg";
import "./Slider.css";
import "bootstrap/dist/css/bootstrap.min.css";


class Slider extends Component {
    render() {
      return (<div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 imgStyle"
              src={slider1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 imgStyle"
              src={slider2}
              alt="second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 imgStyle"
              src={slider3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl
                consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      );
    }
}

export default Slider;