import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function Reviews(props) {
    const { heading, text, images } = props.reviewData;

    return (
        <div>

            <div className="px-10 mb-10 bg-gray-100">
                <div className=' text-center  my-10 py-5 overflow-hidden'>
                    <h1 className='h1'>{heading}</h1>
                    <p className='text-lg'>{text}</p>
                </div>
                <Swiper

                    slidesPerView={3}
                    spaceBetween={30}

                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        200: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >

                    <hr />
                    {
                        images && images.map((sl, index) => (
                            <SwiperSlide key={index}>
                                <div className='w-full h-96 rounded-md relative' style={{ background: "#162033" }}>
                                    <img className='w-ful h-full  m-auto' src={sl} alt={"abr landing page"} />
                                    <div className='my-5 px-3'>

                                        <p className=' text02xl bg-black text-white p-2 absolute top-0 left-0'>
                                            {index + 1}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <hr className='my-3' />
            </div>
        </div>
    )
}
