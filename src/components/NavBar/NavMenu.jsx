import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NavBarContext } from '../../contexts/NavBarContext'

const NavMenu = ({ links }) => {
    const { isNavOpen, setIsNavOpen } = useContext(NavBarContext)

    useEffect(() => {
        window.addEventListener('resize', () => {
            let windowWidth = window.innerWidth
            if (windowWidth > 1024) setIsNavOpen(false)
        })
    }, [isNavOpen])

    return (
        <div className={`${isNavOpen ? 'top-0' : '-top-full'} fixed w-full bg-button mt-[84px] right-0
        shadow-2xl h-auto transition-all duration-300 z-20 px-4 lg:px-[35px]`}
        >
            <div className='my-3'>
                <ul className='flex flex-col text-white'>
                    {links.map((link, index) => {
                        return <li key={index}
                            className='mb-2'>
                            <Link className='px-2 py-2 tracking-wide leading-4' to={link.path}>{link.page}</Link>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default NavMenu