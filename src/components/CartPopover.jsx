import React from 'react'

function CartPopover() {
    return (
        <div className="px-3 py-2">
            <div className='flex items-center gap-3 border-[rgb(237,237,237)] border-b-[1px] p-2'>
                <div className='flex items-center gap-3 flex-1'>
                    <img 
                        src='./cakes/cake2.png'
                        className='w-16 h-16 object-cover'
                    />
                    <p className='text-black font-medium'>Cake name 1</p>
                </div>
                <p className='text-pink font-medium'>&#8369; 1000</p>
            </div>
            <div className='flex items-center gap-3 border-[rgb(237,237,237)] border-b-[1px] p-2'>
                <div className='flex items-center gap-3 flex-1'>
                    <img 
                        src='./cakes/cake2.png'
                        className='w-16 h-16 object-cover'
                    />
                    <p className='text-black font-medium'>Cake name 1</p>
                </div>
                <p className='text-pink font-medium'>&#8369; 1000</p>
            </div>
        </div>
    )
}

export default CartPopover