import React, { Component } from "react";
import "./HelpPage.css";
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

class HelpPage extends Component {
  
  changePage = (event, page) => {
    event.preventDefault();
    this.setState({ displayContent: page });
  };
  render() {
    const displayContent = this.props.page.pageData;
    // console.log(displayContent)
    return (
      <>
        <div className="static-page-sec">          
            <Container>
              <h4 className="head-title">Help Page</h4>
              <Row>
                <Col sm="12" md="4">
                  <div className="static-box">
                    <div className="menu-wapper">
                      <h2 className="text-muted">
                        Help Page
                      </h2>
                      <hr />
                      {/* <ul className="list-unstyled">
                        <li>
                          <Link to="/content-consent-procedures">
                            Content Consent Procedures
                          </Link>
                        </li>
                        <li>
                          <Link to="/">                          
                            Content Provider Agreement Policy
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            Content Provider Onboarding Procedures
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            Content Provider Onboarding Procedures
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            Content Removal & Appeals Policy
                          </Link>
                        </li>
                      </ul> */}
                    </div>
                    <div className="menu-wapper">
                      <h2 className="text-muted">
                        Faq's Page
                      </h2>
                      <hr />
                      <ul className="list-unstyled">
                          {/* <li>
                            <Link to="">
                              Faq's Page
                            </Link>
                          </li>
                          <li>
                            <Link to="">
                              Faq's Page
                            </Link>
                          </li> */}
                      </ul>
                    </div>                    
                  </div>
                </Col>
                <Col sm="12" md="8">
                  <div className="static-box">
                    <div className="content-box">
                      <h3 className="text-muted">Looking for help? </h3>
                      <hr/>
                      <p>Explore our Help Center and Community Guidelines below.</p>
                    </div>
                    <div className="content-box">
                      <h3 className="text-muted mt-5"> General Questions? </h3>
                      <hr/>
                      <p>General questions and inquiries among the most frequently asked.</p>
                    </div>
                    
                    <PageBottom/>
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

export default connect(mapStateToPros, mapDispatchToProps)(translate(HelpPage));
