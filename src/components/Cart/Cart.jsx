import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { IoMdAdd, IoMdRemove } from "react-icons/io";


const Cart = () => {
    const { cart, increaseAmount, decreaseAmount, total } = useContext(CartContext)

    return (
        <form className='pt-[75px] pb-[85px]'>
            <div className='max-w-screen-xl mx-auto'>
                <div className='flex flex-col lg:flex-row'>
                    <div className='px-4 lg:px-2 mb-12 max-w-full'>
                        <div className='lg:ml-6'>
                            <div className='border-l border-r border-[#e6e6e6] overflow-auto'>
                                <table className='min-w-[650px] w-full'>
                                    <tbody className='text-sm font-bold'>
                                        <tr className='border-t border-b border-[#e6e6e6]'>
                                            <th className='uppercase py-4 pl-12 w-[120px]'>Product</th>
                                            <th className='py-4 w-[220px]'></th>
                                            <th className='uppercase py-4 w-[120px] text-start'>Price</th>
                                            <th className='uppercase py-4 w-[145px]'>Quantity</th>
                                            <th className='uppercase py-4 w-[145px] pr-12 text-right'>Total</th>
                                        </tr>
                                        {cart?.map(item => (
                                            <tr className='h-[185px] border-b border-[#e6e6e6]' key={item.id}>
                                                <td className='pl-12 pb-7'>
                                                    <div className='mr-5'>
                                                        <img src={item.image} alt="image" />
                                                    </div>
                                                </td>
                                                <td className='font-normal pb-5 break-words pr-1'>{item.title}</td>
                                                <td className='font-normal pb-5 text-base'>$ {item.price.toFixed(2)}</td>
                                                <td className='pb-5'>
                                                    <div className='flex max-w-[100px] items-center h-full font-medium mx-auto'>
                                                        <div className='flex-1 flex justify-center items-center cursor-pointer h-full'
                                                            onClick={() => decreaseAmount(item.id)}
                                                        >
                                                            <IoMdRemove />
                                                        </div>
                                                        <div className='h-full flex justify-center items-center text-lg text-button'>{item.amount}</div>
                                                        <div className='flex-1 flex justify-center items-center cursor-pointer h-full'
                                                            onClick={() => increaseAmount(item.id)}
                                                        >
                                                            <IoMdAdd />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='pb-5 pr-12 font-medium text-right text-lg'>$ {(item.amount * item.price).toFixed(2)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className='flex px-10 pt-[18px] pb-4 border-x border-b items-start md:items-center justify-between flex-col md:flex-row'>
                                <div className='my-1 mr-5 flex flex-col md:flex-row'>
                                    <input type="text" name='coupon' placeholder='Coupon Code'
                                        className='rounded-full border px-5 my-1 outline-none
                                        mr-2 w-[220px] h-11'
                                    />
                                    <div className='uppercase my-1 px-4 border font-medium rounded-full
                                        bg-[#f3f3f3] h-11 w-[160px] hover:bg-button hover:text-white
                                        transition-all duration-300 flex items-center justify-center cursor-pointer'
                                    >
                                        Apply Coupon
                                    </div>
                                </div>
                                <div className='uppercase my-2 px-4 border font-medium rounded-full
                                    bg-[#f3f3f3] h-11 w-[160px] hover:bg-button hover:text-white
                                    transition-all duration-300 flex items-center justify-center cursor-pointer'
                                >
                                    Update Cart
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-4 lg:px-2 mb-12 flex-1'>
                        <div className='border p-4 lg:p-10 pt-7 mx-auto lg:mx-5'>
                            <h4 className='text-xl font-bold uppercase pb-7'>Cart Totals</h4>
                            <div className='flex border-b border-dashed border-[#d9d9d9] pb-3'>
                                <div className='flex-[0_0_35%] font-medium'>
                                    <span>Subtotal: </span>
                                </div>
                                <div className='flex-[0_0_65%] text-lg'>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row border-b border-dashed border-[#d9d9d9] pt-4 pb-8'>
                                <div className='flex-[0_0_35%] font-medium'>
                                    <span>Shipping: </span>
                                </div>
                                <div className='flex-[0_0_65%] pr-0 md:pr-4'>
                                    <p className='pt-2 opacity-70 text-sm'>
                                        There are no shipping methods available. Please double check your address,
                                        or contact us if you need any help.
                                    </p>
                                    <div className='pt-4'>
                                        <span className='uppercase text-sm'>Calculate Shipping</span>
                                    </div>
                                    <div className='mt-2 mb-3 border rounded-sm'>
                                        <select className='outline-none p-1 text-sm'>
                                            <option>Select a country...</option>
                                            <option value="USA">USA</option>
                                            <option value="UK">UK</option>
                                            <option value="VN">VN</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className='mb-3 border rounded-sm'>
                                        <input type="text" placeholder='City / Country'
                                            className='px-4 h-10 text-sm outline-none'
                                        />
                                    </div>
                                    <div className='mb-5 border rounded-sm'>
                                        <input type="text" placeholder='Postcode / Zip'
                                            className='px-4 h-10 text-sm outline-none'
                                        />
                                    </div>
                                    <div className='uppercase my-2 px-4 border font-medium rounded-full
                                        bg-[#f3f3f3] h-11 min-w-[185px] hover:bg-button hover:text-white
                                        transition-all duration-300 flex items-center justify-center cursor-pointer'
                                    >
                                        Update Totals
                                    </div>
                                </div>
                            </div>
                            <div className='flex pb-8 pt-7'>
                                <div className='flex-[0_0_35%] font-medium'>
                                    <span className='text-xl font-semibold'>Total: </span>
                                </div>
                                <div className='flex-[0_0_65%] text-lg'>
                                    <span className='font-medium'>${total.toFixed(2)}</span>
                                </div>
                            </div>
                            <button className='uppercase bg-black rounded-full px-4 h-[50px]
                            text-white hover:bg-button transition-all duration-500 w-full'
                            >
                                Proceed to checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Cart