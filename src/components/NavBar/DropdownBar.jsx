import React from 'react'
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const DropdownBar = () => {
    const { user, logout } = useAuth0()

    return (
        <Menu as={"div"} className='pl-[22px]'>
            <div className='cursor-pointer' aria-expanded="true" aria-haspopup="true">
                <Menu.Button className={'flex items-center'}>
                    <img src={user.picture} alt={user.name} className='w-[30px] h-[30px] rounded-full' />
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>
            <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1 flex flex-col">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to='/profile'
                                    className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block px-4 py-2`}
                                >
                                    Profile
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    type="submit"
                                    className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block px-4 py-2 text-left`}
                                    onClick={() => logout()}
                                >
                                    Sign out
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default DropdownBar