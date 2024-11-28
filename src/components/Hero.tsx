import React from 'react';
import { FaPlay, FaCheckCircle } from "react-icons/fa";
import bannerBottle from '../assets/images/banner-img.png';


export default function Hero() {
  return (
    <div className="hero">
      <div className='first-hero'>
        <div className='first-hero-title'>READY TO GET <span style={{color: '#379eff'}}>HYDRATED?</span></div>
        <div className='first-hero-content'>To drink the best water please come to us and give us order.</div>
        <div className='first-hero-action'>
          <div className='hero-action'>Order Now</div>
          <div className='first-hero-icon1'><FaPlay/></div>
        </div>
      </div>
      <div className='hero-image'>
        <img className='hero-image-src' src={bannerBottle}/>
      </div>
      <div className='third-hero'>
        <div className='third-hero-content-container'>
          <FaCheckCircle className='third-hero-icon'/>
          <div className='third-hero-content'>
            <div className='third-hero-content-title'>Laboratory tested</div>
            <div className='third-hero-content-subtext'>Fresh water is necessary for survival of all living organisms on Earth.</div>
          </div>
        </div>
        <div className='third-hero-content-container'>
          <FaCheckCircle className='third-hero-icon'/>
          <div className='third-hero-content'>
            <div className='third-hero-content-title'>Great composition</div>
            <div className='third-hero-content-subtext'>Fresh water is necessary for survival of all living organisms on Earth.</div>
          </div>
        </div>
        <div className='third-hero-content-container'>
          <FaCheckCircle className='third-hero-icon'/>
          <div className='third-hero-content'>
            <div className='third-hero-content-title'>Nano filtration</div>
            <div className='third-hero-content-subtext'>Fresh water is necessary for survival of all living organisms on Earth.</div>
          </div>
        </div>
      </div>
    </div>
  );
}