import React from "react";
import "./Teams.css";
const Teams = ({ img, Name, Post, Facebook }) => {
  return (
    <div className="parent">
      <div>
        <img src={img} alt="" className="p-img" />
      </div>
      <div className="naming">
        <div className="Name">{Name}</div>
        <div className="Post">{Post}</div>
        <div className="social-icons">
          <div className="profile">
            <a href={Facebook} target="_blank" rel="noreferrer">
              View Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
