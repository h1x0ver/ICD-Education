import React from 'react';
import '../../Assets/Css/About.css'
import coverImage from '../../Assets/Images/heading-bg.jpg'
import TeacherSlider from "../../Components/About/TeacherSlider";
const About = () => {
    return (
        <div>
            <section className="heading-link">
                <h3>about us</h3>
                <p><a>home</a> / about </p>
            </section>

            <section className="about">

                <div className="image">
                    <img src='https://media.istockphoto.com/vectors/vector-frame-back-to-school-with-education-doodle-icon-symbols-on-vector-id1278507736?k=20&m=1278507736&s=612x612&w=0&h=7U3OWLxWs_6J58IIPDIiZoQZZhX-NNcG_an-Q3On9lw=' alt=""/>
                </div>

                <div className="content">
                    <h3 className="about-title">we have best courses for you</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam hic magnam fugit exercitationem
                        neque, quae laboriosam natus. Ut maxime assumenda facere ea quasi accusamus dolores delectus
                        tempora animi, expedita iste.</p>
                    <div className="icons-container">
                        <div className="icons">
                            <img src="data:image/png;base64,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" alt=""/>
                                <h3>350+</h3>
                                <span>courses</span>
                        </div>
                        <div className="icons">
                            <img src="https://thumbs.dreamstime.com/b/icono-del-federalismo-plano-de-moda-vector-en-el-ccb-blanco-130323319.jpg" alt=""/>
                                <h3>1200+</h3>
                                <span>students</span>
                        </div>
                        <div className="icons">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZIr2aY5uGLhrmW7sCsfsYO3lMaz_PdahG7Q&usqp=CAU" alt=""/>
                                <h3>10+</h3>
                                <span>awards</span>
                        </div>
                    </div>
                </div>

            </section>
            <section className="teachers">
                <h1 className="heading">expert teachers</h1>
                <TeacherSlider/>
            </section>
        </div>
    );
};

export default About;