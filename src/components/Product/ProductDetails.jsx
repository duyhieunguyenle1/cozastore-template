import React, { useContext, useState } from 'react'
import { useParams, Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { ProductContext } from "../../contexts/ProductContext";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

const ProductDetails = () => {
    // get the product id from the url
    const { id } = useParams();
    const navigate = useNavigate();

    const { products } = useContext(ProductContext)
    const { addToCart } = useContext(CartContext)
    const [countNumber, setCountNumber] = useState(1)

    const product = products.find(item => item.id === parseInt(id))

    if (!product) {
        return <section className='h-screen flex justify-center items-center'>
            Loading...
        </section>
    }

    const { title, price, description, image, rating } = product
    const { rate, count } = rating

    return (
        <section className='pt-32 pb-12 h-screen flex items-center'>
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row items-center'>
                    <div className='flex justify-center items-center mb-8 lg:mb-0'>
                        <img
                            className='max-w-[200px] lg:max-w-[350px] hover:scale-110
                            transition-all duration-700'
                            src={image} alt="image"
                        />
                    </div>
                    <div className='flex-1 text-center lg:text-left md:ml-20'>
                        <h1 className='text-[26px] font-medium mb-2 
                        mx-auto lg:mx-0'>
                            {title}
                        </h1>
                        <div className='flex items-center justify-center lg:justify-start mb-3'>
                            <div className='flex'>
                                {Array.from({ length: 5 }, (item, index) => (
                                    <span key={index} className='text-yellow-400'>
                                        {rate >= index + 1 ? <FaStar /> : rate >= index + 0.5 ? <FaStarHalfAlt /> : <AiOutlineStar />}
                                    </span>
                                ))}
                            </div>
                            <div className='ml-3 opacity-70'>
                                ({count} customer reviews)
                            </div>
                        </div>
                        <div className='text-xl text-red-500 font-medium mb-5'>
                            $ {price}
                        </div>
                        <p className='mb-4 px-3 lg:px-0'>{description}</p>
                        <div className='flex max-w-[150px] items-center h-full font-medium mb-4 mx-auto lg:mx-0'>
                            <div className='flex-1 flex justify-center items-center cursor-pointer h-full'
                                onClick={() => {
                                    if (countNumber < 2) setCountNumber(1)
                                    else setCountNumber(countNumber - 1)
                                }}
                            >
                                <IoMdRemove />
                            </div>
                            <div className='h-full flex justify-center items-center text-lg text-button'>{countNumber}</div>
                            <div className='flex-1 flex justify-center items-center cursor-pointer h-full'
                                onClick={() => setCountNumber(countNumber + 1)}
                            >
                                <IoMdAdd />
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <button
                                className='bg-button py-4 px-8 text-white rounded uppercase
                            hover:bg-black transition-all duration-300 mr-4'
                                onClick={() => {
                                    addToCart(product, product.id, countNumber)
                                    setCountNumber(1)
                                }}
                            >
                                Add to cart
                            </button>
                            <Link to='/shop'>
                                <button className='bg-white p-4 text-button rounded uppercase hover:text-white h-[56px]
                                hover:bg-button transition-all text-sm duration-300 border border-button tracking-wider'
                                    onClick={() => navigate(-1)}
                                >
                                    Continue Shopping
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails