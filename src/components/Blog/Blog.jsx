import React, { useContext } from 'react'
import { BlogContext } from '../../contexts/BlogContext'
import { BlogItem, BlogSubContent } from "../index";

const Blog = () => {
    const blogs = useContext(BlogContext)

    return (
        <div className='py-[60px]'>
            <div className='max-w-screen-xl mx-auto px-4'>
                <div className='flex flex-col md:flex-row -mx-4'>
                    <div className='px-4 pb-20 md:flex-[00_67%] lg:flex-[0_0_75%]'>
                        <div className='pr-0 lg:pr-11'>
                            {blogs.map(blog => (
                                <BlogItem
                                    key={blog.id}
                                    id={blog.id}
                                    title={blog.title}
                                    desc={blog.description}
                                    category={blog.category}
                                    comment={blog.comment}
                                    image={blog.image}
                                    release={blog.dayRelease}
                                    author={blog.author}
                                />
                            ))}
                            <div className='flex pt-2'>
                                <a href="#" className='border bg-[#999] border-[#999] rounded-full w-[36px] m-2 
                                h-[36px] flex items-center justify-center text-white'>1</a>
                                <a href="#" className='border border-[#e6e6e6] rounded-full w-[36px] h-[36px] 
                                flex items-center justify-center m-2 hover:bg-[#999] 
                                hover:text-white transition-all duration-300'>2</a>
                            </div>
                        </div>
                    </div>
                    <BlogSubContent />
                </div>
            </div>
        </div>
    )
}

export default Blog