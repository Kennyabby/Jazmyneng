import React,{useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'

import sendimg from '../../assets/images/contact/sendimg.png'

const Contact = ()=>{
    const contactRef = useRef<HTMLDivElement>(null)
    useEffect(()=>{
        if (contactRef.current){
        contactRef.current.scrollIntoView({
            behavior: 'smooth' 
        })
        }
    },[contactRef])
    return(
        <>
        <div className='about' ref={contactRef}>
            <div className='abouthero'>
                <div className='abouthero-title'>CONTACT US</div>
                <div className='abouthero-route'>
                    <Link to='/'><span>HOME</span></Link> / CONTACT US
                </div>
            </div>
            <svg id="header-wave" viewBox="0 0 1440 125" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d="M1256 11.76C1237.2 17.26 1209.4 27.56 1170 25.76C1127.2 23.86 1125.3 10.16 1087 7.75998C1026.9 3.95998 1015 36.56 959 29.76C920.1 25.06 921.3 8.85998 884 7.75998C841.3 6.55998 834.4 27.66 790 27.76C749.8 27.86 748.5 10.66 707 9.75998C662.5 8.75998 658.2 28.46 611 31.76C563.1 35.06 560 15.26 504 13.76C452.5 12.36 450 28.96 396 29.76C336.7 30.56 332.6 9.35998 279.1 10.76C216.3 12.36 202.3 40.36 146 43.76C112.8 45.76 63 41.96 0 10.76V124.6H1440V10.76C1353.8 -7.34002 1294.8 0.459979 1256 11.76Z" fill="white"></path>
                </g>
            </svg>
            <div className='contact-body'>
                <div className='deltrk-title contactbody-title'>CONTACT <span className='inline-col'>INFORMATION</span></div>
                <div className='contact-cov'>
                    <div className='contact-info'>
                        <div className='contact-ho'>
                            <div className='contact-title'>Head Office</div>
                            <div><b>Location:</b> 2, Okorodo Street, D-line, Garrison, Port Harcourt</div>
                            <div><b>Call:</b> +234 901 4727 891</div>
                            <div><b>Whatsapp:</b> +234 812 2765 076</div>
                        </div>
                        <div className='contact-oph'>
                            <div className='contact-title'>Opening Hours</div>
                            <div><b>Monday:</b> 8:00 - 17:00</div>
                            <div><b>Tuesday:</b> 8:00 - 17:00</div>
                            <div><b>Wednesday:</b> 8:00 - 17:00</div>
                            <div><b>Thursday:</b> 8:00 - 17:00</div>
                            <div><b>Friday:</b> 8:00 - 17:00</div>
                            <div><b>Saturday:</b> 8:00 - 16:00</div>
                            <div><b>Sunday:</b> CLOSED</div>
                        </div>
                    </div>
                    <div className='contact-form'>
                        <div className='contact-title'>Send us message</div>
                        <input 
                            className='contact-input' 
                            placeholder='Your Name'
                            type='text'
                            name='customerName'
                        />
                        <input 
                            className='contact-input' 
                            placeholder='Your Email'
                            type='email'
                            name='customerEmail'
                        />
                        <textarea
                            className='contact-area' 
                            placeholder='Your Message'
                            name='customerMessage'
                        />
                        <div className='ctbuttonCont'>
                            <div className='genButton'>Submit</div>
                        </div>
                        <img className='contact-send' src={sendimg}/>                            
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact