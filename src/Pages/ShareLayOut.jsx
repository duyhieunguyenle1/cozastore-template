import React from 'react'
import { Outlet } from "react-router-dom";
import { NavBar, Footer, BackToTop } from "../components";

const ShareLayOut = () => {
    return (
        <>
            <NavBar />
            <main className="min-h-screen">
                <Outlet />
            </main>
            <Footer />
            <BackToTop />
        </>
    )
}

export default ShareLayOut