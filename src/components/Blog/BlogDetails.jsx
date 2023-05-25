import React, { useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { BlogSubContent } from "../index";
import { BlogContext } from "../../contexts/BlogContext";

const BlogDetails = () => {
    const { id } = useParams();
    const blogs = useContext(BlogContext)
    const [isErrorImage, setIsErrorImage] = useState(false)

    const blog = blogs.find(item => item.id === parseInt(id))
    const { title, dayRelease, image, description, author, category, comment } = blog

    return (
        <>
            <div className='max-w-screen-xl pt-[84px] mx-auto px-4'>
                <div className='pt-8 pl-6 pr-4 flex items-center'>
                    <Link to='/' className='flex items-center opacity-80 text-sm'>
                        Home
                        <IoIosArrowForward className='text-xs mx-[10px]' />
                    </Link>
                    <Link to='/blog' className='flex items-center opacity-80 text-sm'>
                        Blog
                        <IoIosArrowForward className='text-xs mx-[10px]' />
                    </Link>
                    <span className='text-sm opacity-60'>{blog.title}</span>
                </div>
            </div>
            <div className='pt-12 pb-5'>
                <div className='max-w-screen-xl mx-auto px-4'>
                    <div className='flex flex-col md:flex-row -mx-4'>
                        <div className='px-4 pb-20 md:flex-[00_67%] lg:flex-[0_0_75%]'>
                            <div className='pr-0 lg:pr-11'>
                                <div className='overflow-hidden'>
                                    <Link to={`/blog/${id}`} className='relative'>
                                        <img src={`../${image}`} alt="image"
                                            className='hover:scale-110 transition-all duration-1000'
                                            onError={() => setIsErrorImage(true)}
                                        />
                                        {!isErrorImage ? <div className='absolute top-4 left-[10px] bg-white w-[70px] text-center flex flex-col'>
                                            <span className='text-3xl font-semibold'>{dayRelease}</span>
                                            <span>Feb 2023</span>
                                        </div> : <></>}
                                    </Link>
                                    <div className='pt-8'>
                                        <div className='pb-5 flex flex-wrap items-center justify-between'>
                                            <span className='text-sm my-[10px] pr-8'>
                                                <span>
                                                    <span className='opacity-80'>By </span>
                                                    {author}
                                                    <span className='text-[#ccc] ml-1 mr-[6px]'> |</span>
                                                </span>
                                                <span>
                                                    {category}
                                                    <span className='text-[#ccc] ml-1 mr-[6px]'> |</span>
                                                </span>
                                                <span>
                                                    {comment} comments
                                                </span>
                                            </span>
                                        </div>
                                        <h4 className='text-4xl font-bold pb-7'>
                                            <Link to={`/blog/${id}`}>{title}</Link>
                                        </h4>
                                        <p className='opacity-70 pb-6'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Nunc sit amet est vel orci luctus sollicitudin. Duis eleifend
                                            vestibulum justo, varius semper lacus condimentum dictum. Donec
                                            pulvinar a magna ut malesuada. In posuere felis diam, vel sodales
                                            metus accumsan in. Duis viverra dui eu pharetra pellentesque.
                                            Donec a eros leo. Quisque sed ligula vitae lorem efficitur faucibus.
                                            Praesent sit amet imperdiet ante. Nulla id tellus auctor, dictum
                                            libero a, malesuada nisi. Nulla in porta nibh, id vestibulum ipsum.
                                            Praesent dapibus tempus erat quis aliquet. Donec ac purus id sapien
                                            condimentum feugiat.
                                        </p>
                                        <p className='opacity-70 pb-6'>
                                            Praesent vel mi bibendum, finibus leo ac, condimentum arcu.
                                            Pellentesque sem ex, tristique sit amet suscipit in, mattis imperdiet
                                            enim. Integer tempus justo nec velit fringilla, eget eleifend neque
                                            blandit. Sed tempor magna sed congue auctor. Mauris eu turpis eget
                                            tortor ultricies elementum. Phasellus vel placerat orci, a venenatis
                                            justo. Phasellus faucibus venenatis nisl vitae vestibulum. Praesent
                                            id nibh arcu. Vivamus sagittis accumsan felis, quis vulputate
                                        </p>
                                    </div>
                                    <div className='pt-4 flex'>
                                        <span className='w-[55px]'>Tags</span>
                                        <div className='flex'>
                                            <a href="#" className='text-[13px] border border-[#ccc] rounded-full px-4 
                                            mr-1 mb-1 min-h-[30px] flex items-center justify-center hover:text-button hover:border-button
                                            transition-all duration-300 opacity-60'>Streetstyle</a>
                                            <a href="#" className='text-[13px] border border-[#ccc] rounded-full px-4 
                                            mr-1 mb-1 min-h-[30px] flex items-center justify-center hover:text-button hover:border-button
                                            transition-all duration-300 opacity-60'>Crafts</a>
                                        </div>
                                    </div>
                                    <div className='pt-10'>
                                        <h5 className='uppercase text-2xl font-bold pb-3'>Leave A Comment</h5>
                                        <p className='pb-10 text-sm opacity-60'>Your email address will not be published. Required fields are marked *</p>
                                        <form action="">
                                            <div className='border border-[#d9d9d9] mb-5'>
                                                <textarea name="cmt" cols="30" rows="10"
                                                    className='min-w-[150px] w-full p-4'
                                                    placeholder='Comment...'
                                                />
                                            </div>
                                            <div className='border border-[#d9d9d9] mb-5 max-w-[286px]'>
                                                <input type="text"
                                                    className='px-4 h-12 w-full outline-none'
                                                    placeholder='Name *'
                                                />
                                            </div>
                                            <div className='border border-[#d9d9d9] mb-5 max-w-[286px]'>
                                                <input type="text"
                                                    className='px-4 h-12 w-full outline-none'
                                                    placeholder='Email *'
                                                />
                                            </div>
                                            <div className='border border-[#d9d9d9] mb-5 max-w-[286px]'>
                                                <input type="text"
                                                    className='px-4 h-12 w-full outline-none'
                                                    placeholder='Website'
                                                />
                                            </div>
                                            <button className='uppercase text-white bg-black hover:bg-button transition-all
                                                duration-300 rounded-full h-10 min-w-[180px] px-4'>
                                                Post Comment
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <BlogSubContent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogDetails