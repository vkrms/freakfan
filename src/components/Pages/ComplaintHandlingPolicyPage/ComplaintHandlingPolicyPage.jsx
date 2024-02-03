import React, { Component } from "react";
import "./ComplaintHandlingPolicyPage.css";
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

class ComplaintHandlingPolicyPage extends Component {

  render() {
    const displayContent = this.props.page.pageData;
    // console.log(displayContent)
    return (
      <>
        <div className="static-page-sec">
          <Container>
            <h4 className="head-title">Complaint Handling Policy</h4>
            <Row>
              <Col sm="12" md="12">
                <div className="static-box">
                  <div className="content-box">
                    <h3 className="text-muted">Complaint Handling Policy</h3>
                    <hr />
                    <h3>1 Objective</h3>
                    <p>The objective of this policy is to establish a structured and effective process for addressing and resolving complaints from both consumers and content providers on the Freak Fan platform. Circle of Nine Limited is committed to maintaining a high standard of responsiveness, fairness, and transparency in resolving complaints.</p>
                    <h3>2 Scope</h3>
                    <p>This policy applies to all complaints submitted by consumers, content providers, and co-performers (who may not have their own accounts) related to platform activities, content, interactions, and payments.</p>
                    <h3>3 Reporting Mechanism</h3>
                    <h4><strong>Consumer Complaints</strong></h4>
                    <ol>
                      <li><p><b>Submission</b>: Consumers may submit complaints through the designated "Contact Us" section on the Freak Fan platform. Alternatively, they can send an email to the dedicated customer support email address.</p></li>
                      <li><p><b>Complaint Details</b>: Complaints should include detailed information about the issue, relevant parties involved, and any supporting evidence.</p></li>
                      <li><p><b>Payment Issues</b>: If the complaint pertains to payment issues, consumers should provide relevant transaction details, such as transaction ID, date, and amount.</p></li>
                      <li><p><b>Fraud-Related Complaints</b>: In cases of suspected fraud or unauthorized transactions, consumers should provide detailed information about the incident, including any relevant transaction records and communications.</p></li>
                      <li><p><b>Response Time</b>: Circle of Nine Limited aims to acknowledge consumer complaints within 48 hours of receipt and will provide a resolution or progress update within 7 business days, depending on the complexity of the complaint.</p></li>
                    </ol>
                    <h4><strong>Content Provider and Co-Performer Complaints</strong></h4>
                    <ol>
                      <li><p><b>Submission</b>: Content providers and co-performers may submit complaints through a designated email address for complaints.</p></li>
                      <li><p><b>Complaint Details</b>: Complaints should include specific details of the issue, relevant parties, and any supporting documentation or evidence.</p></li>
                      <li><p><b>Co-Performer Complaints</b>: If a co-performer is submitting a complaint related to content they are part of and have not provided explicit consent, their identity will be kept confidential during the process. Co-performers who do not have their own account should provide their name and contact information in the complaint submission.</p></li>
                    </ol>
                    <h3>4 Investigation and Resolution</h3>
                    <ol>
                      <li><p><b>Initial Review</b>: Upon receiving a complaint, Circle of Nine Limited will conduct an initial review to assess its validity and determine the appropriate course of action.</p></li>
                      <li><p><b>Communication</b>: Circle of Nine Limited will communicate with the complainant to gather additional information and clarify any aspects of the complaint.</p></li>
                      <li><p><b>Resolution</b>: Depending on the nature of the complaint, Circle of Nine Limited will take appropriate actions to address the issue, which may include content removal, account suspension, warning notices, or other measures as deemed necessary.</p></li>
                      <li><p><b>Timely Response</b>: Circle of Nine Limited is committed to providing a timely response to complaints. The resolution timeline may vary based on the complexity of the issue.</p></li>
                    </ol>
                    <h3>5 Communication and Follow-Up</h3>
                    <ol>
                      <li><p><b>Notification</b>: Circle of Nine Limited will notify complainants of the outcome of the investigation and the action taken to address the complaint.</p></li>
                      <li><p><b>Feedback</b>: Complainants will have the opportunity to provide feedback on the resolution process and the outcome.</p></li>
                      <li><p><b>Monitoring and Improvement</b>: Circle of Nine Limited will monitor the effectiveness of the complaint resolution process and make improvements as necessary to enhance user experience.</p></li>
                    </ol>
                    <h3>6 Confidentiality</h3>
                    <p>All complaint-related information and communication will be treated with the utmost confidentiality, except where required by law or regulatory authorities.</p>
                    <h3>7 Right to Legal Recourse</h3>
                    <p>The complaint handling process does not preclude any party from seeking legal recourse if they believe their rights have been violated.</p>
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

export default connect(mapStateToPros, mapDispatchToProps)(translate(ComplaintHandlingPolicyPage));
