import React,{useRef, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import aboutimg from '../../assets/images/about/grouppic.png'

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
                        <div className='about-cont-text1' style={{maxHeight:aboutMaxHeight, overflow:aboutOverflow}}>At Jazmyne Water Factory, we are committed to producing premium, purified water that meets the highest standards of quality and purity. Since our founding, we have been dedicated to providing businesses, wholesalers, distributors, and large-scale companies with reliable access to clean, fresh drinking water.

Our state-of-the-art production process utilizes advanced filtration technologies to ensure the purity and safety of every bottle. From sourcing the finest water to rigorous quality control testing, we take every step necessary to deliver a product you can trust.

We specialize in bulk water distribution, ensuring timely and efficient supply to our partners. Whether you're a retailer, distributor, or corporate client, we are here to support your needs with consistency and excellence.

Our goal is simple: To provide the purest water, while maintaining an unwavering commitment to quality, sustainability, and customer satisfaction. We are proud to be a trusted partner for businesses looking for high-quality bottled water that enhances their product offering.</div>
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
                <div>
                    <div></div>
                    <div></div>
                </div>
                <div></div>
            </div>
        </div>
        </>
    )
}

export default About