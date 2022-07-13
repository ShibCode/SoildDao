import React from "react";
import "./Footer.css";
import arrow from "../../Assets/arrow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="footer__top">
        <div className="footer__topContent">
          <h1 className="footer__heading">Create Free Acount & Get Register</h1>
          <div className="footer__topRight">
            <button className="btn brown-bg-btn footer__btn">
              Register Now
            </button>
            <img
              src={arrow}
              alt="Arrow Pointing to Button"
              className="footer__arrow"
            />
          </div>
        </div>
      </div>
      <div className="footer__main">
        <div className="footer__mainContent">
          <div className="footer__mainColumn">
            <h1 className="footer__logo">
              Soild<span>Dao</span>
            </h1>

            <p className="footer__para">
              Proffesionally scale cross functional human capital and expensive
              technology.
            </p>

            <div className="footer__socials">
              <div className="footer__social">
                <FontAwesomeIcon icon={faGoogle} />
              </div>
              <div className="footer__social">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className="footer__social">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <div className="footer__social">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </div>
          </div>
          <ul className="footer__mainColumn">
            <li className="footer__linkHeading">NFTs and Crypto</li>
            <li className="footer__link">NORI Token</li>
            <li className="footer__link">NFT Artists</li>
            <li className="footer__link">Partnerships</li>
            <li className="footer__link">Integrations</li>
          </ul>
          <ul className="footer__mainColumn">
            <li className="footer__linkHeading">Communit</li>
            <li className="footer__link">Resources</li>
            <li className="footer__link">Design</li>
            <li className="footer__link">Blog</li>
            <li className="footer__link">Events</li>
          </ul>
          <ul className="footer__mainColumn">
            <li className="footer__linkHeading">Resources</li>
            <li className="footer__link">Documentation</li>
            <li className="footer__link">Design</li>
            <li className="footer__link">Documentation</li>
          </ul>
          <ul className="footer__mainColumn">
            <li className="footer__linkHeading">Contact</li>
            <li className="footer__link">Call : 01234560789 </li>
            <li className="footer__link">Email : example@gmail.com</li>
            <li className="footer__link">Address : Dhaka, Bangladesh</li>
          </ul>
          <a href="#section1" className="footer__arrowUp">
            <FontAwesomeIcon icon={faArrowUpLong} className="footer__arrowUp" />
          </a>
        </div>
      </div>
      <div className="footer__bottom">Copyright&copy;All rights reserved</div>
    </footer>
  );
}
