import React from 'react'
import { MdOutlineStar } from '../icons'

function Cake() {
    return (
        <div className='group shadow-sm rounded-md bg-gray-100/75 cursor-pointer group relative'>
            <div className='flex items-center justify-center'>
                <img 
                    src='./cakes/cake1.png'
                    className='w-36 h-36 object-contain overflow-clip group-hover:scale-[120%] transition-transform duration-700'
                    loading='lazy'
                />
            </div>
            <div className='mt-2 p-2.5'>
                <h1 className='text-lg'>Cake name 1</h1>
                
                <div className='flex items-center text-sm font-medium'>
                    <span>5</span>
                    <div className='flex items-center text-yellow-200'>
                        <MdOutlineStar/>
                    </div>
                    <span className='text-slate-500'>5 reviews</span>
                </div>

                <p className='text-lg text-pink font-bold'>&#8369; 1000</p>
            </div>
        </div>
    )
}

export default Cake