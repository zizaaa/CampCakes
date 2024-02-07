import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { MdOutlineStar,FaQuoteRight } from "../icons"

function Testimonial() {
    return (
        <div className='mt-32 relative overflow-hidden'>
            <span className='absolute md:opacity-50 opacity-40 z-0 pointer-events-none -right-32 -top-0'>
                <img src='./wheat.png' className='flex'/>
            </span>
            <h1 className='w-full text-center text-5xl mb-5 z-10'>Client Voices</h1>
            <Swiper
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}

                    breakpoints={{
                        
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="py-5"
            >
                <SwiperSlide className="rounded-sm p-2" style={{width:'80%'}}>
                    <div className='p-2 rounded-md flex flex-col items-center text-center drop-shadow-md bg-[rgba(237,237,237,0.36)]'>
                        <span className='bg-pink text-white p-2 text-2xl rounded-full drop-shadow-md my-2'>
                            <FaQuoteRight/>
                        </span>
                        <p className='text-slate-500'>Aliqua adipisicing aute eu culpa esse consequat magna ad est.Aliqua adipisicing aute eu culpa esse consequat magna ad est.</p>
                        <div className='mt-3'>
                            <div className='flex flex-row text-yellow-300'>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                            </div>
                            <h1 className='text-slate-500 text-xl'>Jane Doe</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="rounded-sm p-2" style={{width:'80%'}}>
                    <div className='p-2 rounded-md flex flex-col items-center text-center drop-shadow-md bg-[rgba(237,237,237,0.36)]'>
                        <span className='bg-pink text-white p-2 text-2xl rounded-full drop-shadow-md my-2'>
                            <FaQuoteRight/>
                        </span>
                        <p className='text-slate-500'>Aliqua adipisicing aute eu culpa esse consequat magna ad est.Aliqua adipisicing aute eu culpa esse consequat magna ad est.</p>
                        <div className='mt-3'>
                            <div className='flex flex-row text-yellow-300'>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                            </div>
                            <h1 className='text-slate-500 text-xl'>Jane Doe</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="rounded-sm p-2" style={{width:'80%'}}>
                    <div className='p-2 rounded-md flex flex-col items-center text-center drop-shadow-md bg-[rgba(237,237,237,0.36)]'>
                        <span className='bg-pink text-white p-2 text-2xl rounded-full drop-shadow-md my-2'>
                            <FaQuoteRight/>
                        </span>
                        <p className='text-slate-500'>Aliqua adipisicing aute eu culpa esse consequat magna ad est.Aliqua adipisicing aute eu culpa esse consequat magna ad est.</p>
                        <div className='mt-3'>
                            <div className='flex flex-row text-yellow-300'>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                            </div>
                            <h1 className='text-slate-500 text-xl'>Jane Doe</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="rounded-sm p-2" style={{width:'80%'}}>
                    <div className='p-2 rounded-md flex flex-col items-center text-center drop-shadow-md bg-[rgba(237,237,237,0.36)]'>
                        <span className='bg-pink text-white p-2 text-2xl rounded-full drop-shadow-md my-2'>
                            <FaQuoteRight/>
                        </span>
                        <p className='text-slate-500'>Aliqua adipisicing aute eu culpa esse consequat magna ad est.Aliqua adipisicing aute eu culpa esse consequat magna ad est.</p>
                        <div className='mt-3'>
                            <div className='flex flex-row text-yellow-300'>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                            </div>
                            <h1 className='text-slate-500 text-xl'>Jane Doe</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="rounded-sm p-2" style={{width:'80%'}}>
                    <div className='p-2 rounded-md flex flex-col items-center text-center drop-shadow-md bg-[rgba(237,237,237,0.36)]'>
                        <span className='bg-pink text-white p-2 text-2xl rounded-full drop-shadow-md my-2'>
                            <FaQuoteRight/>
                        </span>
                        <p className='text-slate-500'>Aliqua adipisicing aute eu culpa esse consequat magna ad est.Aliqua adipisicing aute eu culpa esse consequat magna ad est.</p>
                        <div className='mt-3'>
                            <div className='flex flex-row text-yellow-300'>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                            </div>
                            <h1 className='text-slate-500 text-xl'>Jane Doe</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="rounded-sm p-2" style={{width:'80%'}}>
                    <div className='p-2 rounded-md flex flex-col items-center text-center drop-shadow-md bg-[rgba(237,237,237,0.36)]'>
                        <span className='bg-pink text-white p-2 text-2xl rounded-full drop-shadow-md my-2'>
                            <FaQuoteRight/>
                        </span>
                        <p className='text-slate-500'>Aliqua adipisicing aute eu culpa esse consequat magna ad est.Aliqua adipisicing aute eu culpa esse consequat magna ad est.</p>
                        <div className='mt-3'>
                            <div className='flex flex-row text-yellow-300'>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                            </div>
                            <h1 className='text-slate-500 text-xl'>Jane Doe</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="rounded-sm p-2" style={{width:'80%'}}>
                    <div className='p-2 rounded-md flex flex-col items-center text-center drop-shadow-md bg-[rgba(237,237,237,0.36)]'>
                        <span className='bg-pink text-white p-2 text-2xl rounded-full drop-shadow-md my-2'>
                            <FaQuoteRight/>
                        </span>
                        <p className='text-slate-500'>Aliqua adipisicing aute eu culpa esse consequat magna ad est.Aliqua adipisicing aute eu culpa esse consequat magna ad est.</p>
                        <div className='mt-3'>
                            <div className='flex flex-row text-yellow-300'>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                            </div>
                            <h1 className='text-slate-500 text-xl'>Jane Doe</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="rounded-sm p-2" style={{width:'80%'}}>
                    <div className='p-2 rounded-md flex flex-col items-center text-center drop-shadow-md bg-[rgba(237,237,237,0.36)]'>
                        <span className='bg-pink text-white p-2 text-2xl rounded-full drop-shadow-md my-2'>
                            <FaQuoteRight/>
                        </span>
                        <p className='text-slate-500'>Aliqua adipisicing aute eu culpa esse consequat magna ad est.Aliqua adipisicing aute eu culpa esse consequat magna ad est.</p>
                        <div className='mt-3'>
                            <div className='flex flex-row text-yellow-300'>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                                <span>
                                    <MdOutlineStar/>
                                </span>
                            </div>
                            <h1 className='text-slate-500 text-xl'>Jane Doe</h1>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Testimonial