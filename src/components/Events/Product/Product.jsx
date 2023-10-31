import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
const Product = ({ img, title, link, id,desc}) => {
  return (
    <>
    <div className="event-container">
        <div className="card-items">
          <img src={img} alt="" className="event-img" />
          <div className="card-details">

          <h4 className="events-title">{title}</h4>
          <p className="card-description">{desc} ...</p>

      <Link className="card-view-button" to={link}>View 
      </Link>
          {/* <div className="view-bottom"></div> */}
        </div>
          </div>

      </div>
    </>
  );
};

export default Product;