import React, { useState } from "react";
import { Modal, Container, Row, Col, Button, Form, Image, Media } from "react-bootstrap";
import "./NewChat.css";
import { Link } from "react-router-dom";

const NewChatUserDetails = (props) => {

    return (
        <>
            <div className="new-chat-user-info-card">
                <div className="new-chat-user-info-cover-img-sec">
                    <Image
                        className="new-chat-user-info-cover-img-sec"
                        src={
                            window.location.origin + "/assets/images/video-call/bg-img.png"
                        }
                    />
                </div>
                <div className="new-chat-user-info-img-sec">
                    <Image
                        className="new-chat-user-info-img"
                        src={
                            window.location.origin + "/assets/images/video-call/user-img.png"
                        }
                    />
                </div>
                <div className="new-chat-user-info-item">
                    <div>
                        <h4>Isabella Olivia
                            <span>
                                <Image
                                    className="sidebar-verified-icon"
                                    src={
                                        window.location.origin + "/assets/images/new-home/verified-icon.png"
                                    }
                                />
                            </span>
                        </h4>
                        <Link to="#">
                            Isabella@olivia.com
                        </Link>
                    </div>
                    <div className="audio-total-count-info-box">
                        <div className="audio-total-count-card">
                            <h5>
                                6,188
                            </h5>
                            <p>POST</p>
                        </div>
                        <div className="audio-total-count-card">
                            <h5>
                                6,188
                            </h5>
                            <p>FANS</p>
                        </div>
                        <div className="audio-total-count-card">
                            <h5>
                                6,188
                            </h5>
                            <p>FOLLOWING</p>
                        </div>
                    </div>
                    <div className="view-details-btn-sec">
                        <Link to="#" className="view-details-btn">
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewChatUserDetails;
