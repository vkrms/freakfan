import React, { useEffect, useState } from "react";
import { Modal, Container, Row, Col, Button, Form, Image, Media } from "react-bootstrap";
import "./NewHome.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { connect } from "react-redux";
import { translate, t } from "react-multi-lang";
import { fetchPostSuggesstionStart } from "../../store/actions/HomeAction";

const NewFeedSuggestionCard = (props) => {

  useEffect(() => {
    props.dispatch(fetchPostSuggesstionStart());
  }, []);

  const setting = {
    // dots: false,
    // infinite: false,
    // speed: 500,
    // vertical: true,
    // arrow: true,
    // verticalSwiping: true,
    // slidesToShow: 2,
    // slidesToScroll: 1,
    // adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    speed: 500,
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1195,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="new-feed-suggestion-box">
        <div className="new-feed-suggestion-header">
          <h4>{t("suggestions")}</h4>
          <div className="new-feed-suggestion-action-btn-sec">
            <Button className="icon-btn">
              <i className="fas fa-sync-alt"></i>
            </Button>
            <Button className="icon-btn">
              <i className="fas fa-tag"></i>
            </Button>
          </div>
        </div>
        {props.postSug.loading ? (
          <div className="">
            {/* <CommonCenterLoader /> */} {t('loading')}
          </div>
        ) : props.postSug.data.users.length > 0 ? (
          <Slider {...setting}>
            {props.postSug.data.users.map((user) =>
              <div key={user.user_id}>
                <Link to={`/${user.user_unique_id}`}>
                  <div className="new-feed-suggestion-card">
                    <div className="new-feed-suggestion-bg-img-sec">
                      <Image
                        className="new-feed-suggestion-bg-img"
                        src={user.cover}
                      />
                    </div>
                    <div className="new-feed-suggestion-user-info">
                      <div className="new-feed-suggestion-user-img-sec">
                        <Image
                          className="new-feed-suggestion-user-img"
                          src={user.picture}
                        />
                      </div>
                      <div className="new-feed-suggestion-user-details">
                        <h4>{user.name}
                          {user.is_verified_badge == 1 ? <span>
                            <Image
                              className="sidebar-verified-icon"
                              src={
                                window.location.origin + "/assets/images/new-home/verified-icon.png"
                              }
                            />
                          </span>
                            : null
                          }
                        </h4>
                        <Link>
                          @{user.username}
                        </Link>
                      </div>
                    </div>
                    <div className="new-user-feed-premium-sec">
                      <p>{user.user_account_type_formatted}</p>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </Slider>
        ) : (
          t("no_suggestions")
        )}
      </div>
    </>
  );
};

const mapStateToPros = (state) => ({
  postSug: state.home.postSug,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(
  mapStateToPros,
  mapDispatchToProps
)(translate(NewFeedSuggestionCard));
