import React from 'react'
import { MdEmail } from '../icons'
function EmailSubscription() {
    return (
        <section className='mt-32 mb-20 flex items-center justify-center relative'>
            <span className='absolute md:block hidden pointer-events-none -left-10 -top-24'>
                <img src='./rollingPin.png' className='flex w-52'/>
            </span>
            <div className='md:full w-[95%] rounded-md px-3 py-10 flex flex-col items-center text-center bg-pink relative overflow-hidden bg-[url(./subscriptionBG.jpg)] bg-no-repeat bg-cover bg-center'>
                <span className='absolute pointer-events-none left-0 right-0 top-0 bottom-0 bg-black opacity-60'></span>
                <h1 className='text-3xl mb-3 text-white z-10'>Stay Updated and Unlock Exclusive Offers!</h1>
                <p className='w-[80%] text-slate-300 z-10'>We believe that good cakes are meant to be shared. Sign up to receive the latest updates, special offers, and delicious discounts straight to your inbox. Join our community of cake lovers today!</p>

                <div className='flex flex-col sm:flex-row items-center justify-center gap-3 mt-5 w-full z-10'>

                    <div className='flex items-center bg-white rounded-full px-2 w-sm:w-full w-[40%]'>
                        <label htmlFor='email' className='text-lg px-2 text-pink'>
                            <MdEmail/>
                        </label>
                        <input 
                            type='email' 
                            name='email'
                            placeholder='Email'
                            className='outline-none focus:ring-transparent border-none bg-transparent flex-1'
                        />
                    </div>

                    <button className='bg-pink rounded-full drop-shadow-md text-white px-5 py-2 duration-300 transition-all'>
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    )
}

export default EmailSubscription