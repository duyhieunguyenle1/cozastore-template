import React from 'react'
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isLoading } = useAuth0()

    return (
        <>
            {!isLoading && user && (
                <div className='max-w-screen-mn md:max-w-screen-lg mx-auto'>
                    <h2 className="mt-28 ml-12">My Profile</h2>
                    <div className="flex flex-col md:flex-row justify-around mx-3 mt-16 md:-mx-3 user-info">
                        <div className="md:w-3/12">
                            <figure className='avatar avatar-profile'>
                                <img className="rounded-full img-fluid" src={user.picture || '/images/default_avatar.jpg'} alt={user.nickname} />
                            </figure>
                            <Link to='#' className="btn rounded-lg block hover:bg-gray-500 bg-[#fa9c23] border-[#fa9c23] my-12 text-white text-center transition-all duration-300">
                                Edit Profile
                            </Link>
                        </div>

                        <div className="md:w-5/12">
                            <h3>Full Name</h3>
                            <p>{user.nickname}</p>

                            <h3>Email Address</h3>
                            <p>{user.email}</p>

                            <h3>Joined On</h3>
                            <p>{String(user.updated_at).substring(0, 10)}</p>

                            <Link to='/cart' className="btn rounded-lg hover:bg-gray-500 bg-[#0d6efd] block mt-10 text-white text-center transition-all duration-300">
                                My Orders
                            </Link>

                            {/* <Link to='#' className="btn block mt-3">
                                Change Password
                            </Link> */}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Profile