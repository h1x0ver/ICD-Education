import React from 'react';
import '../../Assets/Css/Home.css'
import {Link} from "react-router-dom";

const CourseSliderCard = () => {
    return (
        <section className="home-courses">
            <div className="container-s">
                <div className="card">
                    <div className="card-header">
                        <img
                            className='bg-chng'
                            src="https://t4.ftcdn.net/jpg/04/92/55/15/360_F_492551542_UiAoH0DyhL1ZHH9T24masCQZBa95DyW1.jpg"
                            alt="rover"/>
                    </div>
                    <div className="card-body-s">
                        <h1>Programming</h1>
                    </div>
                    <div className="card-footer">
                        <Link to='/courses'> <input type="submit" value="More Course" className="btn"/></Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <img
                            className='bg-chng'
                            src="https://www.ssl2buy.com/wiki/wp-content/uploads/2016/04/common-mistakes-by-system-admin.png"
                            alt="rover"/>
                    </div>
                    <div className="card-body-s">
                        <h1>Sys ADMIN</h1>
                    </div>
                    <div className="card-footer">
                        <Link to='/courses'> <input type="submit" value="More Course" className="btn"/></Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <img
                            className='bg-chng'
                            src="https://www.ux-ui.net/ux/uploads/2017/03/ux-ui-logo.svg"
                            alt="rover"/>
                    </div>
                    <div className="card-body-s">
                        <h1>DESIGN</h1>
                    </div>
                    <div className="card-footer">
                        <Link to='/courses'> <input type="submit" value="More Course" className="btn"/></Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <img
                            className='bg-chng'
                            src="https://static.vecteezy.com/system/resources/thumbnails/006/446/198/small/customer-support-gradient-linear-icon-call-center-help-desk-client-assistance-online-shopping-thin-line-color-symbol-modern-style-pictogram-isolated-outline-drawing-vector.jpg"
                            alt="rover"/>
                    </div>
                    <div className="card-body-s">
                        <h1>HELP DESK</h1>
                    </div>
                    <div className="card-footer">
                        <Link to='/courses'> <input type="submit" value="More Course" className="btn"/></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseSliderCard;