import React from "react";
import { Button, Container, Row, Col, Image, Form } from "react-bootstrap";
import { getErrorNotificationMessage } from "../helper/NotificationMessage";
import { Link } from "react-router-dom";
import configuration from "react-global-configuration";
import { translate, t } from "react-multi-lang";
import { Formik, Form as FORM, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { forgotPasswordStart } from "../../store/actions/UserAction";
import ReactPlayer from 'react-player';

const ForgotPassword = (props) => {

  const forgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required *"),
  });

  const handleForgotPassword = (values) => {
    props.dispatch(forgotPasswordStart(values));
  };

  return (
    <>
      <div className="new-login-page-sec new-forgot-password-sec">
      <video
          className="bg-video-desktop"
          autoplay="true"
          loop="true"
          muted="true"
          playsInline
          preload="auto"
          playing="true"
        >
          <source src="assets/images/bg-video-desktop.mp4" type="video/mp4" />
        </video>
        <video
          className="bg-video-mobile"
          autoplay="true"
          loop="true"
          muted="true"
          playsInline
          preload="auto"
          playing="true"
        >
          <source src="assets/images/bg-video-mobile.mp4" type="video/mp4" />
        </video>
        <div className="new-login-form">
          {/* <Link to="#" aria-current="page" className="sign-in-logo">
            <Image
              src={configuration.get("configData.site_logo")}
              width="237"
            />
          </Link>
          <p className="login-tagline">
            {configuration.get("configData.tag_name")}
          </p> */}
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={forgotPasswordSchema}
            onSubmit={(values) => handleForgotPassword(values)}
          >
            {({
              touched,
              errors,
              isSubmitting,
              setFieldValue,
            }) => (
              <FORM className="form-auth">
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Field
                    type="email"
                    name="email"
                    placeholder="E-mail Address"
                    className="form-control"
                  />
                  <ErrorMessage
                    component={"div"}
                    name="email"
                    className="text-danger text-right"
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className="btn gradient-btn gradientcolor"
                  disabled={props.forgotPassword.buttonDisable}
                >
                  {props.forgotPassword.loadingButtonContent !==
                    null
                    ? props.forgotPassword.loadingButtonContent
                    : "Request Reset Link"}
                </Button>
                <p id="two" className="text-center">
                  {t("already_have_an_account")}
                </p>
                <p className="text-center">
                  <Link className="signup" to="/" id="signin">
                    {" "}
                    {t("login_for")} {configuration.get("configData.site_name")}
                  </Link>
                </p>
              </FORM>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

const mapStateToPros = (state) => ({
  forgotPassword: state.users.forgotPasswordInputData,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(
  mapStateToPros,
  mapDispatchToProps
)(translate(ForgotPassword));
