import React, { Component } from "react";
import "./ComplaintHandlingProcedurePage.css";
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

class ComplaintHandlingProcedurePage extends Component {

  render() {
    const displayContent = this.props.page.pageData;
    // console.log(displayContent)
    return (
      <>
        <div className="static-page-sec">
          <Container>
            <h4 className="head-title">Complaint Handling Procedure</h4>
            <Row>
              <Col sm="12" md="12">
                <div className="static-box">
                  <div className="content-box">
                    <h3 className="text-muted">Complaint Handling Procedure</h3>
                    <hr />
                    <h2>Scope</h2>
                    <p>This procedure outlines the process for handling and resolving complaints from users, content providers, or any other stakeholders related to the services provided by Circle of Nine Limited t/a Freak Fan. It ensures that all complaints are addressed promptly, fairly, and transparently, maintaining the reputation and trustworthiness of the platform.</p>
                    <h2>1. Introduction</h2>
                    <p>The Complaint Handling Procedure is an essential component of Circle of Nine Limited t/a Freak Fan's commitment to providing exceptional customer service. It establishes a structured approach to address complaints and concerns raised by users, content providers, or any other stakeholders. This procedure outlines the step-by-step process that all personnel involved in the complaint handling process must follow.</p>
                    <h2>2. Objectives</h2>
                    <p>The primary objectives of the Complaint Handling Procedure are to:</p>
                    <ul>
                      <li><p>Provide a Fair and Transparent Process: Ensuring that all parties submitting complaints have access to a consistent and transparent process for resolution.</p></li>
                      <li><p>Promptly Address Complaints: Resolving complaints in a timely manner to prevent escalation and minimize any potential negative impact on users or content providers.</p></li>
                      <li><p>Maintain Customer Satisfaction: Demonstrating Circle of Nine Limited t/a Freak Fan's commitment to customer satisfaction by actively addressing and resolving complaints.</p></li>
                      <li><p>Continuously Improve Services: Using feedback from complaints to identify areas for improvement and enhance the overall user experience.</p></li>
                    </ul>
                    <h2>3. Definitions</h2>
                    <ul>
                      <li><p>Complaint: An expression of dissatisfaction with the services provided by Circle of Nine Limited t/a Freak Fan, submitted by a user, content provider, or any other stakeholder.</p></li>
                      <li><p>Complaint Handler: An individual or team responsible for receiving, documenting, and resolving complaints in accordance with this procedure.</p></li>
                      <li><p>Stakeholder: Any party, including users and content providers, affected by the services provided by Circle of Nine Limited t/a Freak Fan.</p></li>
                    </ul>
                    <h2>4. Complaint Submission</h2>
                    <ol>
                      <li>
                        <h2> Channels for Complaint Submission</h2>
                        <p>Complaints can be submitted through multiple channels to accommodate the preferences of complainants:</p>
                        <ul>
                          <li><p>Email: Complainants can send their complaints to the designated email address: <a href="mailto:hello@freak.fan">hello@freak.fan</a></p></li>
                          <li><p>Website: An online complaint submission form is available on the official Freak Fan website to facilitate easy submission.</p></li>
                          <li><p>Customer Support: Complainants can also contact the customer support team to initiate the complaint handling process.</p></li>
                        </ul>
                      </li>
                      <li>
                        <h2>Complaint Information</h2>
                        <p>When submitting a complaint, complainants are required to provide the following information to ensure efficient and accurate handling:</p>
                        <ul>
                          <li><p>Name and Contact Details: The complainant's full name, email address, and phone number.</p></li>
                          <li><p>Nature of the Complaint: A clear and concise description of the issue, concern, or incident that prompted the complaint.</p></li>
                          <li><p>Relevant Details: Specifics such as dates, times, and parties involved to aid in the investigation.</p></li>
                          <li><p>Supporting Documents or Evidence: Any documents, screenshots, or evidence that support the complaint.</p></li>
                        </ul>
                      </li>
                    </ol>
                    <h2>5. Complaint Handling Process</h2>
                    <ol>
                      <li>
                        <h2>Receipt of Complaint</h2>
                        <p>Upon receiving a complaint through any of the designated channels, the Complaint Handler will initiate the process by acknowledging the receipt of the complaint. An automated response will be sent within [X] hours, confirming the submission and providing the complainant with a unique reference number for tracking purposes. This reference number will be used in all future communications related to the complaint.</p>
                      </li>
                      <li>
                        <h2>Initial Assessment</h2>
                        <p>The Complaint Handler will conduct an initial assessment of the complaint to determine its validity, complexity, and appropriate course of action. During this assessment, the Complaint Handler will consider factors such as the nature of the complaint, the parties involved, and the potential impact on users, content providers, or other stakeholders.
                          If the complaint lacks essential details or requires clarification, the Complaint Handler may contact the complainant to request additional information. This ensures that the investigation process begins with a comprehensive understanding of the complaint.</p>
                      </li>
                      <li>
                        <h2>Investigation</h2>
                        <p>Once the initial assessment is complete and the necessary information is gathered, the Complaint Handler will proceed with the investigation. The depth of the investigation will vary based on the complexity and seriousness of the complaint. The investigation may involve:
                          Collecting Relevant Information: Gathering all pertinent information, including records, communication history, and any relevant evidence submitted by the complainant.
                          Interviewing Involved Parties: If necessary, interviewing parties involved in the complaint to gain a comprehensive understanding of the situation.
                          Cross-Referencing Policies and Procedures: Reviewing the terms of service, policies, and procedures relevant to the complaint to determine if any violations occurred.
                          The investigation process is conducted in a thorough and impartial manner, ensuring that all parties involved have an opportunity to present their perspective.</p>
                      </li>
                      <li>
                        <h2>Resolution</h2>
                        <p>Once the investigation is complete, the Complaint Handler will propose a resolution to address the complaint. The proposed resolution will consider the following factors.
                          Fairness: The resolution should be fair to all parties involved and consider the impact on users, content providers, and other stakeholders.
                          Practicality: The proposed solution should be feasible and practical to implement within the scope of Circle of Nine Limited t/a Freak Fan's capabilities.
                          Compliance: The resolution must comply with relevant policies, regulations, and legal requirements.
                          The proposed resolution may involve corrective actions, compensations, clarifications, or any other measures deemed appropriate based on the investigation's findings.</p>
                      </li>
                      <li>
                        <h2>Communication</h2>
                        <p>The Complaint Handler will communicate the proposed resolution to the complainant in writing. The communication will include the following elements:
                          A Summary of the Investigation: A concise overview of the investigation process, including the key facts considered during the investigation.
                          The Proposed Resolution: A detailed explanation of the proposed resolution, outlining the actions that will be taken to address the complaint.
                          Rationale Behind the Decision: A clear explanation of how the proposed resolution aligns with the findings of the investigation and relevant policies.
                          The communication will be sent through the same channel used for the initial complaint submission, ensuring that the complainant receives the information promptly.</p>
                      </li>
                      <li>
                        <h2>Review and Feedback</h2>
                        <p>Upon receiving the proposed resolution, the complainant will have the opportunity to review the decision and provide feedback. If the complainant is dissatisfied with the proposed resolution, they may express their concerns and provide additional information that could impact the decision.
                          The Complaint Handler will carefully review any feedback provided by the complainant and assess whether the proposed resolution remains appropriate. If necessary, adjustments will be made to the resolution based on the feedback received. This iterative process allows Circle of Nine Limited t/a Freak Fan to maintain an open line of communication with complainants and make informed decisions.</p>
                      </li>
                    </ol>


                    <h2>6. Escalation</h2>
                    <ol>
                      <li>
                        <h2>Internal Escalation</h2>
                        <p>If the complainant remains dissatisfied with the proposed resolution, they have the option to escalate the complaint to a higher level within Circle of Nine Limited t/a Freak Fan's management hierarchy. The escalation process ensures that complaints are reviewed by senior management or designated individuals with the authority to re-evaluate the resolution.</p>
                      </li>
                      <li>
                        <h2>External Escalation</h2>
                        <p>If the complainant is not satisfied with the resolution provided through the internal escalation process, they retain the right to escalate the complaint to relevant external regulatory bodies or authorities. This external escalation option provides an additional layer of accountability and transparency in addressing complaints.</p>
                      </li>
                    </ol>

                    <h2>7. Documentation and Reporting</h2>
                    <ol>
                      <li>
                      <h2>Complaint Records</h2>
                      <p>All complaints, their resolutions, and related communications will be documented in a secure and confidential manner. Accurate records of complaints serve as valuable references for monitoring trends, identifying recurring issues, and assessing the effectiveness of the complaint handling process.</p>
                      </li>
                      <li>
                      <h2>Reporting</h2>
                      <p>Circle of Nine Limited t/a Freak Fan will generate regular reports summarising complaint trends, types, and resolutions. These reports provide management with insights into areas that may require further attention and improvement, contributing to the enhancement of services and user experiences.</p>
                      </li>
                    </ol>                    
                    
                    <h2>8. Continuous Improvement</h2>
                    <ol>
                      <li>
                      <h2>Feedback Analysis</h2>
                      <p>The feedback received from complainants and the resolutions provided will be systematically analysed to identify potential areas for improvement in services, processes, or policies. By identifying recurring themes and root causes, Circle of Nine Limited t/a Freak Fan can implement targeted improvements to prevent similar complaints in the future.</p>
                      </li>
                      <li>
                      <h2>Process Review</h2>
                      <p>To ensure the ongoing effectiveness of the Complaint Handling Procedure, Circle of Nine Limited t/a Freak Fan will periodically review and evaluate the procedure. This review process includes assessing the efficiency of complaint resolution, the clarity of communication with complainants, and any changes in legal or regulatory requirements. The insights gathered from these reviews will inform updates to the procedure and contribute to the continuous enhancement of complaint handling practices.</p>
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

export default connect(mapStateToPros, mapDispatchToProps)(translate(ComplaintHandlingProcedurePage));
