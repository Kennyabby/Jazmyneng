import React,{useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'


const Testimonials = ()=>{
    const testimonialsRef = useRef<HTMLDivElement>(null)
    useEffect(()=>{
        if (testimonialsRef.current){
            testimonialsRef.current.scrollIntoView({
            behavior: 'smooth' 
        })
        }
    },[testimonialsRef])
    return(
        <>
        <div className='about' ref={testimonialsRef}>
            <div className='abouthero'>
                <div className='abouthero-title'>TESTIMONIALS</div>
                <div className='abouthero-route'>
                    <Link to='/'><span>HOME</span></Link> / TESTIMONIALS
                </div>
            </div>
            <svg id="header-wave" viewBox="0 0 1440 125" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d="M1256 11.76C1237.2 17.26 1209.4 27.56 1170 25.76C1127.2 23.86 1125.3 10.16 1087 7.75998C1026.9 3.95998 1015 36.56 959 29.76C920.1 25.06 921.3 8.85998 884 7.75998C841.3 6.55998 834.4 27.66 790 27.76C749.8 27.86 748.5 10.66 707 9.75998C662.5 8.75998 658.2 28.46 611 31.76C563.1 35.06 560 15.26 504 13.76C452.5 12.36 450 28.96 396 29.76C336.7 30.56 332.6 9.35998 279.1 10.76C216.3 12.36 202.3 40.36 146 43.76C112.8 45.76 63 41.96 0 10.76V124.6H1440V10.76C1353.8 -7.34002 1294.8 0.459979 1256 11.76Z" fill="white"></path>
                </g>
            </svg>
        </div>
        </>
    )
}

export default Testimonials