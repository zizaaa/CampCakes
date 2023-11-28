import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function FeturedCakes() {

    return (
        // <section className="bg-red-300 flex flex-col items-center py-2">
        //     <h1 className="text-5xl max-[320px]:text-3xl mb-4 font-extrabold text-black">Fetured Cakes</h1>
        
            <Swiper
                slidesPerView={3}
            >
                <SwiperSlide>
                    <img src='https://www.hdwallpapers.in/download/darling_in_the_franxx_zero_two_hiro_zero_two_with_background_of_sky_and_clouds_hd_anime-1920x1080.jpg'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://c4.wallpaperflare.com/wallpaper/354/979/695/anime-darling-in-the-franxx-zero-two-darling-in-the-franxx-wallpaper-preview.jpg'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFIsRNqlE-Is0Mqmusfkm8LMc_X2mMqcEX3Q&usqp=CAU'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNTXuy7Yk6CZ0YCy1HH5qfUSLFFg62fg81NA&usqp=CAU'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSelousC1ZpS5Tvj4JRiV4ci1IteYwqqhsrOKOCi-7UOeJ9RvY9Kctnzp6qD_TDV666zNg&usqp=CAU'/>
                </SwiperSlide>
            </Swiper>
        // </section>
    )
}

export default FeturedCakes