import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";

const BlogSubContent = () => {
    const archives = [
        {
            month: 'July',
            year: 2022,
            store: 9
        },
        {
            month: 'June',
            year: 2022,
            store: 39
        }, {
            month: 'May',
            year: 2022,
            store: 29
        }, {
            month: 'April',
            year: 2022,
            store: 35
        }, {
            month: 'March',
            year: 2022,
            store: 22
        }, {
            month: 'February',
            year: 2022,
            store: 32
        }, {
            month: 'January',
            year: 2022,
            store: 21
        }, {
            month: 'December',
            year: 2021,
            store: 26
        }
    ]

    const tags = ['Fashion', 'Lifestyle', 'Denim', 'Streetstyle', 'Crafts']

    return (
        <div className='px-4 pb-20 md:flex-[00_33%] lg:flex-[0_0_25%]'>
            <div>
                <div className='pl-7 border border-[#e6e6e6] rounded-full flex items-center'>
                    <input type="text" placeholder='Search'
                        className='outline-none h-[50px] w-[calc(100%-55px)]'
                    />
                    <button className='w-[55px] h-[50px] flex justify-center items-center'><AiOutlineSearch /></button>
                </div>
            </div>
            <div className='pt-14'>
                <h4 className='pb-8 font-bold text-2xl'>Categories</h4>
                <ul>
                    <li className='border-t border-[#e6e6e6]'>
                        <a href="#" className='block px-1 py-2 opacity-70 hover:text-button transition-all duration-300'>
                            Fashion
                        </a>
                    </li>
                    <li className='border-t border-[#e6e6e6]'>
                        <a href="#" className='block px-1 py-2 opacity-70 hover:text-button transition-all duration-300'>
                            Beauty
                        </a>
                    </li>
                    <li className='border-t border-[#e6e6e6]'>
                        <a href="#" className='block px-1 py-2 opacity-70 hover:text-button transition-all duration-300'>
                            Street Style
                        </a>
                    </li>
                    <li className='border-t border-[#e6e6e6]'>
                        <a href="#" className='block px-1 py-2 opacity-70 hover:text-button transition-all duration-300'>
                            Life Style
                        </a>
                    </li>
                    <li className='border-y border-[#e6e6e6]'>
                        <a href="#" className='block px-1 py-2 opacity-70 hover:text-button transition-all duration-300'>
                            DIY & Crafts
                        </a>
                    </li>
                </ul>
            </div>
            <div className='pt-14'>
                <h4 className='pb-5 font-bold text-2xl'>Archive</h4>
                <ul>
                    {archives.map((item, index) => (
                        <li className='pb-2' key={index}>
                            <a href="#" className='flex opacity-70 hover:text-button 
                                        transition-all duration-300 justify-between items-center'>
                                <span>{item.month} {item.year}</span>
                                <span>({item.store})</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='pt-14'>
                <h4 className='pb-5 font-bold text-2xl'>Tags</h4>
                <div className='flex flex-wrap -mr-1'>
                    {tags.map((tag, index) => (
                        <a href="#" key={index} className='text-[13px] border border-[#ccc] rounded-full px-4 
                            mr-1 mb-1 min-h-[30px] flex items-center justify-center hover:text-button hover:border-button
                            transition-all duration-300 opacity-60'>{tag}</a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogSubContent