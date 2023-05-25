import React from 'react'
import { RiArrowUpSLine } from "react-icons/ri";

const BackToTop = () => {
    return (
        <div className='fixed bottom-0 right-10 text-white 
            bg-button p-3 opacity-70 hover:opacity-100 transition-all
            duration-300 cursor-pointer '
            onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })}
        >
            <RiArrowUpSLine />
        </div>
    )
}

export default BackToTop