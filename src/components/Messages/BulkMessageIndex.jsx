import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { Form, Button, Container, Row, Col,Image } from "react-bootstrap";
import "../Accounts/Payments/AddBankIndex.css";
import { sendBulkMessageStart } from "../../store/actions/ChatAction";
import { translate, t } from "react-multi-lang";
import { getErrorNotificationMessage } from "../helper/NotificationMessage";
import { createNotification } from "react-redux-notify/lib/modules/Notifications";
import { Link } from "react-router-dom";

const BulkMessageIndex = (props) => {
  const [inputData, setInputData] = useState({});

  const [image, setImage] = useState({ previewImage: "" });
  const [videoTitle, setVideoTitle] = useState("");

  const [fileUploadStatus, setFileUploadStatus] = useState(false);

  const [videoThumbnail, setVideoThumbnail] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.dispatch(sendBulkMessageStart(inputData));
  };

  const handleChangeImage = (event, fileType) => {
    if (event.currentTarget.type === "file") {
      setInputData({
        ...inputData,
        [event.currentTarget.name]: event.currentTarget.files[0],
        file_type:'image'
      });
      setFileUploadStatus(true);
      let reader = new FileReader();
      let file = event.currentTarget.files[0];
      reader.onloadend = () => {
        setImage({ ...image, previewImage: reader.result });
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    }
  };

  const handleChangeVideo = (event, fileType) => {
    setVideoTitle(event.currentTarget.files[0].name);
    if (event.currentTarget.type === "file") {
      setInputData({
        ...inputData,
        [event.currentTarget.name]: event.currentTarget.files[0],
        file_type:fileType
      });
      setFileUploadStatus(true);
      let reader = new FileReader();
      let file = event.currentTarget.files[0];

      if (file) {
        reader.readAsDataURL(file);
      }
      if(fileType == 'video')
        setVideoThumbnail(true);
        reader.onloadend = () => {
            setImage({ ...image, previewImage: reader.result });
        };

    }
  };

  const imageClose = (event) => {
    event.preventDefault();
    setImage({ previewImage: "" });
    setFileUploadStatus(false);
  };

  const videoClose = (event) => {
    event.preventDefault();
    setImage({ previewImage: "" });
    setFileUploadStatus(false);
    setVideoTitle("");
  };

  return (
    <div className="card-list-sec create-post">
      <Container>
        <h4 className="head-title">{t("send_bulk_message")}</h4>
        <Row>
          <Col sm={12} md={12}>
            <div className="add-bank-box bulk-message-padding">
              <Form onSubmit={handleSubmit}>
                <Col sm={6} md={6}>
                    <div className="post-group-btn-sec">
                        <Form.Group className="sent-tip-modal">
                            <Form.Label>Subscription Type: (*)</Form.Label>
                            {["radio"].map((type) => (
                            <div key={`custom-inline-${type}`} className="mb-3">
                                <Form.Check
                                    custom
                                    inline
                                    label="Yearly Subscribers"
                                    type={type}
                                    id="years"
                                    value="years"
                                    name="plan_type"
                                    onChange={(event) =>
                                        setInputData({
                                        ...inputData,
                                        plan_type: event.currentTarget.value,
                                        })
                                    }
                                />
                                <Form.Check
                                    custom
                                    inline
                                    label="Monthly Subscribers"
                                    type={type}
                                    id="months"
                                    value="months"
                                    name="plan_type"
                                    onChange={(event) =>
                                        setInputData({
                                        ...inputData,
                                        plan_type: event.currentTarget.value,
                                        })
                                    }
                                />
                            </div>
                            ))}
                        </Form.Group>
                    </div>
                </Col>
                <Col sm={6} md={6}>
                    <div className="post-group-btn-sec">
                        <Form.Group className="sent-tip-modal">
                            <Form.Label>Subscribers: (*)</Form.Label>
                            {["radio"].map((type) => (
                            <div key={`custom-inline-${type}`} className="mb-3">
                                <Form.Check
                                    custom
                                    inline
                                    label="All Subscribers"
                                    type={type}
                                    id="all"
                                    value="2"
                                    name="subscription_type"
                                    onChange={(event) =>
                                        setInputData({
                                        ...inputData,
                                        subscription_type: event.currentTarget.value,
                                        })
                                    }
                                />
                                <Form.Check
                                    custom
                                    inline
                                    label="Active Subscribers"
                                    type={type}
                                    id="active"
                                    value="1"
                                    name="subscription_type"
                                    onChange={(event) =>
                                        setInputData({
                                        ...inputData,
                                        subscription_type: event.currentTarget.value,
                                        })
                                    }
                                />
                            </div>
                            ))}
                        </Form.Group>
                    </div>
                </Col>
                <Col md={12}>
                  <Form.Group controlId="formHorizontalNickname">
                    <Form.Label>{t("message")}: (*)</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Message"
                      name="message"
                      onChange={(event) => {
                        setInputData({
                          ...inputData,
                          message: event.currentTarget.value,
                        });
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <div className="left-half post-write">
                    <Button>
                      <Form.Group className="mb-0">
                        <Form.Control
                          id="fileupload_photo"
                          type="file"
                          accept=".gif,.jpg,.jpeg,.gif,.png,.jpg,.jpeg,.png"
                          onChange={(event) => handleChangeImage(event, "image")}
                          name="file"
                        />
                        <Form.Label
                          id="attach_file_photo"
                          for="fileupload_photo"
                          className="chat-attach_file"
                          data-original-title="null"
                        >
                          <Image
                            src="assets/images/icons/gallery.svg"
                            className="svg-clone"
                          />
                        </Form.Label>
                      </Form.Group>
                    </Button>
                    <Button>
                      <Form.Group className="mb-0">
                        <Form.Control
                          id="fileupload_video"
                          type="file"
                          accept="video/mp4,video/x-m4v,video/*"
                          onChange={(event) => handleChangeVideo(event, "video")}
                          name="file"
                        />
                        <Form.Label
                          id="attach_file_video"
                          for="fileupload_video"
                          className="chat-attach_file"
                          data-original-title="null"
                        >
                          <Image
                            src="assets/images/icons/video.svg"
                            className="svg-clone"
                          />
                        </Form.Label>
                      </Form.Group>
                    </Button>
                    <Button>
                        <Form.Group
                            className="mb-0"
                            controlId="formFileDisabled"
                        >
                            <Form.Control
                                id="fileupload_audio"
                                type="file"
                                accept="audio/mp3,audio/*"
                                onChange={(event) =>
                                    handleChangeVideo(event, "audio")
                                }
                                name="file"
                            />
                                <Form.Label
                                    id="attach_file_audio"
                                    for="fileupload_audio"
                                    className="chat-attach_file"
                                    data-original-title="null"
                                >
                                <Image
                                    src="assets/images/post/post-audio-upload.svg"
                                    className="svg-clone"
                                />
                            </Form.Label>
                        </Form.Group>
                    </Button>
                    {videoTitle !== "" ? (
                      <div className="post-title-content">
                        <h4>{videoTitle}</h4>
                      </div>
                    ) : null}
                  </div>
                </Col>
                {image.previewImage !== "" && inputData.file_type == 'image' ? (
                  <Col sm={12} md={3}>
                    <div className="post-img-preview-sec">
                      <Link to="#" onClick={imageClose}>
                        <i className="far fa-times-circle"></i>
                      </Link>
                      <Image
                        alt="#"
                        src={image.previewImage}
                        className="post-video-preview"
                      />
                    </div>
                  </Col>
                ) : image.previewImage !== "" && inputData.file_type == 'video' ? (
                    <Col sm={12} md={4}>
                        <Link to="#" onClick={videoClose}>
                            <i className="far fa-times-circle"></i>
                        </Link>
                        <div className="post-img-preview-sec">
                            <video
                                controls
                                id="myVideo"
                                className="user-profile1 w-100"
                            >
                                <source src={image.previewImage} type="video/mp4" />
                            </video>
                        </div>
                    </Col>
                ) : image.previewImage !== "" && inputData.file_type == 'audio' ? (
                    <Col sm={12} md={4}>
                        <Link to="#" onClick={videoClose}>
                            <i className="far fa-times-circle"></i>
                        </Link>
                        <div className="post-img-preview-sec">
                            <audio
                                controls
                                id="audio"
                                className="user-profile1 w-100"
                            >
                                <source src={image.previewImage} type="audio/mp4" />
                            </audio>
                        </div>
                    </Col>
                ) : ''}
                <div className="edit-save">
                  <Button
                    className="save-btn"
                    type="submit"
                    disabled={props.bulkMessages.buttonDisable}
                  >
                    {props.bulkMessages.loadingButtonContent !== null
                      ? props.bulkMessages.loadingButtonContent
                      : t("send")}
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToPros = (state) => ({
  bulkMessages: state.chat.bulkMessages,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(translate(BulkMessageIndex));
