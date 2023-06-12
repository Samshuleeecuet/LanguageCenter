import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import ReactPlayer from 'react-player'

const SliderSection = () => {

    return (
        <div>
         <Swiper
        pagination={{
          
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper lg:h-[500px]"
      >
        <SwiperSlide className="bg-gradient-to-r from-green-300 from-10% via-green-500 via-30% to-emerald-500 to-90% ...">
            <div className='lg:flex' >
                    <div className='w-full text-center text-white space-y-24'>
                    <p className='text-3xl text-center font-serif mt-[10%]'>Make German your native language,<br/>
        learn foreign language like German</p>
            <p className='btn btn-outline text-white'>Explore German</p>
                    </div>
                    <div className='mt-10 mb-10 ml-2 lg:ml-10 lg:mr-10'>
                        <ReactPlayer url='https://www.youtube.com/watch?v=5z-grdXP8B8' width='300px'/>
                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="bg-gradient-to-r from-green-300 from-10% via-green-500 via-30% to-emerald-500 to-90% ...">
            <div className='lg:flex' >
                    <div className='w-full text-center text-white space-y-24'>
                    <p className='text-3xl text-center font-serif mt-[10%]'>Make Korean your native language,<br/>
        learn foreign language like Korean</p>
            <p className='btn btn-outline text-white'>Explore Korean</p>
                    </div>
                    <div className='mt-10 mb-10 ml-2 lg:ml-10 lg:mr-10'>
                        <ReactPlayer url='https://www.youtube.com/watch?v=Oj5ztfdXYuw' height='300px' />
                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="bg-gradient-to-r from-green-300 from-10% via-green-500 via-30% to-emerald-500 to-90% ...">
            <div className='lg:flex' >
                    <div className='w-full text-center text-white space-y-24'>
                    <p className='text-3xl text-center font-serif mt-[10%]'>Make Japanies your native language,<br/>
        learn foreign language like Japanies</p>
            <p className='btn btn-outline text-white'>Explore Japanies</p>
                    </div>
                    <div className='mt-10 mb-10 ml-2 lg:ml-10 lg:mr-10'>
                        <ReactPlayer url='https://www.youtube.com/watch?v=d67SLbFMBUA' height='300px' />
                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="bg-gradient-to-r from-green-300 from-10% via-green-500 via-30% to-emerald-500 to-90% ...">
            <div className='lg:flex' >
                    <div className='w-full text-center text-white space-y-24'>
                    <p className='text-3xl text-center font-serif mt-[10%]'>Make English your native language,<br/>
        learn foreign language like English</p>
            <p className='btn btn-outline text-white'>Explore English</p>
                    </div>
                    <div className='mt-10 mb-10 ml-2 lg:ml-10 lg:mr-10'>
                        <ReactPlayer url='https://www.youtube.com/watch?v=9Fnzjvx5hkQ' height='300px' />
                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="bg-gradient-to-r from-green-300 from-10% via-green-500 via-30% to-emerald-500 to-90% ...">
            <div className='lg:flex' >
                    <div className='w-full text-center text-white space-y-24'>
                    <p className='text-3xl text-center font-serif mt-[10%]'>Make Norwegian your native language,<br/>
        learn foreign language like Norwegian</p>
            <p className='btn btn-outline text-white'>Explore Norwegian</p>
                    </div>
                    <div className='mt-10 mb-10 ml-2 lg:ml-10 lg:mr-10'>
                        <ReactPlayer url='https://www.youtube.com/watch?v=pwi6wnt5rkA' height='300px' />
                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="bg-gradient-to-r from-green-300 from-10% via-green-500 via-30% to-emerald-500 to-90% ...">
            <div className='lg:flex' >
                    <div className='w-full text-center text-white space-y-24'>
                    <p className='text-3xl text-center font-serif mt-[10%]'>Make Swedish your native language,<br/>
        learn foreign language like Swedish</p>
            <p className='btn btn-outline text-white'>Explore Swedish</p>
                    </div>
                    <div className='mt-10 mb-10 ml-2 lg:ml-10 lg:mr-10'>
                        <ReactPlayer url='https://www.youtube.com/watch?v=ZHW05-05WFw' height='300px' />
                    </div>
            </div>
        </SwiperSlide>
      </Swiper>
            
        </div>
    );
};

export default SliderSection;