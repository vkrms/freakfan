import React, { Component } from "react";
import "./ContentConsentProceduresPage.css";
import { connect } from "react-redux";
import { fetchSinglePageStart } from "../../../store/actions/PageAction";
import { translate, t } from "react-multi-lang";
import CommonCenterLoader from "../../Loader/CommonCenterLoader";
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

class ContentConsentProceduresPage extends Component {

  render() {
    const displayContent = this.props.page.pageData;
    // console.log(displayContent)
    return (
      <>
        <div className="static-page-sec">
          <Container>
            <h4 className="head-title">Content Consent Procedures Page</h4>
            <Row>
              <Col sm="12" md="12">
                <div className="static-box">
                  <div className="content-box">
                    <h3 className="text-muted">Content Consent Procedures </h3>
                    <hr />
                    <h2>1. Introduction</h2>
                    <p>The <a href="/penalty-fine-management-procedure">Penalty Fine Management Procedure</a> outlines the measures and processes implemented by Circle of Nine Limited t/a Freak Fan to address non-compliance, violations, and breaches of platform rules and policies. This procedure aims to ensure fair enforcement, transparency, and consistency in applying penalties and fines to content providers and users engaging with the Freak Fan platform.</p>
                    <h2>2. Purpose</h2>
                    <p>The purpose of this procedure is to establish guidelines for the management of penalties and fines, deter non-compliant behavior, and uphold the integrity of the Freak Fan platform.</p>
                    <h2>3. Definitions</h2>
                    <ol>
                      <li><p><strong>Penalty</strong>: A punitive measure imposed on content providers or users for violating platform rules and policies.</p></li>
                      <li><p><strong>Fine</strong>: A monetary amount levied as a consequence of non-compliance or policy breaches.</p></li>
                      <li><p><strong>Content Provider</strong>: Individuals or entities that produce and upload content to the Freak Fan platform.</p></li>
                    </ol>
                    <h2>4. Violations and Penalties</h2>
                    <ol>
                      <li>
                        <h2>Types of Violations</h2>
                        <p>Violations are categorized based on the severity of the breach:</p>
                        <ol>
                          <li><p>Minor Violations: Infractions that are deemed to have a limited impact and can be rectified with a warning or minor penalty.</p></li>
                          <li><p>Major Violations: Serious breaches that require significant penalties and corrective actions.</p></li>
                          <li><p>Repeated Violations: Instances where a content provider repeatedly engages in the same or similar violations.</p></li>
                        </ol>
                      </li>
                      <li>
                        <h2>Penalty Tiers</h2>
                        <p>Penalties are assigned based on the violation type and severity:</p>
                        <ol>
                          <li><p><strong>Tier 1</strong>: Warning or temporary suspension</p></li>
                          <li><p><strong>Tier 2</strong>: Temporary suspension and monetary fine</p></li>
                          <li><p><strong>Tier 3</strong>: Permanent suspension and substantial monetary fine</p></li>
                        </ol>
                      </li>
                      <li>
                        <h2>Penalty Assessment</h2>
                        <p>The compliance team reviews reported violations and conducts investigations to determine the appropriate penalty tier based on the evidence and severity of the violation.</p>
                      </li>
                    </ol>

                    <h2>5. Fine Imposition</h2>
                    <ol>
                      <li>
                        <h2>Fine Calculation</h2>
                        <p>Fines are calculated based on the nature and severity of the violation. A predetermined fine structure is followed for consistent application.</p>
                      </li>
                      <li>
                        <h2>Fine Notification</h2>
                        <p>Content providers or users who incur fines will be notified of the fine amount, the reason for imposition, and the deadline for payment.</p>
                      </li>
                    </ol>
                    <h2>6. Appeals Process</h2>
                    <ol>
                      <li>
                        <h2>Submission of Appeals</h2>
                        <p>Content providers or users have the right to appeal penalties and fines within a specified timeframe after receiving a notification.</p>
                      </li>
                      <li>
                        <h2>Appeals Review</h2>
                        <p>The appeals review committee, comprised of representatives from legal, compliance, and management teams, will review the appeal and evidence provided.</p>
                      </li>
                      <li>
                        <h2>Appeal Decision</h2>
                        <p>The appeals review committee will make a final decision on whether to uphold, modify, or reverse the penalty and fine. The decision will be communicated to the appellant.</p>
                      </li>
                    </ol>
                    <h2>7. Payment of Fines</h2>
                    <p>Fines must be paid within the specified timeframe to avoid further consequences, including escalated penalties or suspension.</p>                    
                    <h2>8. Record Keeping</h2>
                    <p>A record of all penalties, fines, appeals, and their outcomes will be maintained for transparency and accountability purposes.</p>
                    <h2>9. Indemnification</h2>
                    <ol>
                      <li>
                        <h2>Content Provider Indemnity</h2>
                        <p>By engaging with content on the Freak Fan platform, individual content providers agree to indemnify and hold Circle of Nine Limited t/a Freak Fan harmless from any and all costs, expenses, damages, liabilities, and legal fees arising out of civil or criminal proceedings due to the content they have created, shared, received, or otherwise been involved with.</p>
                      </li>
                      <li>
                        <h2>Scope of Indemnification</h2>
                        <p>This indemnification encompasses, but is not limited to, claims of copyright infringement, trademark violations, defamation, privacy violations, and any other legal claims arising from content-related activities on the platform.</p>
                      </li>
                      <li>
                        <h2>Legal Representation</h2>
                        <p>Content providers agree to provide prompt cooperation and assistance in the defense of claims arising from their content-related activities, covering any legal costs incurred by Circle of Nine Limited t/a Freak Fan.</p>
                      </li>
                      <li>
                        <h2>Limitation of Liability</h2>
                        <p>Circle of Nine Limited t/a Freak Fan will not be held responsible for direct or indirect actions of content providers, and any claims arising from content-related activities will remain the sole responsibility of the content provider.</p>
                      </li>
                    </ol>
                    <p>Please review this complete <a href="/penalty-fine-management-procedure">Penalty & Fine Management Procedure</a> to ensure it accurately reflects your requirements for managing penalties, fines, and indemnification for content providers on the Freak Fan platform.</p>

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

export default connect(mapStateToPros, mapDispatchToProps)(translate(ContentConsentProceduresPage));
