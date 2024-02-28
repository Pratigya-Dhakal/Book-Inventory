import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Avatar } from 'flowbite-react';
// import './styles.css';
import avatarImage from '../assets/banner-books/profile.jpg'

// import required modules
import { Pagination } from 'swiper/modules';
import {FaStar} from "react-icons/fa6"
const Review = () => {
    return (
        <div className='my-12 px-4 lg:px-24'>
            <h2 className='text-5xl text-center font-bold text-black my-5'>
                Our Customers
            </h2>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border '>
                        <div className='space-y-6'>
                            
                            {/* text */}
                            <div className='mt-2 '>
                                
                                <div className='mt-2 items-center flex flex-col justify-center align-center'>
                                    <Avatar img={avatarImage} alt="Customer" rounded className='w-10 mb-4 object-center '/>
                                    <h5 className='text-lg font-medium marker:'>ABC NAME</h5>
                                    <p className='text-base'>CEO of American Corner</p>
                                    <div className='text-amber-500 flex gap-2 mt-3'>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                    </div>
                                </div>
                                <p className='mt-5'>
                                    This bookInventory is amazing. I found my favorite book here.
                                </p>
                            </div>
                        
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border '>
                        <div className='space-y-6'>
                            
                            {/* text */}
                            <div className='mt-2 '>
                                
                                <div className='mt-2 items-center flex flex-col justify-center align-center'>
                                    <Avatar img={avatarImage} alt="Customer" rounded className='w-10 mb-4 object-center '/>
                                    <h5 className='text-lg font-medium marker:'>ABC NAME</h5>
                                    <p className='text-base'>CEO of American Corner</p>
                                    <div className='text-amber-500 flex gap-2 mt-3'>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                    </div>
                                </div>
                                <p className='mt-5'>
                                    This bookInventory is amazing. I found my favorite book here.
                                </p>
                            </div>
                        
                        </div>
                    </SwiperSlide> <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border '>
                        <div className='space-y-6'>
                            
                            {/* text */}
                            <div className='mt-2 '>
                                
                                <div className='mt-2 items-center flex flex-col justify-center align-center'>
                                    <Avatar img={avatarImage} alt="Customer" rounded className='w-10 mb-4 object-center '/>
                                    <h5 className='text-lg font-medium marker:'>ABC NAME</h5>
                                    <p className='text-base'>CEO of American Corner</p>
                                    <div className='text-amber-500 flex gap-2 mt-3'>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                    </div>
                                </div>
                                <p className='mt-5'>
                                    This bookInventory is amazing. I found my favorite book here.
                                </p>
                            </div>
                        
                        </div>
                    </SwiperSlide> <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border '>
                        <div className='space-y-6'>
                            
                            {/* text */}
                            <div className='mt-2 '>
                                
                                <div className='mt-2 items-center flex flex-col justify-center align-center'>
                                    <Avatar img={avatarImage} alt="Customer" rounded className='w-10 mb-4 object-center '/>
                                    <h5 className='text-lg font-medium marker:'>ABC NAME</h5>
                                    <p className='text-base'>CEO of American Corner</p>
                                    <div className='text-amber-500 flex gap-2 mt-3'>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                    </div>
                                </div>
                                <p className='mt-5'>
                                    This bookInventory is amazing. I found my favorite book here.
                                </p>
                            </div>
                        
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border '>
                        <div className='space-y-6'>
                            
                            {/* text */}
                            <div className='mt-2 '>
                                
                                <div className='mt-2 items-center flex flex-col justify-center align-center'>
                                    <Avatar img={avatarImage} alt="Customer" rounded className='w-10 mb-4 object-center '/>
                                    <h5 className='text-lg font-medium marker:'>ABC NAME</h5>
                                    <p className='text-base'>CEO of American Corner</p>
                                    <div className='text-amber-500 flex gap-2 mt-3'>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                    </div>
                                </div>
                                <p className='mt-5'>
                                    This bookInventory is amazing. I found my favorite book here.
                                </p>
                            </div>
                        
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border '>
                        <div className='space-y-6'>
                            
                            {/* text */}
                            <div className='mt-2 '>
                                
                                <div className='mt-2 items-center flex flex-col justify-center align-center'>
                                    <Avatar img={avatarImage} alt="Customer" rounded className='w-10 mb-4 object-center '/>
                                    <h5 className='text-lg font-medium marker:'>ABC NAME</h5>
                                    <p className='text-base'>CEO of American Corner</p>
                                    <div className='text-amber-500 flex gap-2 mt-3'>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                    </div>
                                </div>
                                <p className='mt-5'>
                                    This bookInventory is amazing. I found my favorite book here.
                                </p>
                            </div>
                        
                        </div>
                    </SwiperSlide>
            
                </Swiper>
            </div>

        </div>
    )
}

export default Review