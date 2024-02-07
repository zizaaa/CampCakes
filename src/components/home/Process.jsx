import React from 'react'

import { FaShoppingBag,FaTruckFast,FaMedal } from '../icons'

function Process() {
    return (
        <section className='flex flex-col items-center mt-32 relative'>
            <span className='absolute z-10 sm:opacity-100 opacity-50 pointer-events-none -left-10 -top-24'>
                <img src='./rollingPin.png' className='flex md:w-auto w-60'/>
            </span>
            <h1 className='text-5xl text-center'>Why CampCakes?</h1>

            <div className='flex flex-row items-center justify-evenly w-full flex-wrap max-[545px]:gap-3'>

                <div className='bg-white drop-shadow-md w-72 h-72 flex flex-col items-center justify-center rounded-full gap-3 p-4'>
                    <span className='text-white text-3xl bg-pink p-2 rounded-full drop-shadow-md'>
                        <FaShoppingBag/>
                    </span>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <h2 className='mb-2 text-pink'>Easy to order</h2>
                        <p className='text-sm text-slate-600'>Our mission is to bring the art of cakes making back to its roots and to share our passion for cake with others.</p>
                    </div>
                </div>

                <div className='bg-white w-72 h-72 flex flex-col items-center justify-center rounded-full drop-shadow-md gap-3 p-4 translate-y-10 max-[545px]:translate-y-0'>
                    <span className='text-white text-3xl bg-pink p-2 rounded-full drop-shadow-md'>
                        <FaTruckFast/>
                    </span>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <h2 className='mb-2 text-pink'>Fast Delivery</h2>
                        <p className='text-sm text-slate-600'>Our mission is to bring the art of cakes making back to its roots and to share our passion for cake with others.</p>
                    </div>
                </div>
                
                <div className='bg-white w-72 h-72 flex flex-col items-center justify-center rounded-full drop-shadow-md gap-3 p-4'>
                    <span className='text-white text-3xl bg-pink p-2 rounded-full drop-shadow-md'>
                        <FaShoppingBag/>
                    </span>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <h2 className='mb-2 text-pink'>Easy to order</h2>
                        <p className='text-sm text-slate-600'>Our mission is to bring the art of cakes making back to its roots and to share our passion for cake with others.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Process