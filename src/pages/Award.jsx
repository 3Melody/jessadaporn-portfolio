import React from 'react';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import award1 from '../assets/award/award1.jpg';
import award2 from '../assets/award/award2.jpg';
import award3 from '../assets/award/award3.jpg';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
const Award = () => {
    return (
       <div className='award section'> 
            <div className='container mx-auto white'>
                <div className='flex justify-center text-xl xl:text-2xl font-bold mb-5'>AWARD</div>
                 <Swiper 
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="award-swiper"
          >
            <SwiperSlide>
                <div className='relative'>
                    <img src={award1} alt="" />
                    <div className='absolute z-50 bottom-0  award-name bg-black w-full text-white xl:text-3xl text-sm font-bold p-3'>First Place Winner in the Software Engineering Project Day</div>
                    </div></SwiperSlide>
                    <SwiperSlide>
                <div className='relative'>
                    <img src={award2} alt="" />
                    <div className='absolute z-50 bottom-0  award-name bg-black w-full text-white xl:text-3xl text-sm font-bold p-3'>Awarded with the Academic Excellence Medal</div>
                    </div></SwiperSlide>
                    <SwiperSlide>
                <div className='relative'>
                    <img src={award3} alt="" />
                    <div className='absolute z-50 bottom-0  award-name bg-black w-full text-white xl:text-3xl text-sm font-bold p-3'>Second Place Winner in SE Project Day for UX/UI Design</div>
                    </div></SwiperSlide>
           
    
          </Swiper>
            </div>
       </div>
    );
}

export default Award;
