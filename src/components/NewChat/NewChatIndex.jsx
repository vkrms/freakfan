import React, { useState } from "react";
import { Modal, Container, Row, Col, Button, Form, Image } from "react-bootstrap";
import "./NewChat.css";
import { Link } from "react-router-dom";
import NewChatList from "./NewChatList";
import NewChatRoom from "./NewChatRoom";
import NewChatUserInfo from "./NewChatUserInfo";

const NewChatIndex = (props) => {

    return (
        <>
            <div className="new-chat-sec">
                <div className="new-chat-box">
                    <NewChatList/>
                    <NewChatRoom/>
                    <NewChatUserInfo/>
                </div>
            </div>
        </>
    );
};

export default NewChatIndex;
