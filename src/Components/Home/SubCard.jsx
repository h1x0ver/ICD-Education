import React from 'react';
import '../../Assets/Css/Home.css'

const SubCard = ({imgSrc, title, time}) => {

    return (
        <div data-aos='fade-left' className="box">
            <img src={imgSrc} alt=""/>
            <h3>{title}</h3>
            <p>{time}</p>
        </div>
    );
};

export default SubCard;