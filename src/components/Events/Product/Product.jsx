import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
const Product = ({ img, title, link, id,desc}) => {
  return (
    <>
    <div className="event-container">
        <div className="card-items">
          <img src={img} alt="" className="event-img" />
          <span className="events-title">{title}</span>
          <p className="card-description">{desc} ...</p>

      <Link className="evetn-view" to={link}>
          <p className="view"> View </p>
      </Link>
          {/* <div className="view-bottom"></div> */}
        </div>

      </div>
    </>
  );
};

export default Product;