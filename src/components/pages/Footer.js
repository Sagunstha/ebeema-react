import React from "react";
import "./Footer.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { GrFacebookOption, GrLinkedinOption } from "react-icons/gr";
import { useLocation } from "react-router-dom";
function Footer() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <section className="footer">
          <img
            className="top-img"
            src="./image/footerImages/footer2.png"
            alt=""
          />
          <div className="footer_section">
            <div className="footer-row">
              <div className="footer-logo">
                {/* image part-> */}
                <img className="base-img" src="./image/logo.png" alt="" />
                <p>
                  A team of determined, passionate, and crazy entrepreneurs,
                  developers, and financial engineers set out on one common
                  mission - To make financial and insurance services accessible,
                  simple, and seamless.
                </p>
              </div>
              {/* contact-> */}
              <div className="footer-info">
                <p className="footer-info-header">Contact Info</p>
                <ul className="listFooter">
                  <li className="footer-contact-list">
                    <img
                      className="foo-icon"
                      src="./image/footerImages/location.png"
                      alt=""
                    />
                    <span>Kamaladi Marg, Kamaladi Kathmandu</span>
                  </li>
                  <li className="footer-contact-list">
                    <img
                      className="foo-icon"
                      src="./image/footerImages/contact.png"
                      alt=""
                    />
                    <a href="tel:01-4429240" className="color-explore">
                      <span>01-4429240 / +977-9802322097</span>
                    </a>
                  </li>
                  <li className="footer-contact-list">
                    <img
                      className="foo-icon"
                      src="./image/footerImages/message.png"
                      alt=""
                    />
                    <a href="mailto:hi@ebeema.com" className="color-explore">
                      <span>hi@ebeema.com</span>
                    </a>
                  </li>
                  <li className="footer-contact-list">
                    <img
                      className="foo-icon"
                      src="./image/footerImages/time-circle.png"
                      alt=""
                    />
                    <span>Sun - Fri 09:00 AM - 06:00 PM</span>
                  </li>
                </ul>
              </div>
              {/* branch info-> */}
              <div className="footer-info">
                <p className="footer-info-header">Branch Info </p>
                <ul className="listFooter">
                  <li className="footer-contact-list">
                    <img
                      className="foo-icon"
                      src="./image/footerImages/location.png"
                      alt=""
                    />
                    <span>Regional Office - Itahari Dharan Line, Itahari</span>{" "}
                  </li>
                </ul>
              </div>
              {/* explore-> */}
              <div className="footer-info">
                <p className="footer-info-header">Explore</p>
                <ul className="listFooter">
                  <li className="footer-contact-list">
                    <FaAngleDoubleRight
                      className="foo-icon"
                      color="white"
                      size="1rem"
                    />
                    <a href="/aboutUs" className="color-explore">
                      About
                    </a>
                  </li>
                  <li className="footer-contact-list">
                    <FaAngleDoubleRight
                      className="foo-icon"
                      color="white"
                      size="1rem"
                    />
                    <a href="" className="color-explore">
                      Calculator
                    </a>
                  </li>
                  <li className="footer-contact-list">
                    <FaAngleDoubleRight
                      className="foo-icon"
                      color="white"
                      size="1rem"
                    />
                    <a href="/Contact" className="color-explore">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-line-padding">
            <hr className="footer-line" />
          </div>
          <div className="copyright-row">
            <div className="copyright-div-infocom">
              <p>
                Copyright © 2022 , eBeema Pvt. Ltd. | Powered by{" "}
                <a href="#" class="text-primary">
                  Infocom Solutions Pvt. Ltd.
                </a>
              </p>
            </div>
            <div className="copyright-div">
              <a href="/term-condition">Terms & Conditions</a>|
              <a href="/privacy-policy"> Privacy Policy</a>
            </div>
            <div className="copyright-div">
              <div className="copyright-media">
                <a
                  href="https://www.facebook.com/Ebeema.Official"
                  className="team_social"
                >
                  <GrFacebookOption size="21px" />
                </a>
                <a
                  href="https://www.instagram.com/ebeema.nepal/"
                  className="team_social"
                >
                  <RiInstagramLine size="21px" />
                </a>
                <a
                  href="https://www.linkedin.com/company/ebeema2/mycompany/"
                  className="team_social"
                >
                  <GrLinkedinOption size="21px" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Footer;
