import React, { useState } from "react";
import { Modal, Container, Row, Col, Button, Form, Image, Tab, Nav, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./WhyFreakFan.css";

const WhyFreakFan = (props) => {
    return (
        <div className="whyfreakfan-main-wapper">
            <div className="whyfreakfan-inner-wapper">
                <Container>
                    <div className="whyfreakfan-top">
                        <div className="whyfreakfan-content-wapper">
                            <div className="whyfreakfan-logo">
                            <Link to="/" >
                                <Image
                                    src="assets/images/whyfreakfan/whyfreakfan-logo.png"
                                    className="whyfreakfanlogo"
                                    rounded
                                />
                            </Link>
                            </div>
                            <div className="whyfreakfan-content">
                                <h2>Why be a Freak ?</h2>
                                <ul>
                                    <li>Take 90 % of what you make</li>
                                    <li>We make sure your content is safe</li>
                                    <li>Receive payment in our own crypto currency</li>
                                    <li>You tell us when you want to be payed</li>
                                    <li>We are here for you 0-24</li>
                                    <li>Be part of the 0.001% of top creators</li>
                                </ul>
                                <Link className="be_a_freak" to="/register" id="signup">
                                    Be a Freak
                                    <Image
                                        src="assets/images/whyfreakfan/buttom-left.png"
                                        className="primary-icon"
                                        rounded
                                    />      
                                </Link>                                
                            </div>
                            <div className="background-text">
                                <Image
                                    src="assets/images/whyfreakfan/bg-text.png"
                                    className="primary-icon"
                                    rounded
                                />
                            </div>
                        </div>
                        <div className="whyfreakfan-image">
                            <Image
                                src="assets/images/whyfreakfan/whyfreakfan-bg1.png"
                                className="bg-image"
                                rounded
                            />
                        </div>
                    </div>

                    <div className="whyfreakfan-border">
                        <Image
                            src="assets/images/whyfreakfan/bg-line.png"
                            className="whyfreakfanborder"
                            rounded
                        />
                    </div>

                    <div className="whyfreakfan-bottom">
                        <div className="whyfreakfan-bottom-image">
                            <Image
                                src="assets/images/whyfreakfan/whyfreakfan-bg2.png"
                                className="whyfreakfanborder"
                                rounded
                            />
                        </div>
                        <div className="whyfreakfan-bottom-content-wapper">
                            <div className="whyfreakfan-logo">
                                <Image
                                    src="assets/images/whyfreakfan/whyfreakfan-logo-bottom.png"
                                    className="whyfreakfanlogo"
                                    rounded
                                />
                            </div>
                            <div className="whyfreakfan-bottom-content">
                                <h2>Why be a Fan ?</h2>
                                <ul>
                                    <li>Only verified performers</li>
                                    <li>Only the top 0.001% of performers</li>
                                    <li>Luxury environment</li>
                                    <li>Explore page for you to find the best freaks</li>
                                    <li>Freaks like you have never seen them before</li>
                                    <li>100% scam protection</li>
                                    <li>0-24 hours support </li>
                                </ul>
                                <Link className="be_a_freak" to="/register" id="signup">
                                    Be a Fan
                                    <Image
                                        src="assets/images/whyfreakfan/buttom-left.png"
                                        className="primary-icon"
                                        rounded
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default WhyFreakFan;
