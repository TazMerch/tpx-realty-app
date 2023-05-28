import React from "react";
import "../styles/Footer.css";
import Bubbleitem from "./Bubbleitem";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer_container">
          <div className="footer_links">
            <Bubbleitem
              path="https://www.facebook.com/tonymaganathepropertyexpert"
              src="/images/Facebook-icon.png"
            />
            <Bubbleitem
              path="https://www.linkedin.com/in/tony-magana-7911a014"
              src="/images/Linkedin-icon.png"
            />
            <Bubbleitem
              path="https://www.zillow.com/profile/tonymagana"
              src="/images/zillow-icon.png"
            />
            <Bubbleitem
              path="https://www.realtor.com/realestateagents/56cc824e7e54f7010023b473"
              src="/images/realtor-icon.png"
            />
          </div>
          <h4 className="footer_copyright">
            Copyright 2023 © THE PROPERTY EXPERTS REALTY & INVESTMENTS INC. All
            Rights Reserved.
          </h4>
        </div>
      </footer>
    </>
  );
}

export default Footer;
