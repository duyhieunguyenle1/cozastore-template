import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { MdLockOutline } from "react-icons/md";

const Login = () => {
    const [inputNameAnimate, setInputNameAnimate] = useState(false);
    const [inputPassAnimate, setInputPassAnimate] = useState(false);
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <div className='bg-[#e9eae3] w-full min-h-screen'>
                <div className='min-h-screen flex items-center justify-center mx-auto'>
                    <div className='rounded-xl bg-white py-16 px-4 md:px-12 w-[450px] shadow'>
                        <h1 className='text-4xl font-bold text-center mb-10'>Login</h1>
                        <form className=''>
                            <div className={`${inputNameAnimate ? 'border-button' : ''} border-b border-solid mb-8 mt-2 transition-all duration-500`}>
                                <label htmlFor="usernameInput" className='w-full opacity-80 font-medium'>Username</label>
                                <div className='flex items-center mt-1 p-2 text-lg opacity-70'>
                                    <FiUser className='text-[#777]' />
                                    <input type="text"
                                        className='px-1 outline-none ml-1'
                                        placeholder='Type your username'
                                        id='usernameInput'
                                        name='name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        onFocus={() => setInputNameAnimate(true)} onBlur={() => setInputNameAnimate(false)}
                                    />
                                </div>
                            </div>
                            <div className={`${inputPassAnimate ? 'border-button' : ''} border-b border-solid mt-2 transition-all duration-500`}>
                                <label htmlFor="passwordInput" className='w-full opacity-80 font-medium'>Password</label>
                                <div className='flex items-center mt-1 p-2 text-lg opacity-70'>
                                    <MdLockOutline className='text-[#777]' />
                                    <input type="password"
                                        className='px-1 outline-none ml-1'
                                        placeholder='Type your password'
                                        id='passwordInput'
                                        name='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        onFocus={() => setInputPassAnimate(true)} onBlur={() => setInputPassAnimate(false)}
                                    />
                                </div>
                            </div>
                            <div className='text-end mt-2'>
                                <Link to={'/'} className='opacity-70 cursor-pointer'>Forgot Password?</Link>
                            </div>
                            <button type='submit'
                                className='px-3 py-2 uppercase font-medium bg-[#e9eae3] transition-all duration-300
                            rounded-full mt-8 cursor-pointer w-full hover:bg-gray-700 hover:text-white'
                            >
                                Login
                            </button>
                            <h4 className='mt-12 text-center text-sm opacity-80'>Or Sign Up Using</h4>
                            <div className='text-center mt-1'>
                                <Link to={'#'} className='uppercase font-medium text-sm'>Sign Up</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login