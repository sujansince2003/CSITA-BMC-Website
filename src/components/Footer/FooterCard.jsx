import React from "react";
import "./footerCard.css";
const FooterCard = ({ Icon, title, decs }) => {
  return (
    <div className="footer-card">
      <Icon className="footer-icon" />
      <div className="footer-card-body">
        <p className="footer-title">{title}</p>
        <p className="footer-decs">{decs}</p>
      </div>
    </div>
  );
};

export default FooterCard;
