import React, { Component } from "react";
import "./PerformersAgreementPage.css";
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

class PerformersAgreementPage extends Component {

  render() {
    const displayContent = this.props.page.pageData;
    // console.log(displayContent)
    return (
      <>
        <div className="static-page-sec">
          <Container>
            <h4 className="head-title">Performers Agreement</h4>
            <Row>
              <Col sm="12" md="12">
                <div className="static-box">
                  <div className="content-box">
                    <h3 className="text-muted">Performers Agreement</h3>
                    <hr />
                      <h2>1. Scope of Agreement and Co-Performers:</h2>
                      <ol>
                        <li><p>This Performer Agreement ("Agreement") outlines the terms and conditions under which the undersigned individual ("Content Provider") engages in adult content creation and distribution through Circle of Nine Limited t/a Freak Fan's platform ("Platform"). This Agreement is legally binding and governs the relationship between the Content Provider and Circle of Nine Limited t/a Freak Fan ("Company").</p></li>
                        <li><p>The Content Provider acknowledges and agrees that if they collaborate with other individuals to create content ("Co-Performers"), each Co-Performer must individually enter into a separate agreement with Circle of Nine Limited t/a Freak Fan. Each Co-Performer shall be responsible for adhering to the terms of this Agreement and shall provide their own representations and warranties as required herein. The Content Provider shall promptly inform Circle of Nine Limited t/a Freak Fan of any Co-Performers involved in their content creation.</p></li>
                      </ol>
                      <h2>2. Personal Safety and Content Integrity:</h2>
                      <ol>
                        <li><p><strong>Content Provider's Responsibility:</strong> The Content Provider acknowledges that their personal safety is of paramount importance. The Content Provider agrees to take all necessary precautions to ensure their safety during content creation, production, and interactions with Fans or other individuals. This includes, but is not limited to, exercising caution when sharing personal information, maintaining situational awareness, and refraining from engaging in any activity that could compromise their safety.</p></li>
                        <li><p><strong>Explicit Consent:</strong> The Content Provider warrants and represents that all content created and shared on the Platform has been produced with the explicit and informed consent of all parties involved. This includes Co-Performers, if applicable, and any other individuals who may appear or be referenced in the content. The Content Provider shall retain evidence of such consent and provide it to Circle of Nine Limited t/a Freak Fan upon request.</p></li>
                        <li><p><strong>No Personal Contact:</strong> The Content Provider agrees not to initiate personal contact with Fans or consumers outside the scope of the Platform. Any interactions initiated by Fans shall be conducted within the Platform's communication features. The Content Provider shall not share personal contact information or engage in off-platform exchanges that compromise privacy and safety.</p></li>
                        <li><p><strong>Content Integrity:</strong> The Content Provider shall ensure that the content they create, produce, and share adheres to legal and ethical standards. This includes refraining from engaging in activities that may promote harm, non-consensual acts, or any form of exploitation. The Content Provider shall promptly report any content that violates these standards to Circle of Nine Limited t/a Freak Fan for review and appropriate action.</p></li>
                      </ol>
                      <h2>3. Co-Performers and Collaborative Content:</h2>
                      <ol>
                        <li><p><strong>Collaboration Agreements:</strong> In the event that the Content Provider engages in collaborative content creation involving other individuals ("Co-Performers"), the Content Provider shall ensure that a separate written agreement outlining the terms and conditions of the collaboration is established and signed by all parties involved. This agreement shall cover matters such as content ownership, revenue sharing, and roles and responsibilities.</p></li>
                        <li><p><strong>Representation and Warranties:</strong> The Content Provider represents and warrants that any content involving Co-Performers is produced in accordance with all applicable laws and regulations. The Content Provider shall ensure that Co-Performers are of legal age in their jurisdiction and have provided explicit consent to participate in the content. The Content Provider shall retain evidence of such consent and age verification.</p></li>
                        <li><p><strong>Release of Liability:</strong> The Content Provider agrees to indemnify and hold Circle of Nine Limited t/a Freak Fan harmless from any claims, disputes, or legal actions arising from collaborative content. The Content Provider shall assume full responsibility for addressing any legal, contractual, or financial issues that may arise between Co-Performers.</p></li>
                        <li><p><strong>Content Compliance:</strong> The Content Provider shall ensure that collaborative content adheres to the content guidelines and standards set forth by Circle of Nine Limited t/a Freak Fan. The Content Provider shall not create or share content that violates Circle of Nine Limited t/a Freak Fan's policies, infringes upon third-party rights, or breaches any applicable laws.</p></li>
                      </ol>
                      <h2>4. Compensation and Royalties:</h2>
                      <ol>
                        <li><p><strong>Compensation Structure:</strong> Circle of Nine Limited t/a Freak Fan shall provide compensation to the Content Provider based on the terms outlined in the Compensation Agreement, which is incorporated by reference into this Agreement. The Compensation Agreement shall specify the compensation rates, payment frequency, and any additional terms related to earnings.</p></li>
                        <li><p><strong>Royalty Payments:</strong> The Content Provider shall be entitled to receive royalties for the content they create and share on the Platform. Royalties shall be calculated based on the revenue generated from the Content Provider's content, minus any applicable fees or deductions. Royalty payments shall be disbursed according to the payment schedule outlined in the Compensation Agreement.</p></li>
                        <li><p><strong>Taxes and Withholdings:</strong> The Content Provider acknowledges and agrees that they are responsible for any taxes or withholdings applicable to the compensation and royalties received from Circle of Nine Limited t/a Freak Fan. Circle of Nine Limited t/a Freak Fan shall not be held liable for any tax obligations arising from the Content Provider's earnings.</p></li>
                        <li><p><strong>Disputed Payments:</strong> In the event of a dispute regarding compensation or royalty payments, the Content Provider shall promptly notify Circle of Nine Limited t/a Freak Fan in writing, providing all relevant details and evidence. Circle of Nine Limited t/a Freak Fan shall review the dispute and work towards a resolution in good faith.</p></li>
                      </ol>
                      <h2>5. Intellectual Property and Licensing:</h2>
                      <ol>
                        <li><p>Content Ownership: The Content Provider retains full ownership of the original content they create and share on the Platform. Circle of Nine Limited t/a Freak Fan does not claim ownership of the Content Provider's content, and this Agreement does not transfer any intellectual property rights from the Content Provider to Circle of Nine Limited t/a Freak Fan.</p></li>
                        <li><p>License to Circle of Nine Limited t/a Freak Fan: By uploading and sharing content on the Platform, the Content Provider grants Circle of Nine Limited t/a Freak Fan a non-exclusive, worldwide, royalty-free license to use, reproduce, distribute, modify, adapt, and publicly display the content for the purpose of promoting the Platform and the Content Provider's content.</p></li>
                        <li><p>Third-Party Licenses: The Content Provider shall ensure that any third-party materials, such as music, images, or other copyrighted content, used in their creations are properly licensed for use on the Platform. The Content Provider shall not upload, share, or distribute any content that infringes upon the intellectual property rights of third parties.</p></li>
                      </ol>
                      <h2>6. Termination and Account Closure:</h2>
                      <ol>
                        <li><p><strong>Termination by Content Provider:</strong> The Content Provider may choose to terminate this Agreement and close their account on the Platform at any time by providing written notice to Circle of Nine Limited t/a Freak Fan. Upon termination, the Content Provider shall remain responsible for any obligations, content, or actions that occurred prior to the termination date.</p></li>
                        <li><p><strong>Termination by Circle of Nine Limited t/a Freak Fan:</strong> Circle of Nine Limited t/a Freak Fan reserves the right to terminate this Agreement and suspend or close the Content Provider's account on the Platform in the event of a material breach of the Agreement, violation of the Platform's guidelines and policies, or any activity that may harm the reputation or integrity of the Platform.</p></li>
                        <li><p><strong>Effect of Termination:</strong> Upon termination, the Content Provider's access to the Platform shall be revoked, and the Content Provider's content shall be removed from public view. However, Circle of Nine Limited t/a Freak Fan retains the right to retain archived copies of the Content Provider's content for record-keeping purposes.</p></li>
                        <li><p><strong>Survival of Certain Clauses:</strong> The termination of this Agreement shall not affect the validity and enforceability of clauses that, by their nature, are intended to survive termination, including but not limited to intellectual property rights, liability, and indemnification provisions.</p></li>
                      </ol>
                      <h2>7. Confidentiality and Non-Disclosure:</h2>
                      <ol>
                        <li><p><strong>Confidential Information:</strong> The Content Provider acknowledges that during the course of their engagement with Circle of Nine Limited t/a Freak Fan, they may have access to confidential and proprietary information, including but not limited to business strategies, financial data, technical information, and user data ("Confidential Information"). The Content Provider agrees to treat all Confidential Information as strictly confidential and shall not disclose, reproduce, or use such information for any purpose other than as required for the performance of this Agreement.</p></li>
                        <li><p><strong>Non-Disclosure Obligations:</strong> The Content Provider shall take reasonable measures to prevent the unauthorized disclosure of Confidential Information to third parties. This includes implementing safeguards, encryption, and secure storage practices to protect the confidentiality of the information.</p></li>
                        <li><p><strong>Permitted Disclosure:</strong> The Content Provider may only disclose Confidential Information to individuals within their organization who have a legitimate need to know and are bound by confidentiality obligations similar to those in this Agreement. The Content Provider may also disclose Confidential Information if required by law, court order, or governmental authority, provided that the Content Provider gives Circle of Nine Limited t/a Freak Fan prompt notice of such requirement to allow for appropriate action.</p></li>
                        <li><p><strong>Return of Information:</strong> Upon termination of this Agreement, or upon Circle of Nine Limited t/a Freak Fan's request, the Content Provider shall promptly return or destroy all Confidential Information in their possession or control, including any copies thereof.</p></li>
                      </ol>
                      <h2>8. Representations and Warranties:</h2>
                      <ol>
                        <li><p><strong>Legal Compliance:</strong> The Content Provider represents and warrants that all content created, shared, and distributed on the Platform complies with all applicable laws, regulations, and industry standards. The Content Provider shall not create or share content that promotes illegal activities, hate speech, discrimination, or any form of harm.</p></li>
                        <li><p><strong>Rights and Permissions:</strong> The Content Provider warrants that they have the legal right and authority to create and share the content on the Platform. This includes owning the necessary intellectual property rights, obtaining consent from individuals featured in the content, and ensuring compliance with any third-party rights.</p></li>
                        <li><p><strong>Age Verification:</strong> The Content Provider affirms that they are of legal age to engage in adult content creation and distribution according to the laws of their jurisdiction. The Content Provider shall provide age verification documents upon request by Circle of Nine Limited t/a Freak Fan.</p></li>
                        <li><p><strong>Accuracy of Information:</strong> The Content Provider represents that all information provided to Circle of Nine Limited t/a Freak Fan, including personal information, payment details, and profile information, is accurate and up to date. The Content Provider shall promptly update any changes to their information.</p></li>
                      </ol>
                      <h2>9. Indemnification:</h2>
                      <ol>
                        <li><p><strong>Indemnity Obligations:</strong> The Content Provider agrees to indemnify, defend, and hold Circle of Nine Limited t/a Freak Fan and its affiliates, officers, directors, employees, and agents harmless from any claims, losses, liabilities, damages, costs, and expenses (including legal fees) arising from or related to the Content Provider's use of the Platform, content creation, interactions with Fans, and any breach of this Agreement.</p></li>
                        <li><p><strong>Notification of Claims:</strong> In the event of a claim or potential claim against Circle of Nine Limited t/a Freak Fan arising from the Content Provider's actions or content, the Content Provider shall promptly notify Circle of Nine Limited t/a Freak Fan in writing and provide all relevant details. Circle of Nine Limited t/a Freak Fan shall have the right to participate in the defense and settlement of such claims.</p></li>
                        <li><p><strong>Exclusive Remedy:</strong> The Content Provider acknowledges that their exclusive remedy for dissatisfaction with the Platform or any content-related issues is to cease using the Platform and terminate this Agreement.</p></li>
                      </ol>
                      <h2>10. Dispute Resolution:</h2>
                      <ol>
                        <li><p><strong>Good Faith Resolution:</strong> In the event of any disputes, claims, or controversies arising under or related to this Agreement, the Parties shall make reasonable efforts to resolve the matter amicably and in good faith through informal negotiations.</p></li>
                        <li><p><strong>Mediation:</strong> If the Parties are unable to reach a resolution through informal negotiations, both Parties agree to participate in non-binding mediation to attempt to resolve the dispute. The mediation shall be conducted by a mutually agreed-upon mediator in a location convenient to both Parties.</p></li>
                        <li><p><strong>Arbitration:</strong> If mediation does not result in a resolution, any unresolved dispute shall be referred to binding arbitration in accordance with the rules of the arbitration association agreed upon by both Parties. The decision of the arbitrator shall be final and binding on both Parties.</p></li>
                        <li><p><strong>No Class Actions:</strong> The Parties agree that disputes shall be resolved on an individual basis and not through any form of class action, consolidated action, or representative action.</p></li>
                      </ol>
                      <h2>11. Amendments and Modifications:</h2>
                      <ol>
                        <li><p><strong>Written Amendments:</strong> This Agreement may only be amended, modified, or supplemented in writing and signed by both Parties.</p></li>
                        <li><p><strong>Notice of Changes:</strong> Circle of Nine Limited t/a Freak Fan reserves the right to update or modify the terms of this Agreement, including Platform features and policies, at its sole discretion. The Content Provider shall be notified of any changes, and continued use of the Platform after such notification constitutes</p></li>
                        <li><p>acceptance of the revised terms.</p></li>
                      </ol>
                      <h2>12. Entire Agreement:</h2>
                      <ol>
                        <li><p><strong>Integration:</strong> This Agreement, along with any referenced documents and agreements, constitutes the entire agreement between the Parties with respect to the subject matter herein and supersedes all prior or contemporaneous agreements, understandings, and representations, whether oral or written.</p></li>
                        <li><p><strong>Severability:</strong> If any provision of this Agreement is held to be invalid, illegal, or unenforceable, the validity, legality, and enforceability of the remaining provisions shall not be affected or impaired.</p></li>
                        <li><p><strong>Waiver:</strong> The failure of either Party to exercise or enforce any right or provision of this Agreement shall not constitute a waiver of such right or provision.</p></li>
                      </ol>
                      <h2>13. Confidentiality:</h2>
                      <ol>
                        <li><p><strong>Non-Disclosure Obligations:</strong> The Content Provider acknowledges that they may have access to confidential and proprietary information of Circle of Nine Limited t/a Freak Fan, including but not limited to business strategies, financial information, and technical processes ("Confidential Information"). The Content Provider shall maintain the confidentiality of all Confidential Information and shall not disclose, reproduce, or use such information for any purpose other than performing their obligations under this Agreement.</p></li>
                        <li><p><strong>Survival:</strong> The obligations of confidentiality shall survive the termination or expiration of this Agreement for a period of [X years] from the date of termination or expiration.</p></li>
                      </ol>
                      <h2>14. Termination:</h2>
                      <ol>
                        <li><p><strong>Termination Rights:</strong> Either Party may terminate this Agreement at any time for any reason by providing written notice to the other Party. Circle of Nine Limited t/a Freak Fan may also terminate this Agreement immediately if the Content Provider breaches any material term of this Agreement.</p></li>
                        <li><p><strong>Effect of Termination:</strong> Upon termination of this Agreement, the Content Provider shall cease all content creation and distribution on the Platform. The Content Provider's access to the Platform may be restricted, and any outstanding compensation or royalties shall be paid according to the terms of this Agreement.</p></li>
                      </ol>
                      <h2>15. Governing Law and Jurisdiction:</h2>
                      <ol>
                        <li><p><strong>Governing Law:</strong> This Agreement shall be governed by and construed in accordance with the laws of the state of [State] without regard to conflicts of law principles.</p></li>
                        <li><p><strong>Jurisdiction:</strong> Any disputes arising from or related to this Agreement shall be subject to the exclusive jurisdiction of the state and federal courts located in [City, State], and the Parties consent to the personal jurisdiction of such courts.</p></li>
                      </ol>
                      <h2>16. Notices:</h2>
                      <ol>
                        <li><p><strong>Method of Notice:</strong> Any notices or communications required or permitted under this Agreement shall be in writing and delivered by [email, registered mail, or other agreed-upon method].</p></li>
                        <li><p><strong>Address for Notices:</strong> Notices to Circle of Nine Limited t/a Freak Fan shall be sent to [Company's Address]. Notices to the Content Provider shall be sent to the email address provided by the Content Provider during the registration process.</p></li>
                      </ol>
                      <p>Please review the above sections for accuracy and completeness. If you're satisfied, you can use this text as the final Performer Agreement.</p>
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

export default connect(mapStateToPros, mapDispatchToProps)(translate(PerformersAgreementPage));
