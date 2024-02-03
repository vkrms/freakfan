import React, { useState, useEffect } from 'react';
import {
  InputGroup,
  FormControl,
  Image,
  Modal,
  Media,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import AddCardModalSec from './AddCardModalSec';
import PaymentMethodCard from './PaymentMethodCard';
import { connect } from 'react-redux';
import { translate, t } from 'react-multi-lang';
import WalletAmountSec from './WalletAmountSec';
import { addMoneyViaCardStart, addMoneyViaPaypalStart, fetchWalletDetailsStart } from '../../../store/actions/WalletAction';
import { getErrorNotificationMessage } from '../../helper/NotificationMessage';
import { createNotification } from 'react-redux-notify';
import { fetchAllTransactionStart } from '../../../store/actions/TransactionAction';

const AddWalletAmountModal = (props) => {
  const nullData = ["", null, undefined, "light"];
  const [skipRender, setSkipRender] = useState(true);
  const [paymentType, setPaymentType] = useState("CARD");
  const [selectedCard, setSelectedCard] = useState(null);
  const [showAddCard, setShowAddCard] = useState(false);
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (paymentType === "CCBILL")
      props.dispatch(
        addMoneyViaCardStart({
          amount: amount,
          user_card_id: selectedCard,
        })
      );
  };

  const paypalOnSuccess = (payment) => {
    setTimeout(() => {
      props.dispatch(
        addMoneyViaPaypalStart({
          payment_id: payment.paymentID,
          amount: amount,
        })
      );
    }, 1000);
    props.dispatch(fetchWalletDetailsStart());
    props.dispatch(fetchAllTransactionStart());
    props.closepaymentsModal();
  };

  const paypalOnError = (err) => {
    const notificationMessage = getErrorNotificationMessage(err);
    this.props.dispatch(createNotification(notificationMessage));
  };

  const paypalOnCancel = (data) => {
    const notificationMessage = getErrorNotificationMessage(
      "Payment cancelled please try again.."
    );
    this.props.dispatch(createNotification(notificationMessage));
  };

  useEffect(() => {
    if (!skipRender && !props.addAmount.loading && Object.keys(props.addAmount.successData).length > 0) {
      props.dispatch(fetchWalletDetailsStart());
      props.dispatch(fetchAllTransactionStart());
      // props.closepaymentsModal();
    }
    setSkipRender(false);
  }, [props.addAmount]);

  return (
    <>
      <div className="payment-modal-sec">
        <Modal
          className={`modal-dialog-center user-list-free-modal payment-modal-res ${nullData.includes(localStorage.getItem("theme")) ?
            "" : "dark-theme-modal"
            }`}
          size="xl"
          centered
          show={props.paymentsModal}
          onHide={props.closepaymentsModal}
        >
          {/* <Modal.Header closeButton>
            {/* <Modal.Title>User List</Modal.Title> *
          </Modal.Header> */}
          <Modal.Body className="wallet-card-body">
            <Button className="modal-close"
              onClick={() => props.closepaymentsModal()}>
              <i className="fa fa-times" />
            </Button>
            <div className="payment-modal-body">
              <Row className="justify-content-between">
                <PaymentMethodCard
                  paymentType={paymentType}
                  setPaymentType={setPaymentType}
                  selectedCard={selectedCard}
                  setSelectedCard={setSelectedCard}
                  setShowAddCard={setShowAddCard}
                  showWallet={false}
                />
                <Col md={12} xl={5}>
                  {showAddCard ?
                    <AddCardModalSec
                      setShowAddCard={setShowAddCard}
                    />
                    : <WalletAmountSec
                      amount={amount}
                      setAmount={setAmount}
                      handleSubmit={handleSubmit}
                      paypalOnSuccess={paypalOnSuccess}
                      paypalOnError={paypalOnError}
                      paypalOnCancel={paypalOnCancel}
                      buttonDisable={props.addAmount.buttonDisable}
                      loadingButtonContent={props.addAmount.loadingButtonContent}
                    />
                  }
                </Col>
              </Row>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

const mapStateToPros = (state) => ({
  addAmount: state.wallet.addMoneyInput,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(
  mapStateToPros,
  mapDispatchToProps
)(translate(AddWalletAmountModal));