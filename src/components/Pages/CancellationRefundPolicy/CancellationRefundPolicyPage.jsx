import React, { Component } from "react";
import "./CancellationRefundPolicyPage.css";
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

class CancellationRefundPolicyPage extends Component {

    render() {
        const displayContent = this.props.page.pageData;
        // console.log(displayContent)
        return (
            <>
                <div className="static-page-sec">
                    <Container>
                        <h4 className="head-title">Cancellation and Refund Policy</h4>
                        <Row>
                            <Col sm="12" md="12">
                                <div className="static-box">
                                    <div className="content-box">
                                        <h3 className="text-muted">Cancellation and Refund Policy</h3>
                                        <hr />
                                        <h3>Introduction and Commitment</h3>
                                        <p>At Circle of Nine Limited t/a Freak Fan, we pride ourselves on our unwavering dedication to member satisfaction. Our ethos revolves around transparency, trust, and a commitment to excellence. Our 100% Satisfaction Guarantee is a reflection of this ethos, ensuring that every member feels valued and heard.</p>

                                        <p><b>Cancellation Policy: Empowering Our Members</b></p>

                                        <p>We believe in empowering our members with choice and flexibility. Recognising that circumstances and preferences can change, we offer a seamless cancellation process. Members wishing to cancel are advised to reach out to our dedicated support team, ideally 48 hours before the next billing cycle, to ensure a smooth transition.</p>

                                        <p>Post-cancellation, members will continue to have access to their subscribed content, ensuring they derive the maximum value from their investment.</p>
                                        <h3>Refund Policy: A Testament to Our Assurance</h3>
                                        <p>Our commitment to member satisfaction is unwavering. If, for any reason, a member feels that our service did not meet their expectations, they are entitled to invoke our 100% Satisfaction Guarantee. This guarantee ensures a full refund within the first 30 days of the subscription.</p>

                                        <p>In alignment with CCBill's guidelines, certain situations deemed appropriate by CCBill may lead to the issuance of refunds. We strive to ensure that the refund process is transparent, efficient, and prompt, with funds typically credited back within 7-14 business days.</p>
                                        <h3>Consumer Inquiries and Resolutions: Building Trust Through Communication</h3>
                                        <p>Open, transparent communication forms the bedrock of our operations. Our dedicated support team, trained in conflict resolution and customer service, is always on hand to address any concerns or queries. We believe in proactive problem-solving, ensuring that issues are addressed promptly and effectively.</p>

                                        <p>While we strive for amicable resolutions, it's essential to note that, in line with CCBill's guidelines, excessive consumer complaints and/or chargebacks may necessitate the termination of the subscription service. This measure is in place to maintain the integrity and reputation of our platform.</p>
                                        <h3>Limitations and Clarity</h3>
                                        <p>This policy is tailored specifically for subscription services offered by Circle of Nine Limited t/a Freak Fan. We believe in clarity and specificity, ensuring that our members are always well-informed. Other products or services provided by us may have distinct policies, reflecting our commitment to transparency.</p>
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

export default connect(mapStateToPros, mapDispatchToProps)(translate(CancellationRefundPolicyPage));
