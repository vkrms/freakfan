import React, { useState } from "react";
import { Modal, Container, Row, Col, Button, Form, Image, Media } from "react-bootstrap";
import "./NewChat.css";
import { Link } from "react-router-dom";
import FancyBox from "../NewHome/NewSingleView/FancyBox";

const NewChatUserMedia = (props) => {

    return (
        <>
           <div className="new-chat-user-media-sec">
                <div className="new-chat-user-media-header-sec">
                    <h4>Media Files</h4>
                </div>
                <FancyBox>
                <div className="new-chat-user-media-box">
                    <div className="new-chat-user-media-card">
                        <div className="new-chat-user-media-img-sec">
                            <Image
                                className="new-chat-user-media-img"
                                src={
                                window.location.origin +
                                "/assets/images/new-chat/media-1.png"
                                }
                                data-fancybox
                            />
                            <div className="new-chat-user-media-video-icon-sec">
                                <Image 
                                    src={ window.location.origin + "/assets/images/new-home/icon/video-icon.png" } 
                                    className="new-chat-user-media-video-icon"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="new-chat-user-media-card">
                        <div className="new-chat-user-media-img-sec">
                            <Image
                                className="new-chat-user-media-img"
                                src={
                                window.location.origin +
                                "/assets/images/new-chat/media-2.png"
                                }
                                data-fancybox
                            />
                        </div>
                    </div>
                    <div className="new-chat-user-media-card">
                        <div className="new-chat-user-media-img-sec">
                            <Image
                                className="new-chat-user-media-img"
                                src={
                                window.location.origin +
                                "/assets/images/new-chat/media-3.png"
                                }
                                data-fancybox
                            />
                            <div className="new-chat-user-media-video-icon-sec">
                                <Image 
                                    src={ window.location.origin + "/assets/images/new-home/icon/audio-icon.png" } 
                                    className="new-chat-user-media-video-icon"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                </FancyBox>
           </div>
        </>
    );
};

export default NewChatUserMedia;
