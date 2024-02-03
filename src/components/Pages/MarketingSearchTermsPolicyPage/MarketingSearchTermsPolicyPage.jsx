import React, { Component } from "react";
import "./MarketingSearchTermsPolicyPage.css";
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

class MarketingSearchTermsPolicyPage extends Component {

  render() {
    const displayContent = this.props.page.pageData;
    // console.log(displayContent)
    return (
      <>
        <div className="static-page-sec">
          <Container>
            <h4 className="head-title">Marketing & Search Terms Policy</h4>
            <Row>
              <Col sm="12" md="12">
                <div className="static-box">
                  <div className="content-box">
                    <h3 className="text-muted">Marketing & Search Terms Policy</h3>
                    <hr />
                    <h3>1 Objective</h3>
                    <p>The objective of this policy is to establish guidelines for marketing practices and the use of search terms on the Freak Fan platform. Circle of Nine Limited aims to maintain ethical and responsible marketing strategies while ensuring the platform remains compliant with legal requirements.</p>
                    <h3>2 Marketing Practices</h3>
                    <ol>
                      <li><p><b>Truthful Representation</b>: All marketing materials, including advertisements and promotions, must provide truthful and accurate representations of the platform's services and content.</p></li>
                      <li><p><b>Respect for Viewers</b>: Marketing materials should not contain explicit or misleading content that could offend or deceive viewers.</p></li>
                      <li><p><b>Consent and Release</b>: Content providers may market their hosted content within the platform, provided that they have the necessary rights and consents from co-performers and other parties involved. Any advertisements must comply with the platform's content guidelines.</p></li>
                      <li><p><b>Third-Party Endorsements</b>: Content providers must not imply third-party endorsements or affiliations without proper authorization.</p></li>
                      <li><p><b>Prohibited Content</b>: Marketing materials must not include prohibited content such as illegal activities, hate speech, or explicit adult content.</p></li>
                    </ol>
                    <h3>3 Search Terms</h3>
                    <ol>
                      <li><p><b>Appropriate Search Terms</b>: Content providers are encouraged to use relevant and appropriate search terms to accurately describe their content. Misleading or unrelated search terms are prohibited.</p></li>
                      <li><p><b>Avoid Copyrighted Terms</b>: Content providers should avoid using copyrighted terms, trademarks, or names of other performers in their search terms without proper authorization.</p></li>
                      <li><p><b>Sensitive Language</b>: Search terms should avoid using explicit or offensive language that could misrepresent the content or violate the platform's guidelines.</p></li>
                    </ol>
                    <h3>4 External Advertising</h3>
                    <ol>
                      <li><p><b>Third-Party Platforms</b>: Content providers are allowed to promote their Circle of Nine-hosted content on external platforms, including social media. However, content providers must adhere to the terms of use and advertising policies of the external platforms.</p></li>
                      <li><p><b>Co-Performer Consent</b>: When advertising co-performer content, content providers must obtain the necessary consent from co-performers. Co-performers' rights and privacy should be respected.</p></li>
                    </ol>
                    <h3>5 Liability Waiver</h3>
                    <p>Content providers acknowledge that any advertising that does not meet legal and ethical standards, or any restrictions put in place by agreement between Circle of Nine and performer content providers, may result in liability for damages, legal proceedings, or account suspension. Content providers agree to indemnify and hold Circle of Nine Limited harmless against any claims, demands, or actions arising from advertising that violates the terms of this policy.</p>
                    <h3>6 Non-Compliance Penalties</h3>
                    <p>Non-compliance with this policy may result in account suspension, termination, legal action, or forfeiture of any earnings held by Circle of Nine Limited.</p>
                    <h3>7 Right to Amend</h3>
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

export default connect(mapStateToPros, mapDispatchToProps)(translate(MarketingSearchTermsPolicyPage));
