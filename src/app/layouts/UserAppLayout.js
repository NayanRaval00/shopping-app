'use client'
import React from 'react'
import Header from '../components/Includes/Header'
import Footer from '../components/Includes/Footer'

export default function UserAppLayout({ children }) {
    return (
        <>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}
