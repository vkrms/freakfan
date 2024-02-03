import React, { Component } from "react";
import "./CoPerformerAgreementPage.css";
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

class CoPerformerAgreementPage extends Component {

  render() {
    const displayContent = this.props.page.pageData;
    // console.log(displayContent)
    return (
      <>
        <div className="static-page-sec">
          <Container>
            <h4 className="head-title">Co-Performer Agreement Page</h4>
            <Row>
              <Col sm="12" md="12">
                <div className="static-box">
                  <div className="content-box">
                    <h3 className="text-muted">Content Consent Procedures Page </h3>
                    <hr />
                    <h2>1. Scope of Agreement and Co-Performers:</h2>
                    <ol>
                      <li><p>This Co-Performer Agreement ("Agreement") outlines the terms and conditions under which the undersigned individual ("Co-Performer") engages in adult content creation and distribution through Circle of Nine Limited t/a Freak Fan's platform ("Platform"). This Agreement is legally binding and governs the relationship between the Co-Performer and Circle of Nine Limited t/a Freak Fan ("Company") via the Content Provider.</p></li>
                    </ol>
                    <h2> 2. Personal Safety and Content Integrity:</h2>
                    <ol>
                      <li><p>Co-Performer's Responsibility: The Co-Performer acknowledges that their personal safety is of paramount importance. The Co-Performer agrees to take all necessary precautions to ensure their safety during content creation, production, and interactions with Fans or other individuals.</p></li>
                      <li><p>Explicit Consent: The Co-Performer warrants and represents that all content created and shared on the Platform has been produced with the explicit and informed consent of all parties involved.</p></li>
                      <li><p>No Personal Contact: The Co-Performer agrees not to initiate personal contact with Fans or consumers outside the scope of the Platform.</p></li>
                      <li><p>Content Integrity: The Co-Performer shall ensure that the content they co-create, co-produce, and co-share adheres to legal and ethical standards.</p></li>
                    </ol>
                    <h2> 3. Co-Performers and Collaborative Content:</h2>
                    <ol>
                      <li><p>Representation and Warranties: The Co-Performer represents and warrants that any content involving Co-Performers is produced in accordance with all applicable laws and regulations. The Co-Performer shall ensure that Co-Performers are of legal age in their jurisdiction and have provided explicit consent to participate in the content.</p></li>
                      <li><p>Release of Liability: The Co-Performer agrees to indemnify and hold Circle of Nine Limited t/a Freak Fan harmless from any claims, disputes, or legal actions arising from collaborative content.</p></li>
                      <li><p>Content Compliance: The Co-Performer shall ensure that collaborative content adheres to the content guidelines and standards set forth by Circle of Nine Limited t/a Freak Fan.</p></li>
                    </ol>
                    <h2> 4. Compensation and Royalties:</h2>
                    <ol>
                      <li><p>Compensation Structure: Circle of Nine Limited t/a Freak Fan shall provide compensation to the Content Provider based on the terms outlined in the Compensation Agreement, which is incorporated by reference into this Agreement.</p></li>
                      <li><p>Disputed Payments: In the event of a dispute regarding compensation, the Content Provider shall promptly notify Circle of Nine Limited t/a Freak Fan in writing, providing all relevant details and evidence. The Company shall review the dispute and work towards a resolution in good faith.</p></li>
                    </ol>
                    <h2> 5. Intellectual Property and Licensing:</h2>
                    <ol>
                      <li><p>Content Ownership: In allowing the Content Provider to upload the content, the Co-Performer agrees the Content is owned by the Content Provider unless they have a personal agreement in place and/or the Co-Performer has their own Account with Circle of Nine and shares the same content thereon.</p></li>
                      <li><p>License to the Company: By signing the Co-Performer Agreement and allowing the Content Provider to upload and share content, the Co-Performer grants Circle of Nine Limited t/a Freak Fan a non-exclusive, worldwide, royalty-free license to use, reproduce, distribute, modify, adapt, and publicly display the content.</p></li>
                    </ol>
                    <h2> 6. Termination and Account Closure:</h2>
                    <ol>
                      <li><p>Termination by Co-Performer: The Co-Performer may choose to terminate this Agreement at any time by providing written notice to Circle of Nine Limited t/a Freak Fan. Upon termination, Circle of Nine will remove the material to which this agreement relates to at the earliest possible opportunity.</p></li>
                      <li><p>Termination by Company: Circle of Nine Limited t/a Freak Fan reserves the right to terminate this Agreement and suspend or close the Content Provider's account on the Platform in the event of a material breach of the Agreement, violation of the Platform's guidelines and policies, or any activity that may harm the reputation or integrity of the Platform.</p></li>
                      <li><p>Effect of Termination: Co-Performers never have access to the platform; just that their shared content will be suspended and deleted at the earliest possible opportunity. However, Circle of Nine Limited t/a Freak Fan retains the right to retain archived copies of the Co-Performer's content for record-keeping purposes.</p></li>
                      <li><p>Survival of Certain Clauses: The termination of this Agreement shall not affect the validity and enforceability of clauses that, by their nature, are intended to survive termination.</p></li>
                    </ol>
                    <h2> 7. Representations and Warranties:</h2>
                    <ol>
                      <li><p>Legal Compliance: The Co-Performer represents and warrants that all content created, shared, and distributed on the Platform complies with all applicable laws, regulations, and industry standards.</p></li>
                      <li><p>Rights and Permissions: The Co-Performer warrants that they have the legal right and authority to create and share the content on the Platform.</p></li>
                      <li><p>Age Verification: The Co-Performer affirms that they are of legal age to engage in adult content creation and distribution according to the laws of their jurisdiction.</p></li>
                      <li><p>Accuracy of Information: The Co-Performer represents that all information provided to Circle of Nine Limited t/a Freak Fan, including personal information, payment details, and profile information, is accurate and up to date.</p></li>
                    </ol>
                    <h2> 8. Indemnification:</h2>
                    <ol>
                      <li><p>Indemnity Obligations: The Co-Performer agrees to indemnify, defend, and hold Circle of Nine Limited t/a Freak Fan and its affiliates, officers, directors, employees, and agents harmless from any claims, losses, liabilities, damages, costs, and expenses (including legal fees) arising from or related to any content they are responsible for co-creating.</p></li>
                    </ol>
                    <h2> 9. Dispute Resolution:</h2>
                    <ol>
                      <li><p>Good Faith Resolution: In the event of any disputes, claims, or controversies arising under or related to this Agreement, the Parties shall make reasonable efforts to resolve the matter amicably and in good faith through informal negotiations.</p></li>
                      <li><p>Mediation: If the Parties are unable to reach a resolution through informal negotiations, both Parties agree to participate in non-binding mediation to attempt to resolve the dispute.</p></li>
                      <li><p>Arbitration: If mediation does not result in a resolution, any unresolved dispute shall be referred to binding arbitration in accordance with the rules of the arbitration association agreed upon by both Parties.</p></li>
                      <li><p>No Class Actions: The Parties agree that disputes shall be resolved on an individual basis and not through any form of class action, consolidated action, or representative action.</p></li>
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

export default connect(mapStateToPros, mapDispatchToProps)(translate(CoPerformerAgreementPage));
