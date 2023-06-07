import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
    return (
        <>
            <div className="bg-neutral-700   w-full min-h-screen text-white" >
                <Header />
                <main className='min-h-[100vh] mt-3 mb-14'>
                    <Toaster />
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout
