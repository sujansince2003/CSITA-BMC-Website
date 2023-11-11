import React from "react";
import "./Review.css";

const Review = ({ reviews }) => {
  if (reviews.length === 0) {
    return (
      <>
        <div className="reviews-title">Top Reviews</div>
        <div className="review-section">
          <div className="review-box">
            <div className="review-items">
              <div>
                <span className="review-name">No Rewiew Available</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div>
      <div className="reviews-title">Top Reviews</div>
      <div className="review-section">
        {reviews.map((review, index) => (
              <div  key={index} className="review-box">
                 <div className="review-items">
                   <img
                     src="/events/img/users/user.png"
                     className="review-photo"
                     alt=''
                     />
   
                   <div>
                     <span className="review-name">{review.reviewerName}</span>
                     <p className="review-designation">{review.reviewerLevel}</p>
                   </div>
                 </div>
                 <p className="review-description">
                   {review.description}
                 </p>
               </div>
           
        ))}
      </div>
    </div>
  );
};

export default Review;
