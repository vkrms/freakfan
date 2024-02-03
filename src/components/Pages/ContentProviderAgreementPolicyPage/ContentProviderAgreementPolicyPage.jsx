import React, { Component } from "react";
import "./ContentProviderAgreementPolicyPage.css";
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

class ContentProviderAgreementPolicyPage extends Component {

  render() {
    const displayContent = this.props.page.pageData;
    // console.log(displayContent)
    return (
      <>
        <div className="static-page-sec">
          <Container>
            <h4 className="head-title">Content Provider Agreement Policy</h4>
            <Row>
              <Col sm="12" md="12">
                <div className="static-box">
                  <div className="content-box">
                    <h3 className="text-muted">Content Provider Agreement Policy </h3>
                    <hr />
                    <h2>1. Objective</h2>
                    <p>The primary objective of the Content Provider Agreement Policy is to establish a comprehensive framework for collaboration between Circle of Nine Limited, trading as Freak Fan, and its content providers.</p>

                    <h2>2. Scope</h2>
                    <p>This policy applies to all individuals, entities, or organisations contributing any form of content to the Freak Fan platform.</p>

                    <h2>3. Standard Written Agreement Template</h2>
                    <p>A Standard Written Agreement Template will be used to formalise all partnerships with content providers.</p>

                    <h2>4. Enforcement and Compliance</h2>
                    <p>Compliance with this policy is non-negotiable. Circle of Nine Limited will be responsible for monitoring adherence, conducting periodic audits, implementing corrective actions in cases of non-compliance, and initiating legal proceedings against violators. In cases where unlawful activity, including Child Sexual Abuse Material (CSAM), is found, Circle of Nine Limited will immediately refer the matter to appropriate law enforcement agencies without any further reference to the content provider.</p>

                    <h2>5. Immediate and Irrevocable Termination</h2>
                    <p>In the event of violations of this policy, including the discovery of unlawful activities such as CSAM, all accounts associated with the content provider will be immediately suspended. Monies owed to the content provider will be held pending the outcome of a police investigation into the material. These funds will only be released when authorised to do so by a competent authority. Circle of Nine Limited will not be responsible for any funds that are determined to be proceeds of crime or are otherwise subject to legal forfeiture.</p>

                    <h2>5. Co-Performer Releases and Data Protection</h2>
                    <p>Content providers must ensure that suitable releases are signed by any other co-performers in their content who are not directly named on the account. They should provide co-performers with a release document available from Circle of Nine Limited. This document should be completed and sent to Circle of Nine Limited along with copies of co-performers' identification. For the avoidance of doubt, this measure is implemented to prevent any claims against Circle of Nine Limited and/or the main account holder in relation to data protection and/or intellectual property, as the co-performers must sign a release for the same.</p>

                    <h2>6. Age-Restricted Content</h2>
                    <p>All content disseminated through the Freak Fan platform shall be categorised as age-restricted, irrespective of its actual content. Content providers are obligated to adhere to this classification and must refrain from marketing their content to individuals below the age of majority. For the avoidance of doubt, Circle of Nine Limited reserves the right to suspend and/or revoke a content provider's account should it come to the attention of Circle of Nine Limited that the content provider is targeting underage consumers in any manner.</p>

                    <h2>7. User-Generated Content and Consumer Interactions</h2>
                    <p>Content providers are responsible for moderating and reporting any comments, correspondence, messages, or other interactions they receive from consumers on the platform or as a result of content on the platform. Any inference of Child Sexual Abuse Material (CSAM), harassment, stalking, fraudulent activity, hate speech, or incitement to violence must be reported to Circle of Nine Limited immediately for appropriate action.</p>

                    <h2>6. Revenue Sharing and Monetisation</h2>
                    <p>Content providers will be compensated based on a revenue-sharing model. Specifically, they will receive a percentage of the total revenue generated from subscriptions, tips, and custom content made directly for consumers who request it. The exact percentage and other financial terms will be outlined in the individual agreements between Circle of Nine Limited and the content providers.</p>

                    <h2>7. Content Authenticity</h2>
                    <p>Content providers are required to verify the authenticity of all content uploaded to the Freak Fan platform. This includes, but is not limited to, ensuring that all content is original, not manipulated or falsely represented, and adheres to the platform's content guidelines. Failure to comply with these authenticity checks may result in penalties, including but not limited to, immediate suspension or termination of the content provider's account by Circle of Nine Limited. Circle of Nine Limited reserves the right to employ third-party services for additional verification if deemed necessary.</p>

                    <h2>8. Dispute Resolution</h2>
                    <p>In the event of a dispute arising between a content provider and Circle of Nine Limited, the parties shall first attempt to resolve the matter through the platform's internal dispute resolution mechanism. This mechanism involves the following steps:</p>
                    <p>Initial Reporting: The content provider must submit a detailed report of the dispute via the platform's designated reporting channel.</p>
                    <p>Review by Circle of Nine Limited: Upon receipt of the report, Circle of Nine Limited will conduct an initial review to determine the validity and severity of the dispute.</p>
                    <p>Mediation: If the dispute cannot be resolved through initial review, a mediation session may be scheduled between the content provider and a representative from Circle of Nine Limited.</p>
                    <p>Final Decision: If mediation fails to resolve the dispute, Circle of Nine Limited will make a final decision based on the platform's policies, terms, and conditions.</p>
                    <p>External Legal Remedies: Only after exhausting the internal dispute resolution mechanism may the content provider seek external legal remedies.</p>
                    <p>Legal Implications of Non-Engagement: Failure by either party to engage in this internal dispute resolution process may</p>
                    <p>be considered by the courts as a factor in determining the outcome of any legal proceedings.</p>
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

export default connect(mapStateToPros, mapDispatchToProps)(translate(ContentProviderAgreementPolicyPage));
