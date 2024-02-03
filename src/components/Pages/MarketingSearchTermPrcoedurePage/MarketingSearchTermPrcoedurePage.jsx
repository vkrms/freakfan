import React, { Component } from "react";
import "./MarketingSearchTermPrcoedurePage.css";
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

class MarketingSearchTermPrcoedurePage extends Component {

  render() {
    const displayContent = this.props.page.pageData;
    // console.log(displayContent)
    return (
      <>
        <div className="static-page-sec">
          <Container>
            <h4 className="head-title">Marketing Search Term Prcoedure</h4>
            <Row>
              <Col sm="12" md="12">
                <div className="static-box">
                  <div className="content-box">
                    <h3 className="text-muted">Marketing & Search Term Procedure for Circle of Nine Limited t/a Freak Fan</h3>
                    <hr />
                    <h2>Scope</h2>
                    <p>This procedure outlines Circle of Nine's own marketing procedures as well as procedures that content providers must adhere to.</p>
                    <h2>1. Introduction</h2>
                    <p>The Marketing &amp; Search Term Procedure aims to provide a comprehensive framework for Circle of Nine Limited and its content providers to conduct marketing activities and utilise search terms effectively. This ensures that all marketing efforts align with the brand's values, legal requirements, and ethical standards.</p>
                    <h2>2. Objectives</h2>
                    <p>The primary objectives of this procedure are to:</p>
                    <ol>
                      <li><p>Ensure that marketing activities are conducted in a legal and ethical manner</p></li>
                      <li><p>Provide guidelines for the use of search terms</p></li>
                      <li><p>Establish roles and responsibilities for both Circle of Nine Limited and content providers</p></li>
                    </ol>
                    <h2>3. Definitions</h2>
                    <ol>
                      <li><p><b>Marketing Activities</b>: Any actions taken to promote content or services on the Freak Fan platform.</p></li>
                      <li><p><b>Search Terms</b>: Keywords or phrases used to improve the visibility of content on search engines and within the platform.</p></li>
                      <li><p><b>Content Providers</b>: Individuals or entities that produce and upload content to the Freak Fan platform.</p></li>
                    </ol>
                    <h2>4. Marketing Guidelines</h2>
                    <ol>
                      <li>
                        <h2>Compliance with Laws</h2>
                        <p>All marketing activities must comply with applicable laws and regulations, including but not limited to advertising standards and consumer protection laws.</p>
                      </li>
                      <li>
                        <h2>Ethical Conduct</h2>
                        <p>Marketing activities must be conducted ethically, avoiding any form of misleading or deceptive practices.</p>
                      </li>
                      <li>
                        <h2>Brand Consistency</h2>
                        <p>All marketing materials and messages must be consistent with the Freak Fan brand, including the use of logos, colours, and messaging tone.</p>
                      </li>
                    </ol>
                    <h2>5. Search Term Guidelines</h2>
                    <ol>
                      <li>
                        <h2>Keyword Selection</h2>
                        <p>Content providers should select keywords that are relevant to their content and likely to attract their target audience.</p>
                      </li>
                      <li>
                        <h2>Keyword Usage</h2>
                        <p>Keywords should be used in a manner that enhances the user experience and does not 'keyword stuff' or otherwise manipulate search rankings in a deceptive manner.</p>
                      </li>
                      <li>
                        <h2>Compliance</h2>
                        <p>Content providers must adhere to any platform-specific guidelines regarding keyword usage and search term optimisation.</p>
                      </li>
                    </ol>
                    <h2>6. Responsibilities</h2>
                    <ol>
                      <li>
                        <h2>Marketing Team</h2>
                        <ol>
                          <li>
                            <p>The marketing team is responsible for the overall planning, execution, and monitoring of marketing activities on the Freak Fan platform.</p>
                          </li>
                          <li>
                            <p>This includes the selection of marketing channels, budget allocation, and performance evaluation </p>
                          </li>
                          <li>
                            <p>The marketing team must ensure that all marketing activities are in compliance with legal regulations and ethical standards.</p>
                          </li>
                        </ol>
                      </li>
                      <li>
                        <h2>Content Providers</h2>
                        <ol>
                          <li><p>Content providers are responsible for adhering to the marketing and search term guidelines outlined in this document.</p></li>
                          <li><p>They must ensure that their marketing activities and keyword usage align with the Freak Fan brand and do not violate any laws or platform policies.</p></li>
                          <li><p>Content providers are encouraged to actively engage in ethical marketing practices to promote their content and services.</p></li>
                        </ol>
                      </li>
                      <li>
                        <h2>Compliance Team</h2>
                        <ol>
                          <li><p>The compliance team is responsible for ensuring that all marketing activities and search term usage on the platform are in compliance with this procedure.</p></li>
                          <li><p>They are tasked with monitoring and auditing marketing activities and search term usage to ensure adherence to the guidelines.</p></li>
                          <li><p>The compliance team has the authority to take corrective action in cases of non-compliance, which may include content removal or account suspension.</p></li>
                        </ol>
                      </li>
                      <li>
                        <h2>Legal Team</h2>
                        <ol>
                          <li><p>The legal team is responsible for reviewing and updating the Marketing &amp; Search Term Procedure to ensure it remains compliant with current laws and regulations.</p></li>
                          <li><p>They are also responsible for advising the marketing and compliance teams on legal matters related to marketing activities and search term usage.</p></li>
                        </ol>                        
                      </li>
                      <li>
                        <h2>Content Review Team</h2>
                        <ol>
                          <li><p>The content review team is responsible for ensuring that all content associated with marketing activities adheres to the guidelines set forth in this procedure.</p></li>
                          <li><p>They are tasked with reviewing marketing materials and search terms submitted by content providers for compliance.</p></li>
                        </ol>
                      </li>
                    </ol>

                    <h2>7. Monitoring and Auditing</h2>
                    <ol>
                      <li>
                        <h2>Regular Audits</h2>
                        <ol>
                          <li><p>The compliance team will conduct regular audits to ensure that marketing activities and search term usage are in line with this procedure.</p></li>
                          <li><p>Any discrepancies or violations will be documented and corrective action will be taken as necessary.</p></li>
                        </ol>
                      </li>
                      <li>
                        <h2>Reporting Violations</h2>
                        <ol>
                          <li><p>Both Circle of Nine Limited and content providers are encouraged to report any violations of this procedure.</p></li>
                          <li><p>Reports can be submitted through the platform's reporting system, providing details and evidence of the violation.</p></li>
                        </ol>
                      </li>
                    </ol>

                    <h2>8. Amendments and Updates</h2>
                    <ol>
                      <li>
                        <h2>Policy Review</h2>
                        <ol>
                          <li><p>This procedure will be reviewed annually or as needed to ensure it remains effective and compliant with legal requirements.</p></li>
                          <li><p>Any amendments will be communicated to all relevant parties.</p></li>
                        </ol>
                      </li>
                      <li>
                        <h2>Acceptance of Amendments</h2>
                        <ol>
                          <li><p>By continuing to engage in marketing activities or use search terms on the Freak Fan platform, content providers are considered to have accepted any amendments to this procedure.</p></li>
                        </ol>
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

export default connect(mapStateToPros, mapDispatchToProps)(translate(MarketingSearchTermPrcoedurePage));
