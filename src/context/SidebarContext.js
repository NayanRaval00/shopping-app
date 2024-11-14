// SidebarContext.js
'use client';

import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
    const [showSideBarData, setShowSideBarData] = useState(false);

    const toggleSidebar = () => {
        setShowSideBarData((prev) => !prev);
    };

    return (
        <SidebarContext.Provider value={{ showSideBarData, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};

// Custom hook to use SidebarContext
export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
};
