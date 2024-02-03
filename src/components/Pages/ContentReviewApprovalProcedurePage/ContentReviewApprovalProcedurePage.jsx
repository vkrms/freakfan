import React, { Component } from "react";
import "./ContentReviewApprovalProcedurePage.css";
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

class ContentReviewApprovalProcedurePage extends Component {

  render() {
    const displayContent = this.props.page.pageData;
    // console.log(displayContent)
    return (
      <>
        <div className="static-page-sec">
          <Container>
            <h4 className="head-title">Content Review Approval Procedure Page</h4>
            <Row>
              <Col sm="12" md="12">
                <div className="static-box">
                  <div className="content-box">
                    <h3 className="text-muted">Content Consent Procedures Page </h3>
                    <hr />
                    <h2>1 Objective</h2>
                    <p>The objective of this policy is to outline the procedures and criteria for reviewing and approving content on the Freak Fan platform. Circle of Nine Limited is committed to ensuring that all content aligns with legal, ethical, and platform-specific standards.</p>
                    <h2>2 Review Process</h2>
                    <ol>
                      <li><p><b>Submission</b>: Content providers must submit their content for review through the designated platform interface. The submitted content should adhere to the platform's content guidelines and restrictions.</p></li>
                      <li><p><b>Review Criteria</b>: Content will be reviewed based on factors such as compliance with legal requirements, adherence to platform guidelines, and appropriateness for the intended audience.</p></li>
                      <li><p><b>Review Timeframe</b>: Circle of Nine Limited aims to complete the initial review of submitted content within 48 hours. Complex or sensitive content may require additional time for review.</p></li>
                      <li><p><b>Communication</b>: Content providers will be notified of the review outcome through the platform's notification system or email.</p></li>
                    </ol>
                    <h2>3 Acceptable Practices</h2>
                    <ol>
                      <li><p><b>Legal Compliance</b>: Content that violates any local, national, or international laws is strictly prohibited. This includes but is not limited to child exploitation, harassment, hate speech, and non-consensual content.</p></li>
                      <li><p><b>Ethical Considerations</b>: Content must adhere to ethical standards and avoid harm to individuals or groups. This includes respecting privacy and consent.</p></li>
                      <li><p><b>No Third-Party Identifiable Information</b>: Content recorded in public places must avoid capturing identifiable third parties, considering the nature of the platform.</p></li>
                      <li><p><b>Originality</b>: Content providers are responsible for ensuring that their submitted content is original and does not infringe upon copyrights or trademarks of others.</p></li>
                      <li><p><b>Accuracy</b>: Content should not contain false or misleading information. Any claims made in the content should be factually accurate.</p></li>
                      <li><p><b>Sensitive Content</b>: Content that includes sensitive topics such as violence, nudity, or explicit language should be appropriately labeled and restricted to appropriate audiences.</p></li>
                      <li><p><b>Respect for Guidelines</b>: Content should adhere to platform-specific guidelines and policies, including those related to advertising, branding, and interactions with viewers.</p></li>
                      <li><p><b>Appropriate Categorization</b>: Content providers should accurately categorize their content to ensure viewers can make informed choices about what they are viewing.</p></li>
                    </ol>
                    <h2>4 Reviewer Training</h2>
                    <p>Circle of Nine Limited will ensure that content reviewers are adequately trained to evaluate content based on legal, ethical, and platform-specific criteria. Reviewers will receive ongoing training to stay updated on evolving standards and practices.</p>
                    <h2>5 Content Appeals</h2>
                    <ol>
                      <li><p><b>Appeal Process</b>: Content providers have the right to appeal review decisions they believe to be unfair or inaccurate. Appeals should be submitted through the designated platform interface.</p></li>
                      <li><p><b>Appeal Review</b>: Appeals will be reviewed by a different content reviewer than the one who initially evaluated the content. The decision of the appeal reviewer is final.</p></li>
                    </ol>
                    <h2>6 Continuous Monitoring</h2>
                    <p>Circle of Nine Limited will conduct periodic audits of approved content to ensure ongoing compliance with platform standards. Content found to be in violation of guidelines will be subject to appropriate actions.</p>
                    <h2>7 Right to Amend</h2>
                    <p>Circle of Nine Limited reserves the right to amend this policy as needed to ensure alignment with legal requirements and platform standards.</p>
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

export default connect(mapStateToPros, mapDispatchToProps)(translate(ContentReviewApprovalProcedurePage));
