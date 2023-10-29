import React from "react";
import "./footerCard.css";
const FooterCard = ({ Icon, title,link, decs }) => {
  return (
    <div className="footer-card">
      <Icon className="footer-icon" />
      <div className="footer-card-body">
        <p className="footer-title">{title}</p>
        <a href={link} className="footer-decs">{decs}</a>
      </div>
    </div>
  );
};

export default FooterCard;
