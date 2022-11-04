import React from 'react';
import {Link} from "react-router-dom";
import '../../Assets/Css/Contact.css'
import img from '../../Assets/Images/contact-img.png'
const Contact = () => {
    return (
        <div>
            <section className="heading-link">
                <h3>contact us</h3>
                <Link to={'/'}><p><a>home</a> / contact </p></Link>
            </section>

            <section className="contact">
                <h1 className="heading"> get in touch </h1>
                <div className="icons-container">
                    <div className="icons">
                        <i className="fas fa-clock"></i>
                        <h3>opening hours :</h3>
                        <p>09:00 to 22:00</p>
                    </div>

                    <div className="icons">
                        <i className="fas fa-phone"></i>
                        <h3>phone :</h3>
                        <p>+994505559211</p>
                        <p>0123457822</p>
                    </div>

                    <div className="icons">
                        <i className="fas fa-envelope"></i>
                        <h3> email : </h3>
                        <p>huseynmg@code.edu.az</p>
                        <p>abdul@mail.ru</p>
                    </div>

                    <div className="icons">
                        <i className="fas fa-map"></i>
                        <h3>address :</h3>
                        <p>Elmler Academy</p>
                    </div>

                </div>

                <div className="row">

                    <div className="row">

                        <div className="image">
                            <img src='https://www.blogtyrant.com/wp-content/uploads/2019/12/best-contact-us-pages-2.png' alt=""/>
                        </div>

                        <form action="">
                            <h3>send us a message</h3>
                            <input type="text" placeholder="name" className="box"/>
                            <input type="email" placeholder="email" className="box"/>
                            <input type="number" placeholder="phone" className="box"/>
                            <textarea name="" className="box" placeholder="message" id="" cols="30"
                                      rows="10"></textarea>
                            <input type="submit" value="send message" className="btn"/>
                        </form>

                    </div>


                </div>

            </section>
        </div>
    );
};

export default Contact;