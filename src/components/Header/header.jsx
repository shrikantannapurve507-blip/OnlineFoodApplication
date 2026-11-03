
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Header.css";
import { assets } from "../../assets/assets";

function Header() {
    return (
        <div className="header">

            <Carousel interval={3000}>

                <Carousel.Item>
                    <img
                        src={assets.header_img}
                        className="sliderImg"
                        alt="Grocery shopping banner"
                    />

                    <Carousel.Caption>
                        <h3>Fresh Groceries</h3>
                        <p>Get fresh groceries delivered to your doorstep.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        src={assets.header_img}
                        className="sliderImg"
                        alt="Fresh food banner"
                    />

                    <Carousel.Caption>
                        <h3>Best Quality Products</h3>
                        <p>Shop your favourite products at great prices.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        src={assets.header_img}
                        className="sliderImg"
                        alt="Online grocery delivery banner"
                    />

                    <Carousel.Caption>
                        <h3>Fast Delivery</h3>
                        <p>Order online and enjoy hassle-free delivery.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

        </div>
    );
}

export default Header;
