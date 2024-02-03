import React, { useState } from "react";
import { Modal, Container, Row, Col, Button, Form, Image, InputGroup } from "react-bootstrap";
import "./NewChat.css";
import { Link } from "react-router-dom";

const NewChatList = (props) => {

    return (
        <>
            <div className="new-chat-list-sec">
                <div className="new-chat-title-sec">
                    <h2>Chats</h2>
                </div>
                <div className="new-chat-search-sec">
                    <Form>
                        <InputGroup className="mb-0">
                            <Form.Control
                            placeholder="Search"
                            />
                            <InputGroup.Text id="basic-addon2">
                                <Image
                                    className="new-feeds-search-icon"
                                    src={
                                    window.location.origin +
                                    "/assets/images/new-chat/search-icon.svg"
                                    }
                                />
                            </InputGroup.Text>
                        </InputGroup>
                    </Form>
                </div>
                <div className="new-chat-list-wrapper-card">
                    <div className="new-chat-list-box" style={{
                  maxHeight: 'calc(100vh - 190px)',
                  overflowY: 'auto',
                  paddingRight: '1em',
                  marginTop: '2em'
                }}>
                        <div className="new-chat-list-card">
                            <div className="new-chat-list-user-msg-sec">
                                <div className="new-chat-list-user-img-sec">
                                    <Image
                                        className="new-chat-list-user-img"
                                        src={
                                        window.location.origin +
                                        "/assets/images/new-chat/user-1.png"
                                        }
                                    />
                                </div>
                                <div className="new-chat-list-user-msg">
                                    <h4>Anna Bella</h4>
                                    <p>Hey wassup.. whats’s going on..</p>
                                </div>
                            </div>
                            <div className="new-chat-list-notify-sec">
                                <div className="new-chat-list-time-sec">
                                    <p>11:55 PM</p>
                                </div>
                                <div className="new-chat-list-new-msg-notify-sec">
                                    5
                                </div>
                            </div>
                        </div>
                        <div className="new-chat-list-card">
                            <div className="new-chat-list-user-msg-sec">
                                <div className="new-chat-list-user-img-sec">
                                    <Image
                                        className="new-chat-list-user-img"
                                        src={
                                        window.location.origin +
                                        "/assets/images/new-chat/user-2.png"
                                        }
                                    />
                                </div>
                                <div className="new-chat-list-user-msg">
                                    <h4>Anna Bella</h4>
                                    <p>Hey wassup.. whats’s going on..</p>
                                </div>
                            </div>
                            <div className="new-chat-list-notify-sec">
                                <div className="new-chat-list-time-sec">
                                    <p>11:55 PM</p>
                                </div>
                                <div className="new-chat-list-new-msg-notify-sec">
                                    5
                                </div>
                            </div>
                        </div>
                        <div className="new-chat-list-card">
                            <div className="new-chat-list-user-msg-sec">
                                <div className="new-chat-list-user-img-sec">
                                    <Image
                                        className="new-chat-list-user-img"
                                        src={
                                        window.location.origin +
                                        "/assets/images/new-chat/user-3.png"
                                        }
                                    />
                                </div>
                                <div className="new-chat-list-user-msg">
                                    <h4>Anna Bella</h4>
                                    <p>Hey wassup.. whats’s going on..</p>
                                </div>
                            </div>
                            <div className="new-chat-list-notify-sec">
                                <div className="new-chat-list-time-sec">
                                    <p>11:55 PM</p>
                                </div>
                                <div className="new-chat-list-new-msg-notify-sec">
                                    5
                                </div>
                            </div>
                        </div>
                        <div className="new-chat-list-card">
                            <div className="new-chat-list-user-msg-sec">
                                <div className="new-chat-list-user-img-sec">
                                    <Image
                                        className="new-chat-list-user-img"
                                        src={
                                        window.location.origin +
                                        "/assets/images/new-chat/user-4.png"
                                        }
                                    />
                                </div>
                                <div className="new-chat-list-user-msg">
                                    <h4>Anna Bella</h4>
                                    <p>Hey wassup.. whats’s going on..</p>
                                </div>
                            </div>
                            <div className="new-chat-list-notify-sec">
                                <div className="new-chat-list-time-sec">
                                    <p>11:55 PM</p>
                                </div>
                                <div className="new-chat-list-new-msg-notify-sec">
                                    5
                                </div>
                            </div>
                        </div>
                        <div className="new-chat-list-card">
                            <div className="new-chat-list-user-msg-sec">
                                <div className="new-chat-list-user-img-sec">
                                    <Image
                                        className="new-chat-list-user-img"
                                        src={
                                        window.location.origin +
                                        "/assets/images/new-chat/user-5.png"
                                        }
                                    />
                                </div>
                                <div className="new-chat-list-user-msg">
                                    <h4>Anna Bella</h4>
                                    <p>Hey wassup.. whats’s going on..</p>
                                </div>
                            </div>
                            <div className="new-chat-list-notify-sec">
                                <div className="new-chat-list-time-sec">
                                    <p>11:55 PM</p>
                                </div>
                                <div className="new-chat-list-new-msg-notify-sec">
                                    5
                                </div>
                            </div>
                        </div>
                        <div className="new-chat-list-card">
                            <div className="new-chat-list-user-msg-sec">
                                <div className="new-chat-list-user-img-sec">
                                    <Image
                                        className="new-chat-list-user-img"
                                        src={
                                        window.location.origin +
                                        "/assets/images/new-chat/user-6.png"
                                        }
                                    />
                                </div>
                                <div className="new-chat-list-user-msg">
                                    <h4>Anna Bella</h4>
                                    <p>Hey wassup.. whats’s going on..</p>
                                </div>
                            </div>
                            <div className="new-chat-list-notify-sec">
                                <div className="new-chat-list-time-sec">
                                    <p>11:55 PM</p>
                                </div>
                                <div className="new-chat-list-new-msg-notify-sec">
                                    5
                                </div>
                            </div>
                        </div>
                        <div className="new-chat-list-card">
                            <div className="new-chat-list-user-msg-sec">
                                <div className="new-chat-list-user-img-sec">
                                    <Image
                                        className="new-chat-list-user-img"
                                        src={
                                        window.location.origin +
                                        "/assets/images/new-chat/user-7.png"
                                        }
                                    />
                                </div>
                                <div className="new-chat-list-user-msg">
                                    <h4>Anna Bella</h4>
                                    <p>Hey wassup.. whats’s going on..</p>
                                </div>
                            </div>
                            <div className="new-chat-list-notify-sec">
                                <div className="new-chat-list-time-sec">
                                    <p>11:55 PM</p>
                                </div>
                                <div className="new-chat-list-new-msg-notify-sec">
                                    5
                                </div>
                            </div>
                        </div>
                        <div className="new-chat-list-card">
                            <div className="new-chat-list-user-msg-sec">
                                <div className="new-chat-list-user-img-sec">
                                    <Image
                                        className="new-chat-list-user-img"
                                        src={
                                        window.location.origin +
                                        "/assets/images/new-chat/user-8.png"
                                        }
                                    />
                                </div>
                                <div className="new-chat-list-user-msg">
                                    <h4>Anna Bella</h4>
                                    <p>Hey wassup.. whats’s going on..</p>
                                </div>
                            </div>
                            <div className="new-chat-list-notify-sec">
                                <div className="new-chat-list-time-sec">
                                    <p>11:55 PM</p>
                                </div>
                                <div className="new-chat-list-new-msg-notify-sec">
                                    5
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewChatList;
