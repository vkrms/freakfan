import React, { Component } from "react";
import "./IdentityVerificationProcedurePage.css";
import { connect } from "react-redux";
import { translate, t } from "react-multi-lang";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  Media,
} from "react-bootstrap";
import PageBottom from "../common/PageBottom";

class IdentityVerificationProcedurePage extends Component {

  render() {
    const displayContent = this.props.page.pageData;
    // console.log(displayContent)
    return (
      <>
        <div className="static-page-sec">
          <Container>
            <h4 className="head-title">Identity Verification Procedure</h4>
            <Row>
              <Col sm="12" md="12">
                <div className="static-box">
                  <div className="content-box">
                    <h3 className="text-muted">Identity Verification Procedure</h3>
                    <hr />
                    <h2>1. Introduction</h2>
                    <p>The purpose of this procedure is to outline the steps for verifying the identity and age of content providers on the Freak Fan platform. This ensures compliance with legal requirements and enhances platform integrity.</p>
                    <h2>2. Eligibility Criteria</h2>
                    <ol>
                      <li><p>Content providers must be at least 18 years of age to participate on the platform.</p></li>
                      <li><p>Content providers must comply with the laws and regulations of their respective jurisdictions.</p></li>
                    </ol>                    
                    <h2>3. Identification Documents</h2>
                    <ol>
                      <li><p><b>Types of Documents</b>: Acceptable identification documents include a government-issued photo ID such as a passport, driver's license, or national identity card. Other forms of ID may be considered on a case-by-case basis.</p></li>
                      <li><p><b>Additional Documents</b>: Content providers may also be required to submit a secondary form of identification, such as a utility bill or bank statement. The bill or statement must be dated within the last 3 months.</p></li>
                    </ol>                    
                    <h2>4. Verification Process</h2>
                    <ol>
                      <li><p><b>Document Submission</b>: Content providers must upload clear and legible scans or photographs of their identification documents during the application process.</p></li>
                      <li><p><b>Review and Approval</b>: The Freak Fan team will review the submitted documents and approve or reject them based on their validity and clarity.</p></li>
                      <li><p><b>Timeframe</b>: The verification process will be completed within 5 business days.</p></li>
                    </ol>
                    <h2>5. Unverifiable Identification</h2>
                    <p>If Circle of Nine Limited cannot verify the identification or has any other concerns about the identification provided, the content provider will not be able to join the platform.</p>
                    <h2>6. Non-Compliance Penalties</h2>
                      <p>Failure to comply with the ID and Verification Procedure may result in account suspension or termination.</p>
                    <h2>7. Amendments</h2>
                      <p>Freak Fan reserves the right to amend this procedure as needed to align with legal requirements and platform standards.</p>
                    <h2>8. Right to Conduct Verification Checks</h2>
                    <p>Circle of Nine Limited reserves the right to carry out ID verification checks on content providers at any time to ensure ongoing compliance with this procedure and legal requirements.</p>
                  </div>

                  <PageBottom />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

const mapStateToPros = (state) => ({
  page: state.page,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(translate(IdentityVerificationProcedurePage));
