import React from 'react'
import gfnWater from '../assets/images/water-composition.png'
import gfnTruck from '../assets/images/truck.png'
import gfnSaveWater from '../assets/images/save-water.png'
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Main() {

    return (
        <>
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
        </>
    )

}