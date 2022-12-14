import React, { useEffect, useState } from "react";
import ReviewItem
    from "./review-item.js";
import { findAllReviewsForAnimeThunk }
    from "../../services/anime-review-thunk.js";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";


const ReviewList = ({
    anime_id
}) => {
    const dispatch = useDispatch();
    const { reviewList, averageRating } = useSelector(state => state.review);
    useEffect(() => {
        dispatch(findAllReviewsForAnimeThunk(anime_id))
        console.log('review it', reviewList)
    }, [])

    return (
        <><div>
            {reviewList &&
                <Row class="mt-5 justify-content-center align-items-stretch">
                    {reviewList.map(item => (
                        <Col xs={12} md={4} lg={3} sm={6}>
                            <ReviewItem key={item._id} rev={item} user={item.reviewer} />
                        </Col>
                    ))}
                </Row>
            }
        </div></>
    );
};
export default ReviewList;