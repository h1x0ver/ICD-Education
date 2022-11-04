import React from 'react';
import '../../Assets/Css/Courses.css'
import {useNavigate} from "react-router-dom";

const CourseDetails = () => {
    const route = useNavigate()

    return (
       <div className="bgrs">
           <div className="container">
               <div className="row">
                   <div className="col-lg-12 col-md-8 col-sm-4 course-detail">
                       <div className="course-first-detail">
                           <div className="row">
                               <div className="d-image col-lg-12">
                                   <img src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg" alt=""/>
                               </div>
                               <h2 className='h2-text'>Bu Kursda neler oyreneceksiz?</h2>

                               <div className="i-cent">
                                   <div className="course-info">
                                        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid deserunt illum minus nemo nisi soluta velit? Earum hic iste perspiciatis quas quos. Ipsam iste, itaque libero nemo repudiandae sit ut. Animi aperiam aspernatur culpa debitis delectus deserunt ducimus id itaque, magni maxime molestias nobis odio, recusandae similique suscipit tempora tenetur vel velit voluptates voluptatibus. Aperiam cum deserunt dolores tempora. Aliquam, labore, rem! Accusamus assumenda commodi, consequuntur delectus error mollitia nam necessitatibus nesciunt perspiciatis placeat, quaerat quia quo repellendus ut vero. Delectus, dolore eligendi laboriosam nulla officia quae similique velit. A fugiat ipsam mollitia necessitatibus praesentium quo tenetur voluptates.</h2>

                                   </div>
                               </div>
                               <h2 className='h2-text'>Hansi biliyleriniz olmalidir?</h2>
                               <div className="i-cent">
                                   <div className="course-info">
                                       <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid deserunt illum minus nemo nisi soluta velit? Earum hic iste perspiciatis quas quos. Ipsam iste, itaque libero nemo repudiandae sit ut. Animi aperiam aspernatur culpa debitis delectus deserunt ducimus id itaque, magni maxime molestias nobis odio, recusandae similique suscipit tempora tenetur vel velit voluptates voluptatibus. Aperiam cum deserunt dolores tempora. Aliquam, labore, rem! Accusamus assumenda commodi, consequuntur delectus error mollitia nam necessitatibus nesciunt perspiciatis placeat, quaerat quia quo repellendus ut vero. Delectus, dolore eligendi laboriosam nulla officia quae similique velit. A fugiat ipsam mollitia necessitatibus praesentium quo tenetur voluptates.</h2>
                                   </div>
                               </div>
                           </div>
                           <button onClick={()=>route('/contact')}>Etrafli melumat icin click edin</button>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    );
};

export default CourseDetails;