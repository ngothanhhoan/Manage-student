/** @format */

import "./FooterStyles.css";

import React from "react";

import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>29A Ngõ 124 Phố Vĩnh Tuy, Thanh Long, Hai Bà Trưng, Hà Nội</p>
              <p>Ha Noi University of Business and Technology (HUBT)</p>
            </div>
          </div>
          <div className='phone'>
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              0243 6336507
            </h4>
          </div>
          <div className='email'>
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              tttt@hubt.edu.vn
            </h4>
          </div>
        </div>

        <div className='right'>
          <h4>About school</h4>
          <p>
            Training system: Undergraduate - Postgraduate - Associate -
            In-service - Diploma 2
          </p>
          <div className='social'>
            <FaFacebook
              size={20}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={20}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={20}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
