import React from 'react'
import BannerItem from "./BannerItem";

const Banner = () => {
    const banners = [
        {
            img: 'banner1',
            category: 'Women',
            title: 'Spring 2023'
        },
        {
            img: 'banner2',
            category: 'Men',
            title: 'Spring 2023'
        },
        {
            img: 'banner3',
            category: 'Accessories',
            title: 'New Trend'
        }
    ]

    return (
        <section className='pt-20 pb-12'>
            <div className='container mx-auto'>
                <div className='flex flex-wrap justify-center'>
                    {banners.map((banner, id) => {
                        return <BannerItem
                            key={id}
                            banner={banner.img}
                            category={banner.category}
                            title={banner.title}
                        />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Banner