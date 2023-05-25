import React, { createContext, useState } from 'react'

export const SidebarContext = createContext()

const SidebarProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleClose = () => {
        setIsMenuOpen(false)
    }

    return (
        <SidebarContext.Provider value={{ isMenuOpen, setIsMenuOpen, handleClose }}>
            {children}
        </SidebarContext.Provider>
    )
}

export default SidebarProvider