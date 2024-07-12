import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// react icons
import { FaStar } from 'react-icons/fa6'
import { Avatar } from 'flowbite-react';
import profile from "../../assets/profile.jpg";

const Review = () => {
    return (
        <div className='my-12 px-4 lg:px-24'>
            <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>

            {/* reviews card */}
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
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
                className="mySwiper"
            >
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        {/* texts */}
                        <div className='mt-7'>
                            <p className='mb-5'>
                                Fantastic App for Book Lovers!<br/>
                                "I absolutely love this bookstore app! The user interface is clean and easy to navigate, making it simple to find my favorite books. The recommendation engine is spot-on, always suggesting titles that I end up loving. Plus, the secure payment options give me peace of mind. Highly recommended!"
                            </p>
                            <Avatar
                                alt="avatar of Mark Ping"
                                img={profile}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Mark Ping</h5>
                            <p className='text-sm'>CEO, ABC Company</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        {/* texts */}
                        <div className='mt-7'>
                            <p className='mb-5'>
                                A Must-Have for Avid Readers<br/>
                                "This app has transformed the way I buy books. The variety of genres and the seamless checkout process make it a joy to use. I also appreciate the frequent updates and new releases. It's like having a personal bookstore in my pocket!"
                            </p>
                            <Avatar
                                alt="avatar of Sarah Lee"
                                img={profile}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Sarah Lee</h5>
                            <p className='text-sm'>Book Enthusiast</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        {/* texts */}
                        <div className='mt-7'>
                            <p className='mb-5'>
                                Great Selection and Easy to Use<br/>
                                "As a bookworm, this app is a dream come true. The vast selection of books, from bestsellers to hidden gems, is impressive. The search functionality is excellent, and I love how quickly I can find what I'm looking for. The app is fast, reliable, and makes book shopping a breeze."
                            </p>
                            <Avatar
                                alt="avatar of John Doe"
                                img={profile}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>John Doe</h5>
                            <p className='text-sm'>Literature Professor</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className='h-20'></div>
        </div>
    )
}

export default Review;
