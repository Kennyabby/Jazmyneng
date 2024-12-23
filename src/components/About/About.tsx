import React,{useRef, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import aboutimg from '../../assets/images/about/grouppic.png'
import dabaoibi from '../../assets/images/about/daboibi.jpg'
import guruv from '../../assets/images/about/guruv.jpg'
import hrm from '../../assets/images/about/hrm.jpg'

const About = ()=>{
    const aboutRef = useRef<HTMLDivElement>(null)
    const [aboutMaxHeight, setAboutMaxHeight] = useState('235px')
    const [aboutOverflow, setAboutOverflow] = useState('hidden')
    useEffect(()=>{
        if (aboutRef.current){
        aboutRef.current.scrollIntoView({
            behavior: 'smooth' 
        })
        }
    },[aboutRef])
    return(
        <>
        <div className='about' ref={aboutRef}>
            <div className='abouthero'>
                <div className='abouthero-title'>ABOUT US</div>
                <div className='abouthero-route'>
                    <Link to='/'><span>HOME</span></Link> / ABOUT US
                </div>
            </div>
            <svg id="header-wave" viewBox="0 0 1440 125" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d="M1256 11.76C1237.2 17.26 1209.4 27.56 1170 25.76C1127.2 23.86 1125.3 10.16 1087 7.75998C1026.9 3.95998 1015 36.56 959 29.76C920.1 25.06 921.3 8.85998 884 7.75998C841.3 6.55998 834.4 27.66 790 27.76C749.8 27.86 748.5 10.66 707 9.75998C662.5 8.75998 658.2 28.46 611 31.76C563.1 35.06 560 15.26 504 13.76C452.5 12.36 450 28.96 396 29.76C336.7 30.56 332.6 9.35998 279.1 10.76C216.3 12.36 202.3 40.36 146 43.76C112.8 45.76 63 41.96 0 10.76V124.6H1440V10.76C1353.8 -7.34002 1294.8 0.459979 1256 11.76Z" fill="white"></path>
                </g>
            </svg>
            <div className='about-cont'>
                <div className='about-cont-cov'>
                    <div className='about-cont-title'>
                        <div className='about-cont-text'>ABOUT OUR COMPANY</div>
                        <div className='about-cont-subtext'>"We are delivering water".</div>
                        <div className='about-cont-text1' style={{maxHeight:aboutMaxHeight, overflow:aboutOverflow}}>
                            At Jazmyne Water Factory, we are committed to producing premium, purified water that meets the highest standards of quality and purity. Since our founding, we have been dedicated to providing businesses, wholesalers, distributors, and large-scale companies with reliable access to clean, fresh drinking water.
                            Our state-of-the-art production process utilizes advanced filtration technologies to ensure the purity and safety of every bottle. From sourcing the finest water to rigorous quality control testing, we take every step necessary to deliver a product you can trust.
                            We specialize in bulk water distribution, ensuring timely and efficient supply to our partners. Whether you're a retailer, distributor, or corporate client, we are here to support your needs with consistency and excellence.
                            Our goal is simple: To provide the purest water, while maintaining an unwavering commitment to quality, sustainability, and customer satisfaction. We are proud to be a trusted partner for businesses looking for high-quality bottled water that enhances their product offering.
                        </div>
                        <div className='first-hero-action'>
                            <div className='hero-action'
                                onClick={()=>{
                                    if (aboutMaxHeight!=='auto'){
                                        setAboutMaxHeight('auto')
                                        setAboutOverflow('auto')
                                    }else{
                                        setAboutMaxHeight('235px')
                                        setAboutOverflow('hidden')
                                    }
                                }}
                            >{aboutMaxHeight==='auto'?'Truncate':'Read More'}</div>
                        </div>
                    </div>
                    <div className='about-cont-img'><img src={aboutimg} className='about-cont-src'/></div>
                </div>
                <div className='ourtech'>
            <div className='lpage-shape-top'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path className="lpage-shape-fill" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
                    c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
                    c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                </svg>
            </div>
                <div className='ourtechcov'>
                    <div className='ourtech-cont'>
                        <div className='deltrk-title'><span className='inline-col'>MEET</span> OUR TEAM</div>
                        <div className='deltrk-text'>Founded in 2023, Jazmyne Water Factory uses cutting-edge purification technologies to produce water that meets international standards. Our products are trusted by businesses and organizations for their purity and reliability.</div>
                    </div>
                    <div className='tp1'>                        
                        <FaChevronLeft className='tparrow1'/>
                        <FaChevronRight className='tparrow2'/>
                        <div className='tpcard1'>
                            <img className='tpcard1-img-src' src={guruv}/>                            
                            <div className='tpcard1-job'>Factory Manager</div>
                            <div className='tpcard1-title'>Gurvinda Rahil</div>
                        </div>                        
                        <div className='tpcard1'>
                            <img className='tpcard1-img-src' src={hrm}/>                            
                            <div className='tpcard1-job'>HR Manager</div>
                            <div className='tpcard1-title'>Daniel Amaechi</div>
                        </div>
                        <div className='tpcard1'>
                            <img className='tpcard1-img-src' src={dabaoibi}/>                            
                            <div className='tpcard1-job'>Data Entry</div>
                            <div className='tpcard1-title'>Daboibi Fubara</div>
                        </div>
                    </div>                    
                </div>
            </div>
                <div></div>
            </div>
        </div>
        </>
    )
}

export default About