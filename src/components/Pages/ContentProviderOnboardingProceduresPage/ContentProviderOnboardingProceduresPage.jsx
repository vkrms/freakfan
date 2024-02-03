import React, { Component } from "react";
import "./ContentProviderOnboardingProceduresPage.css";
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

class ContentProviderOnboardingProceduresPage extends Component {

  render() {
    const displayContent = this.props.page.pageData;
    // console.log(displayContent)
    return (
      <>
        <div className="static-page-sec">
          <Container>
            <h4 className="head-title">Content Provider Onboarding Procedures</h4>
            <Row>
              <Col sm="12" md="12">
                <div className="static-box">
                  <div className="content-box">
                    <h3 className="text-muted">Content Consent Procedures Page </h3>
                    <hr />
                    <h2>1. Introduction</h2>
                    <ol>
                      <li>
                        <p>The purpose of this procedure is to outline the steps for onboarding new content providers to the Freak Fan platform. This ensures a smooth and efficient integration process, allowing content providers to begin sharing their content as quickly as possible.</p>
                      </li>
                    </ol>
                    <h2>2. Eligibility Criteria</h2>
                    <ol>
                      <li>
                        <p>Content providers must be at least 18 years of age and provide valid identification for age verification.</p>
                      </li>
                      <li>
                        <p>Content providers must agree to abide by the platform's terms of service, including the Marketing &amp; Search Terms Policy and the Complaint Handling Policy.</p>
                      </li>
                      <li>
                        <p>Legal Restrictions: Content providers must comply with the laws and regulations of their respective jurisdictions. The platform will not accept content providers from countries where adult performance is illegal or heavily restricted.</p>
                      </li>
                    </ol>
                   
                    <h2>3. Registration Process</h2>
                    <ol>
                      <li>
                        <p>Initial Application: Prospective content providers must complete an online application form available on the Freak Fan website.</p>
                      </li>
                      <li>
                        <p>Document Submission: Required identification documents for ID and age verification must be uploaded during the application process.</p>
                      </li>
                      <li>
                        <p>Review and Approval: The Freak Fan team will review the application and identification documents. Successful applicants will receive an approval email within 5 business days.</p>
                      </li>
                    </ol>                   
                    <h2>4. Account Setup</h2>
                    <ol>
                      <li>
                        <p>Login Credentials: Upon approval, content providers will receive login credentials via email.</p>
                      </li>
                      <li>
                        <p>Profile Creation: Content providers must complete their profile, including uploading a profile picture and writing a bio.</p>
                      </li>
                      <li>
                        <p>Payment Information: Content providers must enter their payment details to enable revenue collection. Content providers are responsible for any tax declarations or otherwise that may be applicable in their country. No liability for tax-related matters is with Circle of Nine Limited.</p>
                      </li>
                    </ol>                   
                    <h2>5. Content Guidelines and Training</h2>
                    <ol>
                      <li>
                        <p>Orientation: Content providers must familiarise themselves with the platform's features and guidelines. No training will be provided.</p>
                      </li>
                      <li>
                        <p>Content Guidelines: Content providers must familiarise themselves with the platform's content guidelines. No training will be provided.</p>
                      </li>
                    </ol>                    
                    <h2>6. Content Upload and Management</h2>
                    <ol>
                      <li>
                        <p>Uploading Content: Content providers can start uploading content via the platform's content management system.</p>
                      </li>
                      <li>
                        <p>Content Review: All uploaded content will be subject to review by the Freak Fan team for compliance with platform guidelines.</p>
                      </li>
                      <li>
                        <p>Publishing: Once approved, the content will be published and made available to consumers on the platform.</p>
                      </li>
                    </ol>                   
                    <h2>7. Ongoing Support and Resources</h2>
                    <ol>
                      <li>
                        <p>Customer Support: Content providers have access to 24/7 customer support for any queries or issues.</p>
                      </li>
                      <li>
                        <p>Resource Centre: A resource centre with tutorials, FAQs, and best practices is available for content providers to enhance their experience and success on the platform.</p>
                      </li>
                    </ol>
                    <h2>8. Amendments</h2>
                    <ol>
                      <li>
                        <p>Freak Fan reserves the right to amend this procedure as needed to align with legal requirements and platform standards.</p>
                      </li>
                    </ol>
                    <h2>9. Intellectual Property Rights</h2>
                    <ol>
                      <li>
                        <p>Ownership: Intellectual property rights for the content remain with the content provider.</p>
                      </li>
                      <li>
                        <p>Usage Permissions: By uploading content to the Freak Fan platform, content providers grant Circle of Nine Limited the right to use the content for marketing, training, or other reasonable purposes.</p>
                      </li>
                      <li>
                        <p>Exclusive Use: Content providers may grant Circle of Nine Limited exclusive use of their content. In such cases, content providers will be subject to higher remuneration rates.</p>
                      </li>
                      <li>
                        <p>Non-Exclusive Use: Content providers are free to use their content across other platforms if they so choose, unless an exclusive use agreement is in place with Circle of Nine Limited.</p>
                      </li>
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

export default connect(mapStateToPros, mapDispatchToProps)(translate(ContentProviderOnboardingProceduresPage));
