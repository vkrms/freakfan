import React from "react";
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

const SubscribeDetailsModal = () => {
  return (
    <>
      <div className="wallet-modal-details">
        <h4 className="payment-modal-title">Subscription Details</h4>
        <p>
          Add money to your <a href="www.freak.fan">Freak.Fan</a> wallet so you can enjoy being a Freak without limits
        </p>
        <Form>
          <div className="wallet-account-balance">933.00$</div>
          <div className="add-card-btn">
            <Button type="submit">SUBSCRIBE</Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default SubscribeDetailsModal;
