/** @format */

import "./HeroImgStyles.css";

import React from "react";

import IntroImg from "../../assets/intro-bg.jpg";

import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='into-img' src={IntroImg} alt='IntroImg' />
      </div>
      <div className='content'>
        <p> Well come</p>
        <h1> to the classroom</h1>
        <div>
          <Link to='/signup' className='btn'>
            Sign up
          </Link>
          <Link to='/login' className='btn btn-light'>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
