import React from 'react'
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className='h-screen bg-hero bg-no-repeat bg-cover bg-center py-24'>
            <div className="container mx-auto flex px-8 h-full">
                <div className='flex flex-col justify-center'>
                    <div className='font-semibold flex items-center uppercase'>
                        <div className='w-10 h-[2px] mr-3 bg-red-500'></div>New Trend
                    </div>
                    <h1 className='uppercase text-[70px] leading-[1.1] font-light mb-6'>Autumn sale stylish<br />
                        <span className='font-semibold'>New Arrivals</span>
                    </h1>
                    <Link
                        to='/shop'
                        className='self-start text-white bg-button btn border-b-2'
                    >Shop Now
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero