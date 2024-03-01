import React, { useState, useEffect, useRef } from "react";
import { Button, Container, Row, Col, Image, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import configuration from "react-global-configuration";
import { translate, t } from "react-multi-lang";
import {
  isAndroid,
  isIOS,
  isWindows,
  isMacOs,
  mobileModel,
  browserName,
  osName,
  mobileVendor,
  browserVersion,
} from "react-device-detect";
import { Formik, Form as FORM, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";

import { userLoginStart, userRegisterStart } from "../../store/actions/UserAction";
// import { getErrorNotificationMessage } from "../helper/NotificationMessage";
import SocialButton from "../helper/SocialButton";
import { useBreakpoint } from "../../hooks/useBreakpoint";

const LoginIndex = (props) => {

  const [loginInputData, setLoginInputData] = useState({});
  const [loginPasswordVisible, setLoginPasswordVisible] = useState(false);

  useEffect(() => {

    var device_type = "";
    var device_model = "";
    var browser_type = browserName;

    if (isAndroid == true) {
      device_type = "android";
      device_model = mobileModel;
    } else if (isIOS == true) {
      device_type = "ios";
      device_model = mobileModel;
    } else {
      device_type = "web";
      device_model = browserName + ' ' + browserVersion;
    }

    setLoginInputData({
      ...loginInputData,
      device_type: device_type,
      device_model: device_model,
      browser_type: browser_type,
    })
  }, []);

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required *"),
    password: Yup.string()
      .required("Password is required *")
      .matches(/^(?=.*[a-zA-Z0-9])(?=.{6,})/, "Must Contain 6 Characters"),
  });

  const handleLogin = (values) => {
    let newValues = { ...values, ...loginInputData };
    props.dispatch(userLoginStart(newValues));
  };

  const handleSocialLoginFailure = (err) => {
    console.error(err);
  };

  const handleFacebookLogin = (user) => {
    console.log("handleFacebookLogin", user._profile);
    props.dispatch(
      userRegisterStart({
        name: user._profile.name,
        first_name: user._profile.firstName ? user._profile.firstName : "",
        last_name: user._profile.lastName ? user._profile.lastName : "",
        email: user._profile.email ? user._profile.email : "",
        social_unique_id: user._profile.id,
        picture: user._profile.profilePicURL,
        login_by: "facebook",
        device_token: loginInputData.device_token,
      })
    );
  };

  const handleGoogleLogin = (user) => {
    console.log("handleGoogleLogin", user._profile);
    props.dispatch(
      userRegisterStart({
        name: user._profile.name,
        email: user._profile.email,
        first_name: user._profile.firstName ? user._profile.firstName : "",
        last_name: user._profile.lastName ? user._profile.lastName : "",
        social_unique_id: user._profile.id,
        picture: user._profile.profilePicURL,
        login_by: "google",
        device_token: loginInputData.device_token,
      })
    );
  };

  const video = useRef()

  function replaceVideo(size) {
    if (size === 'small') {
      video.current.src = 'assets/images/bg-video-mobile.mp4';
    } else {
      video.current.src = 'assets/images/bg-video-desktop.mp4';
    }
  }

  useBreakpoint(replaceVideo, 960);

  return (
    <>
      <div className="new-login-page-sec login-mobile-sec">
        <video
          className="bg-video"
          autoPlay={true}
          loop={true}
          muted={true}
          playing={true}
          ref={video}
          playsInline
          preload="auto"
        >
          <source src="assets/images/bg-video-mobile.mp4" type="video/mp4" media="(max-width:960px) and (orientation: portrait)"/>
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
          {configuration.get("configData.FB_CLIENT_ID") ? (
            <SocialButton
              provider="facebook"
              appId={configuration.get("configData.FB_CLIENT_ID")}
              onLoginSuccess={handleFacebookLogin}
              onLoginFailure={handleSocialLoginFailure}
              className="social-button"
              id="facebook-connect"
            >
              <span>
                {t("signup")} / {t("login_with_facebook")}
              </span>
            </SocialButton>
          ) : (
            ""
          )}

          {configuration.get("configData.GOOGLE_CLIENT_ID") ? (
            <SocialButton
              provider="google"
              key={"google"}
              appId={configuration.get("configData.GOOGLE_CLIENT_ID")}
              onLoginSuccess={handleGoogleLogin}
              onLoginFailure={handleSocialLoginFailure}
              className="social-button"
              id="google-connect"
            >
              <span>
                {t("signup")} / {t("login_with_google")}
              </span>
            </SocialButton>
          ) : (
            ""
          )}
          {/* <Link to="#" className="social-button" id="twitter-connect">
                    <span>Sign Up / Login with Twitter</span>
                  </Link>
                  <Link to="#" className="social-button" id="google-connect">
                    <span>Sign Up / Login with Google</span>
                  </Link> */}

          {configuration.get("configData.GOOGLE_CLIENT_ID") ||
            configuration.get("configData.FB_CLIENT_ID") ? (
            <span className="or-line">
              <span>or</span>
            </span>
          ) : (
            <span className="login-or-hide"></span>
          )}
          <Formik
            initialValues={{
              email: configuration.get(
                "configData.demo_user_email"
              ),
              password: configuration.get(
                "configData.demo_user_password"
              ),
            }}
            validationSchema={loginSchema}
            onSubmit={(values) => handleLogin(values)}
          >
            {({
              touched,
              errors,
              isSubmitting,
              setFieldValue,
            }) => (
              <FORM className="form-auth">
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  {/* <Form.Control type="email" placeholder="Enter email" /> */}
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
                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <div class="input-group">
                    <Field
                      type={
                        loginPasswordVisible ? "text" : "password"
                      }
                      name="password"
                      placeholder="Password"
                      className="form-control"
                    />
                    <div class="input-group-append">
                      <button
                        onClick={() =>
                          setLoginPasswordVisible(
                            !loginPasswordVisible
                          )
                        }
                        class="btn password-eye"
                        type="button"
                      >
                        {loginPasswordVisible ? (
                          <i className="fas fa-eye-slash align-self-center"></i>
                        ) : (
                          <i className="fas fa-eye align-self-center"></i>
                        )}
                      </button>
                    </div>
                  </div>
                  <ErrorMessage
                    component={"div"}
                    name="password"
                    className="text-danger text-right"
                  />
                </Form.Group>
                <div className="forget-password">
                  <p id="one">
                    <Link
                      to="/forgot-password"
                      type="button"
                      className="forgot-link"
                    >
                      {" "}
                      {t("forgot_password")}{" "}
                    </Link>
                  </p>
                </div>
                <Button
                  type="submit"
                  className="btn gradient-btn gradientcolor"
                  disable={props.login.buttonDisabled}
                >
                  {props.login.loadingButtonContent ?
                    props.login.loadingButtonContent
                    : "Login"
                  }
                </Button>
                {/* <p id="two" className="text-center gold">
                  {t("do_not_have_an_account")}
                </p> */}
                <p id="two" className="text-center gold"></p>
                <p className="text-center">
                  <Link className="signup pink" to="/whyfreakfan" id="signup">
                    {" "}
                    {t("whyfreak_fan")}
                    {/* {t("Become a Freak.Fan")} */}
                  </Link>
                </p>

                <p className="text-center pt-4">
                  <Link className="signup pink" to="/register" id="signup">
                    {" "}
                    {t("signup_for")}
                    {/* {t("Become a Freak.Fan")} */}
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
  login: state.users.loginInputData
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(
  mapStateToPros,
  mapDispatchToProps
)(translate(LoginIndex));

