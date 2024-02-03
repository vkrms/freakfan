import React, { Component } from "react";
import "./IdentityAgeVerificationPolicyPage.css";
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

class IdentityAgeVerificationPolicyPage extends Component {

  render() {
    const displayContent = this.props.page.pageData;
    // console.log(displayContent)
    return (
      <>
        <div className="static-page-sec">
          <Container>
            <h4 className="head-title">Identity and Age Verification Policy</h4>
            <Row>
              <Col sm="12" md="12">
                <div className="static-box">
                  <div className="content-box">
                    <h3 className="text-muted">Identity and Age Verification Policy</h3>
                    <hr />
                    <h2>1 Objective</h2>
                    <p>The primary objective of this policy is to create a secure and legally compliant environment on the Freak Fan platform. This is achieved by ensuring that all content providers and consumers are of legal age and have verified their identity through a rigorous verification process.</p>
                    <h2>2 Scope</h2>
                    <p>This policy is applicable to all individuals who wish to become content providers or consumers on the Freak Fan platform. No one will be allowed to access the platform's services without completing the required identity and age verification procedures.</p>
                    <h2>3 Methods for Verification</h2>
                    <p><b>Initial Verification</b>: Before gaining access to the platform, all content providers and consumers must submit valid identification documents for verification. Acceptable forms of identification include:</p>
                    <ol>
                      <li><p>Passport</p></li>
                      <li><p>Driver's License</p></li>
                      <li><p>National Identity Card</p></li>
                      <li><p>Military ID</p></li>
                      <li><p>Permanent Resident Card</p></li>
                      <li><p>Voter's Identification (if it has a photocard)</p></li>
                      <li><p>Passport Card</p></li>
                    </ol>
                    <p><b>Periodic Verification</b>: Circle of Nine Limited may, at its discretion, request additional verification documents at any time to ensure ongoing compliance.</p>
                    <h2>4 Enforcement and Compliance</h2>
                    <p><b>Monitoring</b>: Circle of Nine Limited will employ advanced verification technologies and conduct regular audits to ensure that all users are in compliance with this policy.</p>
                    <b>Non-Compliance Penalties</b>:
                    <ol>
                      <li><p><b>Fraudulent ID Usage</b>: If Circle of Nine Limited becomes aware that a user has engaged in identity fraud by using fake, stolen, borrowed, or otherwise fraudulent identification, the following actions will be taken:</p></li>
                    </ol>
                    <ol>
                      <li><p><b>Immediate and Permanent Suspension</b>: The user's account will be permanently suspended, barring any future registration attempts.</p></li>
                      <li><p><b>Forfeiture of Earnings</b>: All earnings accrued in the account will be forfeited and may be subject to legal action.</p></li>
                      <li><p><b>Legal Consequences</b>: Circle of Nine Limited reserves the right to initiate legal proceedings against the user, which may include fines, legal fees, and other costs associated with the violation.</p></li>
                      <li><p><b>Reporting to Authorities</b>: Circle of Nine Limited is legally obligated to report such fraudulent activity to appropriate law enforcement agencies. This may include local police, cybercrime units, and other relevant authorities depending on the jurisdiction.</p></li>
                    </ol>
                    <p><b>Legal Obligations</b>: Circle of Nine Limited will report any instances of underage usage or fraudulent identity to the appropriate legal authorities, fulfilling its legal obligations under various jurisdictions.</p>

                    <b>Data Storage</b>:
                    <ol>
                      <li><p><b>General Compliance</b>:</p></li>
                    </ol>
                    <ol>
                      <li><p><b>Encryption</b>: All verification data is stored in databases that are encrypted using industry-standard encryption algorithms.</p></li>
                      <li><p><b>Access Control</b>: Access to these databases is strictly controlled and limited to authorised personnel of Circle of Nine Limited who have undergone rigorous security training.</p></li>
                      <li><p><b>Global Compliance</b>: Circle of Nine Limited is committed to adhering to data protection laws and regulations across various global jurisdictions, including but not limited to GDPR (European Union), CCPA (California, USA), PIPEDA (Canada), and PDPA (Singapore).</p></li>
                    </ol>
                    <ol>
                      <li><p><b>AWS Compliance</b>:</p></li>
                    </ol>
                    <ol>
                      <li><p><b>Encryption in Transit</b>: All data transferred to and from AWS services is encrypted using Secure Sockets Layer (SSL)/Transport Layer Security (TLS).</p></li>
                      <li><p><b>Encryption at Rest</b>: Data stored within AWS services is encrypted at rest, ensuring that it cannot be accessed without proper authentication and authorisation.</p></li>
                      <li><p><b>AWS Best Practices</b>: Circle of Nine Limited follows AWS's security best practices, including regular security audits and vulnerability assessments.</p></li>
                    </ol>
                    <ol>
                      <li><p><b>PCI DSS Compliance</b>:</p></li>
                    </ol>
                    <ol>
                      <li><p><b>Cardholder Data</b>: Circle of Nine Limited ensures that all cardholder data is stored, processed, and transmitted in a manner compliant with the Payment Card Industry Data Security Standard (PCI DSS).</p></li>
                      <li><p><b>Third-Party Compliance</b>: All third-party services, including CCBILL and Mastercard, are vetted to ensure their compliance with PCI DSS.</p></li>
                      <li><p><b>Regular Audits</b>: Circle of Nine Limited undergoes regular PCI compliance audits to ensure ongoing adherence to these standards.</p></li>
                    </ol>
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

export default connect(mapStateToPros, mapDispatchToProps)(translate(IdentityAgeVerificationPolicyPage));
