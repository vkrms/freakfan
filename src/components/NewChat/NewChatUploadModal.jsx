import React from "react";
import { Form, Button, Image, Modal, Tab, Row, Col, Nav, FormCheck, InputGroup } from "react-bootstrap";

const NewChatUploadModal = (props) => {
    return (
        <>
            <Modal
                className="modal-dialog-center chat-upload-modal"
                size="md"
                centered
                show={props.newChatUpload}
                onHide={props.closeNewChatUploadModal}
            >
                <Button className="modal-close" onClick={() => props.closeNewChatUploadModal()}>
                    <Image
                        className="close-icon"
                        src={
                            window.location.origin + "/assets/images/new-chat/modal-close.svg"
                        }
                    />
                </Button>
                <Modal.Body>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="images">
                        <Row>
                            <Col sm={12}>
                                <Nav variant="pills">
                                    <Nav.Item>
                                        <Nav.Link eventKey="images">Images</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="videos">Videos</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="music">Music</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={12}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="images">
                                        {/* <div className="upload-img-card">
                                            <div className="upload-btn-sec">
                                                <div className="upload-btn-wrapper">
                                                    <button className="btn">
                                                        <span>
                                                            <Image
                                                                className="upload-icon"
                                                                src={
                                                                    window.location.origin + "/assets/images/new-chat/upload.svg"
                                                                }
                                                            />
                                                        </span>
                                                        Upload a file
                                                    </button>
                                                    <input type="file" name="myfile" />
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="upload-multiple-img-preview">
                                            <div className="upload-multiple-img-box">
                                                <div className="upload-multiple-img-card">
                                                    <Image
                                                        className="image-preview-select-img"
                                                        src={
                                                            window.location.origin + "/assets/images/new-chat/image-preview-1.png"
                                                        }
                                                    />
                                                    <div className="upload-multiple-img-close">
                                                        <Button className="icon-close-img">
                                                            <Image
                                                                className="close-icon"
                                                                src={
                                                                    window.location.origin + "/assets/images/new-chat/modal-close.svg"
                                                                }
                                                            />
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div className="upload-multiple-img-card">
                                                    <Image
                                                        className="image-preview-select-img"
                                                        src={
                                                            window.location.origin + "/assets/images/new-chat/image-preview-2.png"
                                                        }
                                                    />
                                                    <div className="upload-multiple-img-close">
                                                        <Button className="icon-close-img">
                                                            <Image
                                                                className="close-icon"
                                                                src={
                                                                    window.location.origin + "/assets/images/new-chat/modal-close.svg"
                                                                }
                                                            />
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div className="upload-multiple-img-card">
                                                    <Image
                                                        className="image-preview-select-img"
                                                        src={
                                                            window.location.origin + "/assets/images/new-chat/image-preview-3.png"
                                                        }
                                                    />
                                                    <div className="upload-multiple-img-close">
                                                        <Button className="icon-close-img">
                                                            <Image
                                                                className="close-icon"
                                                                src={
                                                                    window.location.origin + "/assets/images/new-chat/modal-close.svg"
                                                                }
                                                            />
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div className="upload-multiple-img-card">
                                                    <Image
                                                        className="image-preview-select-img"
                                                        src={
                                                            window.location.origin + "/assets/images/new-chat/image-preview-4.png"
                                                        }
                                                    />
                                                    <div className="upload-multiple-img-close">
                                                        <Button className="icon-close-img">
                                                            <Image
                                                                className="close-icon"
                                                                src={
                                                                    window.location.origin + "/assets/images/new-chat/modal-close.svg"
                                                                }
                                                            />
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div className="upload-multiple-img-card">
                                                    <Image
                                                        className="image-preview-select-img"
                                                        src={
                                                            window.location.origin + "/assets/images/new-chat/image-preview-5.png"
                                                        }
                                                    />
                                                    <div className="upload-multiple-img-close">
                                                        <Button className="icon-close-img">
                                                            <Image
                                                                className="close-icon"
                                                                src={
                                                                    window.location.origin + "/assets/images/new-chat/modal-close.svg"
                                                                }
                                                            />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="upload-add-img-sec">
                                                <div className="upload-btn-wrapper">
                                                    <button className="btn">
                                                        <span>
                                                            <Image
                                                                className="upload-icon"
                                                                src={
                                                                    window.location.origin + "/assets/images/new-chat/upload.svg"
                                                                }
                                                            />
                                                        </span>
                                                        Add Images
                                                    </button>
                                                    <input type="file" name="myfile" />
                                                </div>
                                            </div>
                                        </div>
                                        <Form className="upload-amount-form-sec">
                                            <div className="upload-amount-form">
                                                <Form.Check
                                                    type="checkbox"
                                                    id="customControlAutosizing"
                                                    label="Enter Amount"
                                                    custom
                                                />
                                                <Form.Group controlId="formBasicEmail" className="mb-0">
                                                    <Form.Control type="text" placeholder="23.54 $" />
                                                </Form.Group>
                                            </div>
                                            <div className="upload-desc-input-sec">
                                                <div className="upload-desc-form">
                                                    <InputGroup className="mb-0">
                                                        <InputGroup.Text>
                                                            <Image
                                                                className="new-feed-wishlist-icon"
                                                                src={
                                                                    window.location.origin + "/assets/images/feed-story/comments-emoji.svg"
                                                                }
                                                            />
                                                        </InputGroup.Text>
                                                        <Form.Control aria-label="Amount (to the nearest dollar)" placeholder="Type something" />
                                                        <InputGroup.Text>
                                                            <Image
                                                                className="new-feed-wishlist-icon"
                                                                src={
                                                                    window.location.origin + "/assets/images/feed-story/comments-send.svg"
                                                                }
                                                            />
                                                        </InputGroup.Text>
                                                    </InputGroup>
                                                </div>
                                            </div>
                                        </Form>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="videos">

                                    </Tab.Pane>
                                    <Tab.Pane eventKey="music">

                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default NewChatUploadModal;