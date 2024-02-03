import React, { useState, useEffect } from "react";
import { Row, Col, Image, Container, Media } from "react-bootstrap";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./NewExplore.css";
import ExploreLoader from "../../Loader/ExploreLoader";
import NoDataFound from "../../NoDataFound/NoDataFound";
import { Link } from "react-router-dom";

const Explore = (props) => {
    console.log(props.explorePosts.data.posts);
    return (
        <>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                gutter="3"
            >
                <Masonry>
                    {props.explorePosts.loading ? (
                        <ExploreLoader />
                    ) : props.explorePosts.data.posts &&
                        props.explorePosts.data.posts.length > 0 ? (
                            props.explorePosts.data.posts.map((post) => 
                                <Link
                                    to={"/post/" + post.post_unique_id}
                                >
                                    <div className={post.postFiles.file_type == "image" ? "explore-multiple-img-sec" : post.postFiles.file_type == "video" ? "explore-video-img-sec" : "explore-audio-img-sec"}>
                                        <Image
                                            className="new-explore-img"
                                            src={
                                                post.postFiles.file_type == "image" ? post.postFiles.post_file : post.postFiles.preview_file ??
                                                window.location.origin +
                                                  "/assets/images/live-stream-post/live-stream-post-1.jpg"
                                            }
                                        />
                                        <div className="explore-icon-sec">
                                            {post.postFiles.file_type == "video" ? 
                                                <Image
                                                    src={
                                                        window.location.origin +
                                                        "/assets/images/new-explore/video-icon.png"
                                                    }
                                                    alt=""
                                                    className="explore-icon-top-right"
                                                />
                                            : post.postFiles.file_type == "audio" ?

                                                <Image
                                                    src={
                                                        window.location.origin +
                                                        "/assets/images/new-explore/audio-icon.png"
                                                    }
                                                    alt=""
                                                    className="explore-icon-top-right"
                                                />
                                            
                                            : 
                                                <Image
                                                    src={
                                                        window.location.origin +
                                                        "/assets/images/new-explore/multiple-img-post.png"
                                                    }
                                                    alt=""
                                                    className="explore-icon-top-right"
                                                />
                                            }
                                        </div>
                                    </div>

                                </Link>
                            )
                        ) : (
                            <NoDataFound></NoDataFound>
                        )
                    }
                </Masonry>
            </ResponsiveMasonry>
        </>
    );
};
export default Explore;
