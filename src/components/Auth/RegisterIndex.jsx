import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Image, Form } from "react-bootstrap";
import { getErrorNotificationMessage } from "../helper/NotificationMessage";
import { Link } from "react-router-dom";
import configuration from "react-global-configuration";
import { translate, t } from "react-multi-lang";
import { Formik, Form as FORM, Field, ErrorMessage } from "formik";
import { referralValidationStart, usernameValidationStart, userRegisterStart } from "../../store/actions/UserAction";
import * as Yup from 'yup';
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
import { createNotification } from "react-redux-notify";
import { connect } from "react-redux";

const RegisterIndex = (props) => {
  const [loginInputData, setLoginInputData] = useState({});
  const [referralCode, setReferralCode] = useState("");
  const [userName, setUserName] = useState("");
  const [loginPasswordVisible, setLoginPasswordVisible] = useState(false);
  const [isvalidUserName, setIsValidUserName] = useState(false);

  useEffect(() => {
    if (configuration.get("configData.is_referral_enabled") == 1) {
      const query = new URLSearchParams(props.location.search);
      const referral = query.get("referral");

      if (referral) {
        setReferralCode(referral);
      }
    }

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

  const registerSchema = Yup.object().shape({
    name: Yup.string().required("Name is required *"),
    username: Yup.string().required("Username is required *"),
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required *"),
    password: Yup.string()
      .required("Password is required *")
      .matches(/^(?=.*[a-zA-Z0-9])(?=.{6,})/, "Must Contain 6 Characters"),
    agreeToTerms: Yup.boolean()
      .oneOf([true], "You must agree to the Terms of Service"),
  });

  const handleUsernameValidation = (username) => {
    if (username && username.length > 3) {
      if (username.replace(" ", "") === username) {
        if (username !== userName) {
          setUserName(username);
          setIsValidUserName(true);
          props.dispatch(usernameValidationStart({ username: username }));
          return "";
        }
      } else {
        setIsValidUserName(false);
        return "No white space allowed";
      }
    } else {
      setIsValidUserName(false);
      return "Must Contain 4 Characters";
    }
  };

  const checkReferralCode = (event) => {
    event.preventDefault();

    if (referralCode) {
      props.dispatch(referralValidationStart({ referral_code: referralCode }));
    } else {
      const notificationMessage = getErrorNotificationMessage(
        "Please enter the Referral code"
      );
      props.dispatch(createNotification(notificationMessage));
    }
  };

  const handleSignup = (values) => {
    let newValues = {
      ...values,
      ...loginInputData,
      referral_code: referralCode,
    };
    props.dispatch(userRegisterStart(newValues));
  };
  return (
    <>
      <div className="new-login-page-sec new-register-sec">
        <div className="new-register-form sign-up-form">
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
              name: "",
              username: "",
              email: "",
              password: "",
              agreeToTerms: false,
            }}
            validationSchema={registerSchema}
            onSubmit={(values) => handleSignup(values)}
          >
            {({
              touched,
              errors,
              isSubmitting,
              setFieldValue,
              values, // Include values from Formik
            }) => (
              <FORM>
                <Form.Group className="mb-4">
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-control"
                    autocomplete="off"
                  />
                  <ErrorMessage
                    component={"div"}
                    name="name"
                    className="text-danger text-right"
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Field
                    type="text"
                    name="username"
                    placeholder="User Name"
                    className="form-control"
                    validate={handleUsernameValidation}
                    autocomplete="off"
                  />
                  <ErrorMessage
                    component={"div"}
                    name="username"
                    className="text-danger text-right"
                  />
                  {props.validation.isInValid &&
                    isvalidUserName ? (
                    <div class="text-danger text-right">
                      {t("username_already_taken")}
                    </div>
                  ) : (
                    ""
                  )}
                  {props.validation.isValid && isvalidUserName ? (
                    <div class="text-success text-right">
                      {t("looks_good")}
                    </div>
                  ) : (
                    ""
                  )}
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Field
                    type="email"
                    name="email"
                    placeholder="E-mail Address"
                    className="form-control mb-3"
                    autocomplete="off"
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
                      className="form-control mb-3"
                      autocomplete="off"
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
                {configuration.get(
                  "configData.is_referral_enabled"
                ) == 1 ?
                  <Form.Group className="mb-2">
                    <Field
                      type="text"
                      name="referral_code"
                      placeholder="Referral Code(Optional)"
                      value={referralCode}
                      className="form-control mb-0"
                      onChange={(e) =>
                        setReferralCode(e.target.value)
                      }
                    />
                    <ErrorMessage
                      component={"div"}
                      name="referral_code"
                      className="text-danger text-right"
                    />
                  </Form.Group>
                  : null
                }
                <div className="check-referral-link mb-3">
                  <a
                    className="text-primary"
                    href="#"
                    onClick={checkReferralCode}
                  >
                    {t("check_referral_code_valid")}
                  </a>
                </div>
                <div className="round">
                  <p className="terms text-center">
                  <ErrorMessage
                    component={"div"}
                    name="agreeToTerms"
                    className="text-danger text-right"
                    style={{
                      textAlign: 'left !important',
                      fontSize: '12px',
                    }}
                  />
                  <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={values.agreeToTerms} // Bind checkbox to the form values
                      onChange={() => setFieldValue("agreeToTerms", !values.agreeToTerms)} // Toggle checkbox value
                      style={{
                        visibility: 'visible',
                        height: '15px',
                        width: '15px',
                        marginRight: '5px',
                      }}
                    />
                    {t("signing_up_confirmation")}
                    <Link to={`/identity-age-verification-policy`} target="_blank">
                      Id & Age Verification Policy 
                    </Link>,{" "}
                    <Link to={`/page/terms`} target="_blank">
                      {t("terms_of_service")}
                    </Link>{" "}<br/>
                    {t("and")}{" "}
                    <Link to={`/page/privacy`} target="_blank">
                      {t("privacy_policy")}
                    </Link>{" "}
                    {t("signing_up_confirmation_last")}{" "}.
                  </p>
                  
                </div>
                <Button
                  type="submit"
                  className="btn gradient-btn gradientcolor"
                  disabled={props.signup.buttonDisable}
                >
                  {props.signup.loadingButtonContent !== null
                    ? props.signup.loadingButtonContent
                    : "Sign Up"}
                </Button>
                <p id="two" className="text-center pink">
                  {t("already_have_an_account")} 
                </p>
                <p className="text-center">
                  <Link className="signup gold" to="/" id="signin">
                    {" "}
                    {t("login_for")} 
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
  signup: state.users.registerInputData,
  validation: state.users.validationInputData,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(
  mapStateToPros,
  mapDispatchToProps
)(translate(RegisterIndex));
