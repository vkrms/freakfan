import React, { Component } from "react";
import AuthHeader from "./Header/AuthHeader";
import { Notify } from "react-redux-notify";
import LandingFooter from "./Footer/LandingFooter";

class NewAuthLayout extends Component {
  state = {};
  render() {
    return (
      <body>
        <Notify position="TopRight" />
        {/* <AuthHeader /> */}

        {React.cloneElement(this.props.children)}

        {/* <LandingFooter /> */}
      </body>
    );
  }
}

export default NewAuthLayout;
