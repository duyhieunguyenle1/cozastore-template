import React from 'react'
import { BsEnvelope, BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BiMap } from "react-icons/bi";

const Contact = () => {
    return (
        <>
            <section className='pt-[104px] pb-28'>
                <div className='max-w-screen-xl mx-auto px-4'>
                    <div className='flex flex-col md:flex-row border border-[#e6e6e5]'>
                        <div className='min-w-[50%] px-4 lg:px-16 pb-[70px] pt-14 border border-[#e6e6e6]'>
                            <form action="">
                                <h4 className='text-center pb-8 text-2xl font-primary opacity-80'>
                                    Send Us A Message
                                </h4>
                                <div className='border border-[#e6e6e6] flex 
                            rounded-sm items-center mb-5'>
                                    <div className='ml-6 text-2xl opacity-50'>
                                        <BsEnvelope />
                                    </div>
                                    <input type="text" placeholder='Your Email Address' name='email'
                                        className='pl-3 pr-7 h-12 flex-1 text-sm outline-none' />
                                </div>
                                <div className='border border-[#e6e6e6] rounded-sm mb-8'>
                                    <textarea name="msg" id="" cols="30" rows="10"
                                        className='w-full outline-none px-7 py-6'
                                        placeholder='How Can We Help?'></textarea>
                                </div>
                                <button className='uppercase w-full bg-black rounded-full text-white
                            font-medium h-[46px] hover:bg-button transition-all duration-300'>
                                    Submit
                                </button>
                            </form>
                        </div>
                        <div className='min-w-[50%] border border-[#e6e6e6] px-4 lg:px-24 py-8 flex flex-col justify-center'>
                            <div className='pb-12 flex w-full'>
                                <div className='pt-1 text-xl w-[60px] flex justify-center'>
                                    <BiMap />
                                </div>
                                <div className='flex-1'>
                                    <h5 className='text-xl'>
                                        Address
                                    </h5>
                                    <p className='pt-[18px] max-w-[250px] opacity-70'>
                                        Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US
                                    </p>
                                </div>
                            </div>
                            <div className='pb-12 flex w-full'>
                                <div className='pt-1 text-lg w-[60px] flex justify-center'>
                                    <BsTelephone />
                                </div>
                                <div className='flex-1'>
                                    <h5 className='text-lg'>
                                        Lets Talk
                                    </h5>
                                    <p className='pt-[18px] max-w-[250px] text-[#717fe0]'>
                                        +84 9600 1236879
                                    </p>
                                </div>
                            </div>
                            <div className='pb-12 flex w-full'>
                                <div className='pt-1 text-xl w-[60px] flex justify-center'>
                                    <HiOutlineMail />
                                </div>
                                <div className='flex-1'>
                                    <h5 className='text-lg'>
                                        Sale Support
                                    </h5>
                                    <p className='pt-[18px] max-w-[250px] text-[#717fe0]'>
                                        hieu@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9941.930714761753!2d105.8521518710079!3d21.03203328582892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSGFub2ksIEhvw6BuIEtp4bq_bSwgSGFub2ksIFZpZXRuYW0!5e0!3m2!1sen!2sus!4v1684425272457!5m2!1sen!2sus" width={1280} height={390} allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" className='w-full'></iframe>
            </div>
        </>
    )
}

export default Contact