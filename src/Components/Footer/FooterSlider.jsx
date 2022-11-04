import React from 'react';
import './Footer.css'
import {Swiper, SwiperSlide} from "swiper/react";

const FooterSlider = () => {
    return (

        <div className='storyReel'>
            <Swiper
                spaceBetween={0}
                breakpoints={{
                    375: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    500: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },

                    768: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    1300: {
                        slidesPerView: 5,
                        spaceBetween: 0,
                    }


                }}
                slidesPerView={5}
            >
                <div className="row">
                    <SwiperSlide>
                        <div className="blck-img f-img-cont">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWMDuzk_SonBwXUvmppWHs_n6KK2dSy4Rdow&usqp=CAU" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="blck-img f-img-cont">
                            <img src="https://www.gtai.de/resource/image/584184/16x9/1024/576/960669b90ebc18f01fcb1014c0f42af/Ld/e-learning.jpg" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="blck-img f-img-cont">
                            <img src="https://d33wubrfki0l68.cloudfront.net/678aa9224f8316323e84cb2b52d30a65bc93e83b/799ba/images/blog/tech-education_hudc6ca8aa285353fb508d393ef126e8cb_76159_960x640_fill_q90_lanczos_center.jpg" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="blck-img f-img-cont">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfvn9GWnbozeonv50AJVqK-AzQrjiBomsvJp2iwQQ5jQcWO0Sdi1dE4cZT8kqNToEW_Rc&usqp=CAU" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="blck-img f-img-cont">
                            <img src="https://www.kcl.ac.uk/newimages/service/service-volunteering/thumb/join-the-student-advisory-board-for-volunteering.x2066eb81.png?f=webp" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="blck-img f-img-cont">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRivLMSVeISea6MKb7plyA8Atv8DdGdEqFqpe3MpM6-fYopME3f-vaJ8l7Ya-GV1UKGVFo&usqp=CAU" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="blck-img f-img-cont">
                            <img src="https://education.gov.scot/media/cm4niw3v/teacher500.jpg?anchor=center&mode=crop&width=500&height=377&rnd=132911275025600000" alt=""/>
                        </div>
                    </SwiperSlide>
                </div>


            </Swiper>


        </div>
    );
};

export default FooterSlider;