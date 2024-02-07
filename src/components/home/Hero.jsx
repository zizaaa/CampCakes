import React from 'react'

function Hero() {
    return (
        <div className='flex md:flex-row flex-col-reverse'>
            <div className='flex flex-col items-start gap-2 flex-1 mt-10 md:mt-40'>
                <h1 className='text-7xl max-[440px]:text-5xl'>
                    Taste The Difference at <span className='text-pink'>CampCakes</span>
                </h1>
                <p className='mt-5 text-slate-500'>
                    Experience the perfect blend of sweet indulgence and outdoor excitement at CampCakes. Join us for delicious treats and unforgettable adventures in the great outdoors!
                </p>
                <button className='mt-3 border-[1px] border-pink rounded-md px-5 py-2 hover:bg-pink hover:text-white duration-300 transition-all'>
                    Buy now!
                </button>
            </div>
            <div className='flex items-center justify-center flex-1 '>
                <img 
                    src='/hero.png'
                    className='object-cover md:w-[550px] w-[400px] rotate-0 md:-rotate-12 drop-shadow-md'
                />
            </div>
        </div>
    )
}

export default Hero