import React from 'react'
import { IoSearch,MdOutlineSort   } from '../components/icons'
import { Cake } from '../components/index'

function CakesList() {
    return (
        <section className=''>
            <div className='flex max-[443px]:flex-col-reverse flex-col gap-3'>
                <h1 className='text-4xl'>Cakes</h1>
                <div className='w-full flex justify-between items-center'>
                    <div className='flex max-[443px]:w-full w-auto items-center bg-[rgba(253,224,224,0.79)] rounded-full px-2'>
                        <label htmlFor='search' className='text-xl text-pink'>
                            <IoSearch />
                        </label>

                        <input type='text' id='search' className='w-full border-none outline-none focus:ring-transparent bg-transparent py-1.5 px-2' placeholder='Search for cakes'/>
                        
                        <div className='max-[443px]:block hidden'>
                            <button data-popover-target="popover-click" data-popover-trigger="click" className='text-xl z-10 text-pink p-[0.21rem]'>
                                <MdOutlineSort className='pointer-events-none'/>
                            </button>
                            <div data-popover id="popover-click" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0">
                                <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg">
                                    <h3 className="font-semibold text-gray-900">Sort By</h3>
                                </div>
                                <ul className="px-3 py-2 text-sm text-gray-700">
                                    <li>
                                        <button className="block w-full text-start px-3 py-2 hover:bg-pink hover:text-white">Price High</button>
                                    </li>
                                    <li>
                                        <button className="block w-full text-start px-3 py-2 hover:bg-pink hover:text-white">Price Low</button>
                                    </li>
                                </ul>
                                <div data-popper-arrow></div>
                            </div>
                        </div>
                    </div>
                    <div className='max-[443px]:hidden block'>
                        <label htmlFor='sort' className='me-2 border-none text-sm font-semibold'>Sort by</label>
                        <select id='sort' className='border-none font-semibold text-sm bg-[rgba(253,224,224,0.79)] py-1 px-2 focus:ring-transparent outline-none'>
                            <option className=''>Price High</option>
                            <option className=''>Price Low</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 my-5'>
                <Cake/>
                <Cake/>
                <Cake/>
                <Cake/>
                <Cake/>
                <Cake/>
                <Cake/>
                <Cake/>
                <Cake/>
                <Cake/>
                <Cake/>
            </div>
        </section>
    )
}

export default CakesList