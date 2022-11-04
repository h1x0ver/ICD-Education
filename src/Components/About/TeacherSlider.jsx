import React from 'react';
import '../../Assets/Css/About.css'
import {Swiper, SwiperSlide} from "swiper/react";
import TeacherCard from "./TeacherCard";
const TeacherSlider = () => {
    return (

        <div className='storyReel mt-2'>
            <Swiper
                spaceBetween={10}
                breakpoints={{
                    375: {
                        slidesPerView: 1    ,
                        spaceBetween: 10,
                    },
                    500: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },

                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1300: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    }


                }}
                slidesPerView={3}
            >
                <div className="row">
                    <SwiperSlide>
                        <div className="col-12">
                            <TeacherCard
                                imgSrc='https://portal.azertag.az/sites/default/files/einstein.jpg'
                                fname='Albert'
                                lname='Ensteyn'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="col-12">
                            <TeacherCard
                                imgSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Tesla_circa_1890.jpeg/220px-Tesla_circa_1890.jpeg'
                                fname='Nicola'
                                lname='Tesla'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="col-12">
                            <TeacherCard
                                imgSrc='https://www.ocpathink.org/uploads/assets/img/_1200x630_crop_center-center_82_none/Teacher-in-front-of-chalkboard.jpeg'
                                fname='Hello'
                                lname='World'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="col-12">
                            <TeacherCard
                                imgSrc='https://gazettereview.com/wp-content/uploads/2017/02/professor-header.jpg'
                                fname='Hello'
                                lname='World'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="col-12">
                            <TeacherCard
                                imgSrc='https://gazettereview.com/wp-content/uploads/2017/02/professor-header.jpg'
                            />
                        </div>
                    </SwiperSlide>

                </div>
            </Swiper>


        </div>
    );
};

export default TeacherSlider;