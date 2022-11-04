import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <section className="footer">

            <div className="box-container">

                <div className="box">
                    <h3><i className="fas fa-lightbulb"></i> educa </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, voluptatem.</p>
                    <div className="share">
                        <a className="fab fa-facebook-f"></a>
                        <a className="fab fa-twitter"></a>
                        <a className="fab fa-instagram"></a>
                        <a className="fab fa-linkedin"></a>
                    </div>
                </div>

                <div className="box">
                    <h3>quick links</h3>
                    <a className="link">home</a>
                    <a  className="link">about</a>
                    <a className="link">courses</a>
                    <a className="link">contact</a>
                </div>

                <div className="box">
                    <h3>useful links</h3>
                    <a className="link">help center</a>
                    <a className="link">ask questions</a>
                    <a className="link">send feedback</a>
                    <a className="link">private policy</a>
                    <a className="link">terms of use</a>
                </div>

                <div className="box">
                    <h3>newsletter</h3>
                    <p>subscribe for latest upadates</p>
                    <form action="">
                        <input type="email" name="" placeholder="enter your email" id="" className="email"/>
                            <input type="submit" value="subscribe" className="btn"/>
                    </form>
                </div>

            </div>

            <div className="credit"> created by <span>Guseyn Guliyev</span></div>

        </section>
    );
};

export default Footer;