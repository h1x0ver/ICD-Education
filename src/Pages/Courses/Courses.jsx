import React from 'react';
import '../../Assets/Css/Courses.css'
import {Link} from "react-router-dom";
import CourseCard from "../../Components/Course/CourseCard";
import img from '../../Assets/Images/contact-img.png'

const Courses = () => {
    return (<div>
            <section className="heading-link">
                <h3>our courses</h3>
                <p><Link to={'/'}><a>home</a></Link> / courses </p>
            </section>
            <section className="courses">
                <h1 className="heading"> our famous courses </h1>
                <div className="box-container">
                    <CourseCard
                        imgSrc='https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg'
                        title='Programming'
                        subTitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, veniam?'
                        lessonModules='22'
                        fdata='2'
                    />
                    <CourseCard
                        imgSrc='https://www.uxdesigninstitute.com/blog/wp-content/uploads/2022/01/26_ux_vs_ui_illustration_blog_light.jpg'
                        title='Design'
                        subTitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, veniam?'
                        lessonModules='22'
                        fdata='2'
                    />
                    <CourseCard
                        imgSrc='data:image/png;base64,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'
                        title='Help Desk'
                        subTitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, veniam?'
                        lessonModules='22'
                        fdata='2'
                    />
                    <CourseCard
                        imgSrc='data:image/png;base64,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'
                        title='Sis Admin'
                        subTitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, veniam?'
                        lessonModules='22'
                        fdata='2'
                    />
                    <CourseCard
                        imgSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUJB9vmYPTYCcIek0siiRuR54YPhjmFns0Q&usqp=CAU'
                        title='Yadds'
                        subTitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, veniam?'
                        lessonModules='22'
                        fdata='2'
                    />
                    <CourseCard
                        imgSrc='https://imageio.forbes.com/blogs-images/alejandrocremades/files/2019/02/shutterstock_1143253616-1200x800.jpg?format=jpg&width=1200'
                        title='Business'
                        subTitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, veniam?'
                        lessonModules='22'
                        fdata='2'
                    />
                </div>
            </section>
        </div>
    );
};

export default Courses;