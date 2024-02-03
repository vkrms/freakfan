import React, { Component } from "react";
import "./ContentRemovalAppealsPolicyPage.css";
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

class ContentRemovalAppealsPolicyPage extends Component {

  render() {
    const displayContent = this.props.page.pageData;
    // console.log(displayContent)
    return (
      <>
        <div className="static-page-sec">
          <Container>
            <h4 className="head-title">Content Removal & Appeals Policy</h4>
            <Row>
              <Col sm="12" md="12">
                <div className="static-box">
                  <div className="content-box">
                    <h2 className="text-muted">Content Consent Procedures </h2>
                    <hr />
                    <h2>1 Objective</h2>
                    <p>The objective of this policy is to outline the process for content removal requests and appeals on the Freak Fan platform. Circle of Nine Limited is committed to maintaining a platform that upholds legal and ethical standards while providing content providers with a fair opportunity to appeal removal decisions.</p>
                    <h2>2 Content Removal Requests</h2>
                    <ol>
                      <li><p>Submission: Content removal requests can be submitted by content providers through a designated email address for removal requests. Requests should include specific details about the content in question, including the URL, description, and reasons for removal.</p></li>
                      <li><p>Verification: Circle of Nine Limited will verify the authenticity of the removal request and assess its compliance with platform policies and legal requirements.</p></li>
                      <li><p>Review Process: Upon receiving a valid removal request, Circle of Nine Limited will conduct a thorough review of the content in question. The review process may involve evaluating the content against platform guidelines, legal regulations, and ethical considerations.</p></li>
                      <li><p>Notification: Content providers will be notified of the outcome of the review process and the decision to either remove or retain the content. If the decision is to remove the content, the reasons for removal will be communicated.</p></li>
                    </ol>
                    <h2>3 Appeals Process</h2>
                    <ol>
                      <li><p>Appeals Submission: Content providers have the right to appeal content removal decisions. Appeals should be submitted through a designated appeals email address within a specified timeframe (e.g., 7 days from the date of removal notification).</p></li>
                      <li><p>Appeals Grounds: Appeals should clearly state the grounds for the appeal and provide any additional information or evidence that supports the case for content restoration.</p></li>
                      <li><p>Appeals Review: Circle of Nine Limited will conduct a comprehensive review of the appeal, considering the grounds provided and any new evidence presented.</p></li>
                      <li><p>Appeals Outcome: Content providers will be notified of the outcome of the appeal review. If the appeal is successful, the content will be restored to the platform. If the appeal is denied, the removal decision will stand.</p></li>
                    </ol>
                    <h2>4 Public Interest Content</h2>
                    <ol>
                      <li><p>Public Interest Exception: Circle of Nine Limited recognizes that certain content may be of public interest despite potential violations of platform guidelines. In such cases, Circle of Nine Limited may choose to retain the content while placing disclaimers or age restrictions to ensure user awareness.</p></li>
                      <li><p>Review Process: Content flagged as public interest will undergo a specialized review process to assess its alignment with public interest criteria. Decisions regarding public interest content will be made with careful consideration of legal and ethical standards.</p></li>
                    </ol>
                    <h2>5 Repeated Violations</h2>
                    <ol>
                      <li><p>Progressive Measures: Content providers who repeatedly violate platform policies may face progressive measures, including content removal, account suspension, or termination.</p></li>
                      <li><p>Notification: Content providers will be notified of repeated violations and the corresponding measures taken. Repeated violations demonstrate a disregard for platform rules and may result in more severe consequences.</p></li>
                    </ol>
                    <h2>6 Transparent Communication</h2>
                    <ol>
                      <li><p>Communication: Circle of Nine Limited is committed to transparently communicating content removal decisions, appeals outcomes, and any actions taken in response to violations. This transparency fosters trust and accountability within the platform community.</p></li>
                      <li><p>Educational Approach: Circle of Nine Limited will take an educational approach, whenever possible, to help content providers understand platform guidelines and legal obligations.</p></li>
                    </ol>
                    <h2>7 Right to Legal Recourse</h2>
                    <p>The content removal and appeals process does not preclude any party from seeking legal recourse if they believe their rights have been violated.</p>
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

export default connect(mapStateToPros, mapDispatchToProps)(translate(ContentRemovalAppealsPolicyPage));
