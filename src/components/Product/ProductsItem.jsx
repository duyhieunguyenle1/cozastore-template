import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { NavBarContext } from '../../contexts/NavBarContext';
import { CartContext } from '../../contexts/CartContext';

const ProductsItem = ({ id, image, title, price, product }) => {
    const [isHeart, setIsHeart] = useState(false)
    const { heartAmount, setHeartAmount } = useContext(NavBarContext)
    const { addToCart } = useContext(CartContext)

    return (
        <div>
            <div className="border border-[#e4e4e4] h-[300px] relative group transition">
                <div className='w-full h-full flex justify-center items-center'>
                    <div className='w-[200px] mx-auto flex
                    justify-center items-center'>
                        <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt={`${title}`} />
                    </div>
                </div>
                <div className='absolute -bottom-0 left-[50%] -translate-x-[50%] group-hover:bottom-[20px] p-2 flex flex-col 
                items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500'>
                    <button>
                        <div className='flex justify-center items-center
                        text- h-10 px-5 bg-gray-200 rounded-full hover:bg-black 
                        hover:text-white transition-all duration-300'>
                            <Link to={`/shop/${id}`}>Quick View</Link>
                        </div>
                    </button>
                </div>
                <div className='absolute top-6 -right-11 group-hover:right-3 p-2 flex flex-col 
                items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500'>
                    <button onClick={() => addToCart(product, id)}>
                        <div className='flex justify-center items-center rounded-md
                        hover:bg-red-500 hover:text-white w-12 h-12 bg-gray-200
                        transition-all duration-300'>
                            <BsPlus className='text-3xl' />
                        </div>
                    </button>
                </div>
            </div>
            <div className='pt-4 flex'>
                <div className='flex flex-col text-sm flex-1'>
                    <div className='pb-[6px]'>
                        <Link to={`/shop/${id}`} className='text-[#999]'>{title}</Link>
                    </div>
                    <span>$ {price.toFixed(2)}</span>
                </div>
                <div className='ml-2 pt-[2px] text-lg cursor-pointer'
                    onClick={() => {
                        if (!isHeart) setHeartAmount(heartAmount + 1)
                        else setHeartAmount(heartAmount - 1)
                        setIsHeart(!isHeart)
                    }}
                >
                    {isHeart ? <AiFillHeart /> : <AiOutlineHeart />}
                </div>
            </div>
        </div>
    )
}

export default ProductsItem