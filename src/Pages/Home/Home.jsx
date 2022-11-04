import React, {useEffect} from 'react';
import '../../Assets/Css/Home.css'
import SubCard from "../../Components/Home/SubCard";
import CourseSlider from "../../Components/Home/CourseSlider";
import img from '../../Assets/Images/mainImage.jpg'
import Aos from "aos"
import "aos/dist/aos.css"
import FooterSlider from "../../Components/Footer/FooterSlider";
import Golas from "../../Components/Home/Golas";


const Home = () => {
    useEffect(() => {
        Aos.init({duration: 1300})
    }, [])
    return (
        <div>
            <section className="home" style={{padding: "0"}}>
                <div className="container-scl">
                    <img className='blck-img' src={img} alt=""/>
                    <div className="center">
                        <h1>ICD ACADEMY</h1>
                    </div>
                    <div className="center">
                       <h2 className='mt-7 test-text'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eaque!</h2>
                    </div>
                </div>
            </section>
            <section className='welcome'>
                <div className="welcome-text">
                    <h2>Welcome to the ICD Academy</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,
                        a large language ocean. A small river named Duden flows by their place and supplies it with the
                        necessary regelialia.</p>
                </div>
                <div className="welcome-card">
                    <div className="w-card">
                        <h3>124 Telebe</h3>
                    </div>
                    <div className="w-card">
                        <h3>124 Obyekt</h3>
                    </div>
                    <div className="w-card">
                        <h3>124 Mellim</h3>
                    </div>
                    <div className="w-card">
                        <h3>124 Salam</h3>
                    </div>
                </div>
            </section>
            <section data-aos='fade-right' className="subjects">
                <h1 className="heading">our popular subjects</h1>
                <div data-aos='fade-left' className="box-container">
                    <SubCard
                        imgSrc='data:image/png;base64,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'
                        title='Programming'
                        time='3 month'
                    />
                    <SubCard
                        imgSrc='https://www.uxdesigninstitute.com/blog/wp-content/uploads/2022/04/101_ux_vs_ui_illustration_blog.png'
                        title='Ux/UI design'
                        time='3 month'
                    />
                    <SubCard
                        imgSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2hzK-kPqe_ZS6ieIt4MRWHjiKjG7D3vlizciBalxqRhGD0azKGWX8zEP-uNzymhLtWTc&usqp=CAU'
                        title='Sistem Administratorlugu'
                        time='1 month'
                    />
                    <SubCard
                        imgSrc='data:image/png;base64,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'
                        title='Help Desk'
                        time='1 month'
                    />
                </div>
            </section>
            <h1 className="heading"> our popular courses </h1>
            <CourseSlider/>

            <section data-aos='fade-left' className='centers'>
                <div className="feat bg-gray pt-5 pb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="section-head col-sm-12">
                                <h4><span>Bizim</span> Hedeflerimiz ?</h4>
                            </div>
                            <Golas
                                title='Salam'
                                subTitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, suscipit.'
                            />
                            <Golas
                                title='Salam'
                                subTitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, suscipit.'
                            />       <Golas
                            title='Salam'
                            subTitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, suscipit.'
                        />       <Golas
                            title='Salam'
                            subTitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, suscipit.'
                        />



                        </div>
                    </div>
                </div>
            </section>
            <section  >
                <div data-aos='fade-right' className="articles">
                    <div className="a-text">
                        <h2>Latest Articles</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                            Semantics.</p>
                    </div>
                    <div className="a-img">
                        <img
                            src="https://forrit-one-msedu-p1-consumables.azureedge.net/media/8806824e-543b-48ba-8567-aeaef11f67dc/1920-Panel1-FeatureHeader-Academy.jpg"
                            alt=""/>
                        <div className="a-time">
                            <hr/>
                            <h3>Galery</h3>
                            <h4>16 Nov, 2016</h4>
                            <hr/>

                            <h3>Adam Smartpants</h3>
                            <h4>16 Nov, 2016</h4>
                            <hr/>

                            <h3>Highly Respected Degree</h3>
                            <h4>16 Nov, 2016</h4>
                            <hr/>

                            <h3>Global Education</h3>
                            <h4>16 Nov, 2016</h4>
                        </div>

                    </div>

                </div>
            </section>

            <div className="container-fluid">
                <FooterSlider/>
            </div>

        </div>
    );
};

export default Home;