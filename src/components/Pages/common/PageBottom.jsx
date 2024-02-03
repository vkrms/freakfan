import React from 'react';
import { Link } from "react-router-dom";
import {
    Row,
    Col,
  } from "react-bootstrap";

const PageBottom = () => {
    return (
        <div className='page-bottom-wapper'>
            <div className="content-box pages">
                <h3 className="text-muted mt-5">Policy Pages </h3>
                <hr />
                <Row>
                    <Col sm="12" md="6">                       
                        <Link to="/content-consent-procedures">
                            Content Consent Procedures
                        </Link>
                        <Link to="/content-provider-agreement-policy">
                            Content Provider Agreement Policy
                        </Link>
                        <Link to="/content-provider-onboarding-procedures">
                            Content Provider Onboarding Procedures
                        </Link>
                        <Link to="/content-review-approval-policy">
                            Content Review & Approval Policy
                        </Link>
                        <Link to="/marketing-search-term-prcoedure">
                            Marketing Search Term Prcoedure
                        </Link>
                        <Link to="/penalty-fine-management-procedure">
                            Penalty & Fine Management Procedure
                        </Link>
                        <Link to="/cancellation-refund-policy">
                            Cancellation and Refund Policy
                        </Link>

                    </Col>
                    <Col sm="12" md="6">                        
                        <Link to="/content-removal-appeals-policy">
                            Content Removal & Appeals Policy
                        </Link>
                        <Link to="/content-review-approval-procedure">
                            Content Review & Approval Procedure
                        </Link>
                        <Link to="/co-performer-agreement">
                            Co-Performer Agreement
                        </Link>
                        <Link to="/content-removal-approval-procedure">
                            Content Removal & Approval Procedures
                        </Link>
                        <Link to="/marketing-search-terms-policy">
                            Marketing Search Terms Policy
                        </Link>
                        <Link to="/complaint-handling-procedure">
                            Complaint Handling Procedure
                        </Link>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default PageBottom;
