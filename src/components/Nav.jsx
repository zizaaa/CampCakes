import React from 'react'

import { FaCartShopping } from './icons'
import { CartPopover } from './index' 
import { Link, NavLink } from 'react-router-dom'

function Nav() {
    return (
        <nav className="fixed w-full z-20 bg-white dark:bg-gray-900 border-b border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/logo.png" className="h-8" alt="Flowbite Logo" />
                    <span className="max-[400px]:hidden self-center text-2xl font-bold whitespace-nowrap dark:text-white text-pink">CampCakes</span>
                </Link>

                <div className="flex items-center md:order-2 space-x-3 rtl:space-x-reverse">
                    <button 
                        type="button" 
                        className="relative inline-flex items-center px-3 py-2.5 text-sm font-medium text-center text-white bg-pink rounded-md focus:ring-4 focus:outline-none focus:ring-red-300" 
                        data-popover-target="popover-bottom"
                        data-popover-placement="bottom"
                    >
                        <FaCartShopping/>
                        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">8</div>
                    </button>

                    <div data-popover id="popover-bottom" role="tooltip" className="absolute z-10 invisible inline-block w-96 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                        <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                            <h3 className="font-semibold text-gray-900 dark:text-white opacity-50">Recently added products</h3>
                        </div>
                        <CartPopover/>
                        <div className='w-full flex items-center justify-end p-2 drop-shadow-md'>
                            <button className='bg-pink text-white p-2 rounded-sm'>View my shopping cart</button>
                        </div>
                        <div data-popper-arrow></div>
                    </div>

                    <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span className="sr-only">Open user menu</span>
                        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo"/>
                    </button>

                    {/* <!-- Dropdown menu --> */}
                    <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                        <div className="px-4 py-3">
                            <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                        </div>

                        <ul className="py-2" aria-labelledby="user-menu-button">
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                            </li>
                        </ul>
                    </div>

                    <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <NavLink to='/' className={({isActive})=> isActive ? 'block py-2 px-3 text-white bg-pink rounded md:bg-transparent md:text-pink md:p-0':'block py-2 px-3 md:p-0'} aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/cake' className={({isActive})=> isActive ? 'block py-2 px-3 text-white bg-pink rounded md:bg-transparent md:text-pink md:p-0':'block py-2 px-3 md:p-0'}>Cakes</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' className={({isActive})=> isActive ? 'block py-2 px-3 text-white bg-pink rounded md:bg-transparent md:text-pink md:p-0':'block py-2 px-3 md:p-0'}>Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Nav