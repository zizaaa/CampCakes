import React from 'react'

import { Outlet } from 'react-router-dom'
import { Nav,Footer,Cart } from './index'

function Layout() {
    return (
        <div className='flex flex-col'>
            <Nav/>
            <Cart/>
            <main className='mx-4 md:mx-16 pt-20'>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout