import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoMdCart } from 'react-icons/io'
import { HiOutlineMenu } from 'react-icons/hi'
import { VscSignIn } from "react-icons/vsc";
import { AiOutlineClose, AiOutlineHeart } from 'react-icons/ai'
import { SidebarContext } from '../../contexts/SidebarContext';
import { NavBarContext } from '../../contexts/NavBarContext';
import { logo } from '../../index'
import { NavMenu, SideBar, DropdownBar } from '../index'
import { CartContext } from '../../contexts/CartContext'
import { useAuth0 } from "@auth0/auth0-react";


const NavBar = () => {
    const [stickyBar, setStickyBar] = useState(false)
    const { isMenuOpen, setIsMenuOpen } = useContext(SidebarContext)
    const { isNavOpen, setIsNavOpen, heartAmount, setHeartAmount } = useContext(NavBarContext)
    const { itemAmount } = useContext(CartContext)
    const { isAuthenticated, loginWithPopup, logout, user } = useAuth0()

    const links = [
        {
            path: '/',
            page: 'Home'
        },
        {
            path: '/shop',
            page: 'Shop'
        },
        {
            path: '/cart',
            page: 'Cart'
        },
        {
            path: '/blog',
            page: 'Blog'
        },
        {
            path: '/about',
            page: 'About'
        },
        {
            path: '/contact',
            page: 'Contact'
        },
    ]

    const currentURL = useLocation().pathname

    useEffect(() => {
        window.addEventListener('scroll', () => {
            (window.pageYOffset || window.scrollY) > 200 ? setStickyBar(true) : setStickyBar(false);
        })
    }, [stickyBar])

    useEffect(() => {
        setHeartAmount(0)
    }, [currentURL])


    return (
        <nav className={`z-50 w-full bg-gray-50 shadow ${stickyBar || currentURL != '/' ? 'fixed top-0 left-0' : 'absolute lg:bg-transparent lg:shadow-none'} 
        transition-all duration-300 `}>
            <div className='h-[84px] mx-auto px-8  lg:px-4 flex flex-row items-center max-w-screen-xl'>
                <div className='mr-5'>
                    <Link className='uppercase' to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className='hidden lg:flex items-center '>
                    <div className='w-full px-4'>
                        <ul className='flex uppercase'>
                            {links.map((link, index) => {
                                return <li key={index}
                                    className='mr-2 hover:text-button'>
                                    <Link className={`p-4 tracking-wide leading-4  ${currentURL === link.path ? 'text-button' : ''}`} to={link.path}>{link.page}</Link>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className='h-full flex flex-1 items-center justify-end'>
                    <Link to={'#'} className='pr-[11px] pl-[22px]'>
                        {!isAuthenticated && <VscSignIn className='text-xl md:text-4xl lg:text-3xl' onClick={() => loginWithPopup()} />}
                    </Link>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='relative hidden md:inline-block pr-[11px] pl-[22px]'>
                        <IoMdCart className='text-xl md:text-4xl lg:text-3xl' />
                        <div className='bg-button absolute right-1 -top-1 text-[10px] w-[14px] h-[14px] 
                        text-white flex justify-center items-center'>
                            {itemAmount}
                        </div>
                    </button>
                    <button className='relative pr-[11px] pl-[22px]'>
                        <AiOutlineHeart className='text-xl md:text-4xl lg:text-3xl' />
                        <div className='bg-button absolute right-1 -top-1 text-[10px] w-[14px] h-[14px] 
                        text-white flex justify-center items-center'>
                            {heartAmount}
                        </div>
                    </button>
                    <button onClick={() => setIsNavOpen(!isNavOpen)} className='text-xl md:text-4xl lg:hidden pr-[11px] pl-[22px]'>
                        {isNavOpen ? <AiOutlineClose /> : <HiOutlineMenu />}
                    </button>
                    {user && <DropdownBar />}
                </div>
            </div>
            <NavMenu links={links} />
            <SideBar />
        </nav>
    )
}

export default NavBar