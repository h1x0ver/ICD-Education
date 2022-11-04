import React from 'react';
import {Link} from "react-router-dom";
import '../../Assets/Css/Courses.css'

const CourseCard = ({imgSrc, title, subTitle,lessonModules,fdata}) => {
    return (
        <div className="box">
            <div className="image">
                <img src={imgSrc} alt=""/>
            </div>
            <div className="content">
                <h3>{title}</h3>
                <p>{subTitle}</p>
                <Link to='/course-details'><a  className="btn">read more</a></Link>
                <div className="icons">
                    <span> <i className="fas fa-book"></i>{lessonModules} modules</span>
                    <span> <i className="fas fa-clock"></i>{fdata} month</span>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;