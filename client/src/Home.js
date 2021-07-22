import { Link } from 'react-router-dom';
import React, { useRef, useState } from 'react';


import './Home.css'
import video from './video.mp4'

function Home(props) {
    //  video to run
    // useState and useRef
    const [isVideoPlaying, setIsVideoPlaying] =useState(false) 
    const videoRef = useRef(null);
    const onVideoPress = () =>{
        if(isVideoPlaying){
            // stop the video because we have already assigned false in isVideoPlaying in line 8
            videoRef.current.pause()
            setIsVideoPlaying(false)
        }else{
            // play the video 
            videoRef.current.play()
            setIsVideoPlaying(true)
        }
    }
    return (
       <div>

            <section id="hero">
                <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">

                <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active" >
                    <img src='./havana.jpg' alt='havana' className='img-fluid'/>
                    <div class="carousel-container">
                        <div class="container">
                        <h2 class="animate__animated animate__fadeInDown">Welcome to <span>Ride Sharing</span></h2>
                        <p class="animate__animated animate__fadeInUp"> If you don’t know where you are going, any road will get you there.</p>
                        
                        </div>
                    </div>
                    </div>

                
                    <div class="carousel-item" >
                
                    <img src='./taxi.jpg' alt='taxi' className='img-fluid'/>
                    <div class="carousel-container">
                        <div class="container">
                        <h2 class="animate__animated animate__fadeInDown">Ride Sharing</h2>
                        <p class="animate__animated animate__fadeInUp"> Everything in life is somewhere else, and you get there in a car.</p>
                        
                        </div>
                    </div>
                    </div>

                    
                    <div class="carousel-item" >
                    <img src='./carrent.jpg' alt='carrent' className='img-fluid'/>
                    <div class="carousel-container">
                        <div class="container">
                        <h2 class="animate__animated animate__fadeInDown">Ride Sharing</h2>
                        <p class="animate__animated animate__fadeInUp"> If everything seems under control, you’re just not going fast enough.</p>
                    
                        </div>
                    </div>
                    </div>

                </div>
                   
                <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                </a>
               
                <a class="carousel-control-next"  href="#heroCarousel" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                </a>
               

                </div>
            </section>

    <main id="main">
            <section id="about1" class="about1">
            <div class="container">

                <div class="row content">
                <div class="col-lg-6">
                <div className='videoCard'>
                        <video 
                    ref={videoRef}
                    onClick={onVideoPress}
                    className="videoCard_player"
                        src={video}
                       
                        alt='IG reel video'
                        loop
                        />
                        </div>
                </div>
                <div class="col-lg-6 pt-4 pt-lg-0">
                    <p>
                   <h1>About Ride Sharing</h1>
                    </p>
                   
                     <p class="fst-italic">
                    <h4>Ride Sharing platforms use a smartphone app and website which connects drivers with passengers in the area.
                         The driver logs into the app to set their status to online, indicating that they are available to accept a ride..
                          <ul>
                    <li><i class="ri-check-double-line"></i>Once the customer has selected a destination and requested the pick up,
                     the driver will get a ping and has the choice to accept or decline the ride.</li>
                    <li><i class="ri-check-double-line"></i> Once the ride has been accepted and the passenger has been picked up,
                     the driver proceeds to the riders destination.</li>
                    <li><i class="ri-check-double-line"></i>When the driver reaches the end destination, 
                    the trip will have concluded and the passenger will exit the vehicle.</li>
                    </ul>
                    </h4>
                    </p>
                </div>
                </div>

            </div>
            </section>
            <section id="cta" class="cta">
      <div class="container" data-aos="fade-in">

        <div class="text-center">
          <h3>Contact To Action</h3>
          <p> If you have any problem related to our service or our driver is not behaving in a right way then you can freely contact us.</p>
          <Link to ="/contact">
          <a class="cta-btn" >Contact To Action</a>
          </Link>
          
        </div>

      </div>
    </section>

    <section id="services" class="services ">
      <div class="container">

        <div class="section-title pt-5" data-aos="fade-up">
          <h2>Our Services</h2>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="icon-box" data-aos="fade-up">
              <div class="icon"><i class="bi bi-briefcase"></i></div>
              <h4 class="title"><a href="">Taxi Services</a></h4>
              <p class="description">Taxi service is an important Transportation Option that meets a variety of needs,
               including Basic Mobility in emergencies, 
               general transportation for non-drivers, and mobility for Tourists and visitors.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="icon-box" data-aos="fade-up">
              <div class="icon"><i class="bi bi-book" ></i></div>
              <h4 class="title"><a href="">Advance Booking</a></h4>
              <p class="description">An advance booking is a booking made before you arrive at a hotel, restaurant, or other place.</p>
            </div>
          </div>

          <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="icon-box">
              <div class="icon"><i class="bi bi-card-checklist"></i></div>
              <h4 class="title"><a href="">Office pick and drop</a></h4>
              <p class="description">Ride Sharing provide office pick and drop services at affordable rates. 
              We always ensure that the customers who avail our services are always happy and satisfied. </p>
            </div>
          </div>
          <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="icon-box">
              <div class="icon"><i class="bi bi-binoculars" ></i></div>
              <h4 class="title"><a href="">Ride share</a></h4>
              <p class="description">sharing of car journeys so that more than one person travels in a car, 
              and prevents the need for others to have to drive to a location themselves.</p>
            </div>
          </div>

          
        </div>

      </div>
    </section>
        </main> 



            
    </div>
    )
}

export default Home
