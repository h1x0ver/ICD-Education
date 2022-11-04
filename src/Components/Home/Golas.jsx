import React from 'react';
import '../../Assets/Css/Home.css'
const Golas = ({title,subTitle}) => {
    return (
        <div className="col-lg-4 col-sm-6 ">
            <div className="item">
                <h6>{title}</h6>
                <p>{subTitle}</p>
            </div>
        </div>
    );
};

export default Golas;