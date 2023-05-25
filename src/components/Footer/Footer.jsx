import React, { useState } from 'react'
import { BsFacebook, BsPinterest, BsInstagram } from "react-icons/bs";
import { icon1, icon2, icon3, icon4, icon5 } from "../../index";

const Footer = () => {
    const categoriesFooter = ['Women', 'Men', 'Shoes', 'Watches']
    const helpFooter = ['Track Order', 'Returns', 'Shipping', 'FAQs']
    const getInTouchFooter = [<BsFacebook />, <BsPinterest />, <BsInstagram />]
    const iconPayFooter = [icon1, icon2, icon3, icon4, icon5]

    const [inputAnimate, setInputAnimate] = useState(false);


    return (
        <footer className='pt-20 pb-8 bg-[#222]'>
            <div className="container mx-auto px-4 lg:px-8 h-full">
                <div className='flex flex-col flex-wrap md:flex-row text-white'>
                    <div className='md:flex-[1_1_50%] lg:flex-1 px-4 pb-12'>
                        <h4 className='uppercase font-bold pb-7 leading-relaxed'>Categories</h4>
                        <ul>
                            {categoriesFooter.map((item, index) => (
                                <li
                                    key={index}
                                    className='pb-3 opacity-70 text-sm hover:text-button 
                                    transition-all duration-300'
                                >
                                    <a href='#'>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='md:flex-[1_1_50%] lg:flex-1 px-4 pb-12'>
                        <h4 className='uppercase font-bold pb-7 leading-relaxed'>Help</h4>
                        <ul>
                            {helpFooter.map((item, index) => (
                                <li
                                    key={index}
                                    className='pb-3 opacity-70 text-sm hover:text-button 
                                    transition-all duration-300'
                                >
                                    <a href='#'>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='md:flex-[1_1_50%] lg:flex-1 px-4 pb-12'>
                        <h4 className='uppercase font-bold pb-7 leading-relaxed'>Get in touch</h4>
                        <p className='text-sm opacity-70 md:max-w-[270px] lg:max-w-none'>
                            Any questions? Let us know in store at 2nd floor, 2 Hai Ba Trung, Hanoi,
                            VN or call us on (+84) 96 743 xxxx
                        </p>
                        <div className='flex pt-7'>
                            {getInTouchFooter.map((item, index) => (
                                <a
                                    href='#'
                                    key={index}
                                    className='mr-4 opacity-70 hover:text-button 
                                    transition-all duration-300'
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className='md:flex-[1_1_50%] lg:flex-1 px-4 pb-12'>
                        <h4 className='uppercase font-bold pb-7 leading-relaxed'>Newsletter</h4>
                        <form action="">
                            <div className='relative group pb-1 border-b-2 border-gray-600'>
                                <input onFocus={() => setInputAnimate(true)} onBlur={() => setInputAnimate(false)} className='bg-transparent outline-none' type="text" placeholder='email@example.com' />
                                <div className={`${inputAnimate ? 'bg-button w-full' : 'bg-gray-600 w-0'} h-[2px] absolute left-0 -bottom-[2px] transition-all duration-500`}></div>
                            </div>
                            <button className='mt-5 btn bg-button hover:bg-white hover:text-button'>Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className='pt-10'>
                    <div className='flex justify-center pb-5'>
                        {iconPayFooter.map((item, index) => (
                            <a
                                href='#'
                                key={index}
                            >
                                <img src={item} alt="icon" />
                            </a>
                        ))}
                    </div>
                    <p className='text-center text-white opacity-70 text-sm'>Copyright ©2023 All rights reserved |
                        This template is made with ♡ by Hieu</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer