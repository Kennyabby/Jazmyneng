import React from 'react'
import gfnWater from '../assets/images/water-composition.png'
import gfnTruck from '../assets/images/truck.png'
import gfnSaveWater from '../assets/images/save-water.png'
import { FaLongArrowAltRight, FaPlay } from "react-icons/fa";

import deltrk from '../assets/images/delivery-company1.png'
import bottles from '../assets/images/bottles1.png'

import microscope from '../assets/images/microscope-1-4.png'
import flask from '../assets/images/flask-1-1-6.png'
import glass from '../assets/images/glass-1-1.png'
import certificate from '../assets/images/certification-1-1.png'
import tpimg from '../assets/images/rohit-tandon-9wg5jCEPBsw-unsplash-1-1536x1018.png'

import cient1 from '../assets/images/client1.png'
import cient2 from '../assets/images/client2.png'
import cient3 from '../assets/images/client3.png'

import deliveryService from '../assets/images/delivery-service.png'
import deliveryimg from '../assets/images/deltrk.png'
import calender from '../assets/images/calender.png'
import clock from '../assets/images/clock.png'

export default function Main() {

    return (
        <div className='main'>
        <div className='gfn'>
            <section className='gfn-sect'>
                <div className='gfncard'>
                    <div className='gfncard-image'>
                        <img className='gfncard-image-src' src={gfnWater}/>
                    </div>
                    <div className='gfncard-title'>Great Compostion</div>
                    <div className='gfncard-content'>Our refreshing purified bottled water can be delivered to your door.</div>                    
                    <div className='gfncard-link'> Learn More <FaLongArrowAltRight/></div>
                </div>
                <div className='gfncard'>
                    <div className='gfncard-image'>
                        <img className='gfncard-image-src' src={gfnTruck}/>
                    </div>
                    <div className='gfncard-title'>Fast Shipping</div>
                    <div className='gfncard-content'>Our refreshing purified bottled water can be delivered to your door.</div>
                    <div className='gfncard-link'> Learn More <FaLongArrowAltRight/></div>
                </div>
                <div className='gfncard'>
                    <div className='gfncard-image'>
                        <img className='gfncard-image-src' src={gfnSaveWater}/>
                    </div>
                    <div className='gfncard-title'>Nano Filtration</div>
                    <div className='gfncard-content'>Our refreshing purified bottled water can be delivered to your door.</div>
                    <div className='gfncard-link'> Learn More <FaLongArrowAltRight/></div>
                </div>
            </section>
        </div>
        <div className='deltrk'>
            <div className='deltrk-img'>
                <img className='deltrk-img-src' src={deltrk}/>
            </div>
            <div className='deltrk-cnt'>
                <div className='deltrk-header'>
                    <div className='deltrk-title'>LEADER IN <span className='inline-col'>INDUSTRY</span></div>
                    <div className='deltrk-subtitle'>ABOUT US</div>
                </div>
                <div className='deltrk-text'> Our refreshing purified bottled water can now be delivered directly to your door with our water delivery service. Cras faucibus sodales ornare. In ac elit porttitor, tempor mauris in, ullamcorper ex. Integer et vulputate felis. Vestibulum vitae leo at felis semper lacinia. Vivamus quis turpis eget dui faucibus eleifend.</div>     
                <div className='deltrk-btn'>Read more <FaLongArrowAltRight/></div>           
            </div>
        </div>
        <div className='deltrk deltrkmb'>
            <div className='deltrk-cnt'>
                <div className='deltrk-header'>
                    <div className='deltrk-title'>OUR DRINKING <span className='inline-col'>WATER</span></div>
                    <div className='deltrk-subtitle'>ABOUT PRODUCTS</div>
                </div>
                <div className='deltrk-text'> Our refreshing purified bottled water can now be delivered directly to your door with our water delivery service. Cras faucibus sodales ornare. In ac elit porttitor, tempor mauris in, ullamcorper ex. Integer et vulputate felis. Vestibulum vitae leo at felis semper lacinia. Vivamus quis turpis eget dui faucibus eleifend.</div>     
                <div className='first-hero-action'>
                    <div className='hero-action'>Order Now</div>
                </div>
            </div>
            <div className='deltrk-img'>
                <img className='deltrk-img-src' src={bottles}/>
            </div>
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
                    <div className='deltrk-title'><span className='inline-col'>OUR</span> TECHNOLOGY</div>
                    <div className='deltrk-text'>Our company was founded in 2008. Water Brand bottle is great for drinking, cooking, activities, and even for children. The product is certified in 50 countries.</div>
                </div>
                <div className='tp'>
                    <div className='tpcard'>
                        <div className='tpcard-img'>
                            <img className='tpcard-img-src' src={microscope}/>
                        </div>
                        <div className='tpcard-title'>LABORATORY CONTROL</div>
                    </div>
                    <div className='tpcard'>
                        <div className='tpcard-img'>
                            <img className='tpcard-img-src' src={flask}/>
                        </div>
                        <div className='tpcard-title'>GREAT COMPOSITION</div>
                    </div>
                    <div className='tpcard'>
                        <div className='tpcard-img'>
                            <img className='tpcard-img-src' src={glass}/>
                        </div>
                        <div className='tpcard-title'>NANO FILTRATION LEVEL</div>
                    </div>
                    <div className='tpcard'>
                        <div className='tpcard-img'>
                            <img className='tpcard-img-src' src={certificate}/>
                        </div>
                        <div className='tpcard-title'>CERTIFICATE OF QUALITY</div>
                    </div>
                </div>
                <div className='tp-img'>
                    <img className='tp-img-src' src={tpimg}/>
                </div>
            </div>
        </div>
        <div className='client'>
            <div className='clientcov'>
                <div className='client-header'>
                    <div className='deltrk-title'>WHAT <span className='inline-col'>OUR CLIENT SAY</span></div>
                    <div className='deltrk-subtitle'>TESTIMONIALS</div>
                </div>
                <div className='client-list'>
                    <div className='client-card'>
                        <div className='client-card-rating'></div>
                        <div className='client-card-content'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec venenatis nulla. Vivamus sagittis rhoncus.
                        </div>
                        <div className='client-card-profile'>
                            <img className='client-card-pf-img' src={cient1}/>
                            <div className='client-profile-content'>
                                <div className='client-name'>Lila Anderson</div>
                                <div className='client-title'>Student</div>
                            </div>
                        </div>
                    </div> 
                    <div className='client-card'>
                        <div className='client-card-rating'></div>
                        <div className='client-card-content'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec venenatis nulla. Vivamus sagittis rhoncus.
                        </div>
                        <div className='client-card-profile'>
                            <img className='client-card-pf-img' src={cient2}/>
                            <div className='client-profile-content'>
                                <div className='client-name'>Silva Stone</div>
                                <div className='client-title'>Barista</div>
                            </div>
                        </div>
                    </div> 
                    <div className='client-card'>
                        <div className='client-card-rating'></div>
                        <div className='client-card-content'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec venenatis nulla. Vivamus sagittis rhoncus.
                        </div>
                        <div className='client-card-profile'>
                            <img className='client-card-pf-img' src={cient3}/>
                            <div className='client-profile-content'>
                                <div className='client-name'>Justin Fisher</div>
                                <div className='client-title'>Developer</div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className='first-hero-action client-btn'>
                    <div className='hero-action'>View More</div>
                </div>
            </div>
        </div>
        <div className='numbers'>
            <div className='numberscov'>
                <span className='bwd' data-duration="2000" data-to-value="2375" data-from-value="0">2,375 <div className='numbtxt'>BOTTLES WERE DELIVER</div></span>
                <span className='ywd' data-duration="1000" data-to-value="11" data-from-value="0">11 <div className='numbtxt'>YEARS WE DELIVER</div></span>
                <span className='hc' data-duration="2000" data-to-value="99" data-from-value="0">99<span className="">%</span><div className='numbtxt'>HAPPY CUSTOMERS</div></span>
            </div>
        </div>
        <div className='deltrk delivery'>
            <div className='delivery-cnt'>
                <div className='deltrk-cnt'>
                    <div className='deltrk-header delivery-header'>
                        <div className='deltrk-title'><span className='inline-col'>DELIVERY </span>SERVICE</div>
                    </div>
                    <div className='deltrk-text delivery-text'> We will deliver water to your home for 1 hour to anywhere in the city. Just fill the delivery form.</div>     
                    <div className='delivery-cards'>
                        <div className='delivery-card'>
                            <div className='delivery-card-img'>
                                <img className='delivery-card-img-src' src={deliveryimg}/>
                            </div>
                            <div className='delivery-card-txt'>
                                FREE DELIVERY
                            </div>
                        </div>
                        <div className='delivery-card'>
                            <div className='delivery-card-img'>
                                <img className='delivery-card-img-src' src={calender}/>
                            </div>
                            <div className='delivery-card-txt'>
                                7 DAYS A WEEK
                            </div>
                        </div>
                        <div className='delivery-card'>
                            <div className='delivery-card-img'>
                                <img className='delivery-card-img-src' src={clock}/>
                            </div>
                            <div className='delivery-card-txt'>
                                8:00 - 23:00
                            </div>
                        </div>
                    </div>
                </div>
                <div className='deltrk-img'>
                    <img className='deltrk-img-src' src={deliveryService}/>
                </div>
            </div>                
        </div>
        <div className='footer-wave-cov'>
            <svg className="footer-wave" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1440 184">
                    <path className="fbg-wave" d="M1285.4,81.2c-34,12.5-98.3,33.1-186.9,39.8c-230.8,17.6-274.8-85-472.8-71.3
                c-182,12.6-219.4,104.5-345.3,65.2C237.9,101.6,177,70.7,91.6,81.2c-31.7,4-62.6,13-91.6,26.6V184h1440V0
                C1392.2,33.7,1340.3,61,1285.4,81.2z"></path>                
            </svg>
        </div>
        </div>
    )

}