import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Cake } from '../index'

function FeaturedCakes() {
    return (
        <section className='mt-32'>
            <h1 className='w-full text-center text-5xl mb-10'>Featured Cakes</h1>
                <Swiper
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}

                    breakpoints={{
                        
                        340: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                    }}
                    className="py-5"
            >
                <SwiperSlide>
                    <Cake/>
                </SwiperSlide>
                <SwiperSlide>
                    <Cake/>
                </SwiperSlide>
                <SwiperSlide>
                    <Cake/>
                </SwiperSlide>
                <SwiperSlide>
                    <Cake/>
                </SwiperSlide>
                <SwiperSlide>
                    <Cake/>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default FeaturedCakes