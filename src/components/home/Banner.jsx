import React from 'react'

function Banner() {
    return (
        <section className='flex md:flex-row flex-col my-24 gap-3 bg-[rgb(237,237,237)] p-2 rounded-sm'>
            <div className='flex justify-center flex-1'>
                <img 
                    src='./cakes/banner3.png'
                    className='w-[230px] md:w-[350px] object-cover drop-shadow-md'
                />
            </div>
            <div className='flex flex-col items-start justify-center flex-1 relative overflow-hidden'>
                <h1 className='text-5xl text-pink'>Enjoy the pure bite</h1>
                <p className='mt-5 z-10 text-slate-500'>Indulge in our array of delectable cakes, from rich chocolate delights to a variety of other tempting flavors. At CampCakes, there's something to satisfy every sweet tooth!</p>
                <button className='mt-3 z-10 border-[1px] border-pink rounded-md px-5 py-2 hover:bg-pink hover:text-white duration-300 transition-all'>
                    Buy now!
                </button>
                <span className='absolute md:opacity-50 opacity-20 z-0 pointer-events-none bottom-0 -right-28'>
                    <img src='./wheat.png' className='flex'/>
                </span>
            </div>
        </section>
    )
}

export default Banner