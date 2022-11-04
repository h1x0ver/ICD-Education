import React from 'react';
import Header from "./Components/Header/Header";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Courses from "./Pages/Courses/Courses";
import CourseDetails from "./Pages/Courses/CourseDetails";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import ScrollToTop from "./Components/Scrolling/scrollToTop";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <ScrollToTop/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/courses' element={<Courses/>}/>
                    <Route path='/course-details' element={<CourseDetails/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default App;