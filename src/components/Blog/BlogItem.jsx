import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const BlogItem = ({ id, title, category, comment, desc, author, image, release }) => {
    const [isErrorImage, setIsErrorImage] = useState(false)
    const [isInView, setIsInView] = useState(false)
    const ref = useRef()

    // create lazy image
    let callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setIsInView(true)
            }
        });
    };

    useEffect(() => {
        let observer = new IntersectionObserver(callback)

        if (ref?.current) {
            observer.observe(ref.current)
        }

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <div className='pb-16 overflow-hidden'>
            <Link to={`/blog/${id}`} className='relative'>
                <img ref={ref} src={isInView ? image : ''} alt="image"
                    className='hover:scale-110 transition-all duration-1000'
                    onError={() => setIsErrorImage(true)}
                />
                {!isErrorImage ? <div className='absolute top-4 left-[10px] bg-white w-[70px] text-center flex flex-col'>
                    <span className='text-3xl font-semibold'>{release}</span>
                    <span>Feb 2023</span>
                </div> : <></>}
            </Link>
            <div className='pt-8'>
                <h4 className='text-2xl font-bold pb-4'>
                    <Link to={`/blog/${id}`}>{title}</Link>
                </h4>
                <p className='opacity-70'>{desc}</p>
                <div className='pt-4 flex flex-wrap items-center justify-between'>
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
                    <Link to={`/blog/${id}`} className='my-[10px] uppercase font-medium flex items-center'>
                        Continue Reading
                        <FaLongArrowAltRight className='ml-2' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogItem