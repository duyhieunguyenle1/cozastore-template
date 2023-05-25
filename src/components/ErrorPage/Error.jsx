import React from 'react'
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className='min-h-screen bg-[#e6e6e6]'>
            <div className='mx-auto h-screen flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center max-w-[500px] text-center'>
                    <h1 className='font-bold text-7xl pb-3'>404</h1>
                    <h2 className='font-semibold text-4xl pb-3 uppercase'>Opps! Page not found</h2>
                    <p className='opacity-80 pb-4'>
                        Sorry, the page you're looking for doesn't exist.
                        If you think something is broken, report a problem
                    </p>
                    <div className='flex flex-col md:flex-row'>
                        <button className='bg-button text-white rounded-full uppercase border border-button
                            hover:bg-black transition-all duration-500 mr-3 mb-2 md:mb-0'>
                            <Link to='/' className='px-7 py-3'>Return Home</Link>
                        </button>
                        <button className='bg-white text-button rounded-full px-7 py-3 uppercase
                            hover:bg-black hover:text-white transition-all duration-500 border border-button'>
                            Report problem
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Error