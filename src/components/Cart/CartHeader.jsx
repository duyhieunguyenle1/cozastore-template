import React from 'react'
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const CartHeader = () => {
    return (
        <div className='max-w-screen-xl pt-[84px] mx-auto px-4'>
            <div className='pt-8 pl-6 pr-4 flex items-center'>
                <Link to='/' className='flex items-center opacity-80 text-sm'>
                    Home
                    <IoIosArrowForward className='text-xs mx-[10px]' />
                </Link>
                <span className='text-sm opacity-60'>Shopping Cart</span>
            </div>
        </div>
    )
}

export default CartHeader