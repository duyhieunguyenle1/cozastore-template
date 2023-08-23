import React, { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuth0()
    const location = useLocation()

    const notify = () => toast('Please login to continue!!')

    return (
        <>
            {!isLoading && (() => {
                if (!isAuthenticated) {
                    return (
                        <>
                            {notify()}
                            <Navigate to={'/'} state={{ from: location }} replace />
                        </>
                    )
                }
                return children
            })()}
        </>
    )
}

export default ProtectedRoute