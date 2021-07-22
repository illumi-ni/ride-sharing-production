import React, { Component } from 'react';
import './About.css';


class About extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="Aboutus">
                <div className="img">
                    <div className="col-sm-12">
                    {/* <img src='./hire.jpg' alt='car' className='img-fluid' style={{width:"100%"}}/>  */}
                    <div className="about">
                        <h1>About Us</h1>
                        <h2> Car Rent is a transportation technology providing a full range of app-based services including ride-sharing.
                            We want a better way to plan and manage our own travel. </h2>
                        </div>
                        </div>
                     </div>
                      
                <div className=" jumbotron car">
                    <div className="row">
                        {/* <h1>Save time </h1> */}
                        <div className="slide col-sm-6">
                            <h3>For your travel</h3>
                            <h4>CAR RENTAL</h4>
                            <p> Car Sharing is  a company that is located in 
                                Kathmandu, Nepal. It provide serviice like
                                pick up and drop service for people in 
                                kathmandu, bhaktapur and lalitapur. It was 
                                started by 7 student of Softwarica Collage as 
                                their final year project. Car Sharing determines
                                the fees and terms on which drivers transport
                                riders. The company takes a 25% share of 
                                each fare provided by their  “partners”. 

                                Car Sharing provide safe and secure travel
                                when it come to girls and women who have to 
                                work till midnight. It is one of the save, cheap 
                                car sharing company in Kathmandu.
                                </p>
                                 </div>
                        <div className=" slide col-sm-6">

                            <h4>Save Money </h4>
                            <p> Get the car rent on best price. You can also share your ride with you friends or with
                                other user who is going on the same direction and you can share your payment with the 
                                other passenger this can reduce the cost.   
                            </p>
                            
                        </div>
                        </div>
                        
                    </div>
                 </div>
                 </div>
        )
    }
}
export default About;