import React, { createContext, useEffect, useState } from 'react'

export const NavBarContext = createContext()

const NavBarProvider = ({ children }) => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [heartAmount, setHeartAmount] = useState(0);

    return (
        <NavBarContext.Provider
            value={{
                isNavOpen,
                setIsNavOpen,
                heartAmount,
                setHeartAmount,
            }}
        >
            {children}
        </NavBarContext.Provider>
    )
}

export default NavBarProvider