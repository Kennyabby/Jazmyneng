import React from 'react';
import { FaPlay, FaCheckCircle } from "react-icons/fa";
import bannerBottle from '../assets/images/banner-img.png';


export default function Hero() {
  return (
    <div className="hero">
      <div className='first-hero'>
        <div className='first-hero-title'>
          <div className='fht1'>READY TO GET</div> 
          <div className='fht2' style={{color: '#379eff'}}>HYDRATED?</div>
        </div>
        <div className='first-hero-content'>Experience Pure Refreshment with Jazmyne Table Water.</div>
        <div className='first-hero-action'>
          <div className='hero-action'>Shop Now</div>
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
            <div className='third-hero-content-subtext'>Our water undergoes rigorous testing to ensure purity.</div>
          </div>
        </div>
        <div className='third-hero-content-container'>
          <FaCheckCircle className='third-hero-icon'/>
          <div className='third-hero-content'>
            <div className='third-hero-content-title'>Great composition</div>
            <div className='third-hero-content-subtext'>Carefully balanced for optimal hydration and health.</div>
          </div>
        </div>
        <div className='third-hero-content-container'>
          <FaCheckCircle className='third-hero-icon'/>
          <div className='third-hero-content'>
            <div className='third-hero-content-title'>Nano filtration</div>
            <div className='third-hero-content-subtext'>Advanced technology for crystal-clear water.</div>
          </div>
        </div>
      </div>
    </div>
  );
}