import React from 'react'
import { Link } from "react-router-dom";
import { banner1, banner2, banner3 } from "../../index"

const BannerItem = ({ banner, category, title }) => {
    const img = (banner === 'banner1' ? banner1 : (banner === 'banner2' ? banner2 : banner3))

    return (
        <div className='md:flex-[0_0_50%] lg:flex-1 px-4 pb-7'>
            <div className='border group relative hover:bg-button'>
                <img src={img} alt={banner} className='group-hover:opacity-20 transition-all duration-300' />
                <Link to='/shop'>
                    <div className='px-9 py-8 absolute top-0 left-0 group-hover:text-white 
                    transition-all duration-300'>
                        <span className='flex flex-col'>
                            <span className='text-[28px] font-bold'>
                                {category}
                            </span>
                            <span>
                                {title}
                            </span>
                        </span>
                    </div>
                    <div className='pb-1 hidden absolute bottom-8 left-9 text-white border-b-white 
                    border-b-2 group-hover:animate-zoomSlide group-hover:block'>
                        <div className='uppercase font-semibold group-hover:animate-zoomIn'>Shop Now</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default BannerItem