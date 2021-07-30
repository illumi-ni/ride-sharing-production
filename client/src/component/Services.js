import React, { Component } from 'react';
import '../css/Services.css'
import pathao from "../images/pathao.png"
import ride from "../images/ride.png"
import office from "../images/office.jpg"
import cab from "../images/cab.jpg"


class Services extends Component {
    render() {
        return (
            <section id="services" class="services ">
      <div class="container">

        <div class="section-title pt-5" data-aos="fade-up">
          <h2>Our Services</h2>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="icon-box" data-aos="fade-up">
              <div class="icon"><i class="bi bi-briefcase"></i></div>
              <h4 class="title" ><a href="" style={{fontSize:"30px",textDecoration:"none"}}>Taxi Services</a></h4>
              <img src={pathao} class="card-img-top" alt=""></img>
              <p class="description">Taxi service is an important Transportation Option that meets a variety of needs,
               including Basic Mobility in emergencies, 
               general transportation for non-drivers, and mobility for Tourists and visitors.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="icon-box" data-aos="fade-up">
              <div class="icon"><i class="bi bi-book" ></i></div>
              <h4 class="title"><a href=""style={{fontSize:"30px",textDecoration:"none"}}>Advance Booking</a></h4>
              <img src={ride} class="card-img-top" alt=""></img>
              <p class="description">An advance booking is a booking made before you arrive at a hotel, restaurant, or other place.
              Save Money. It's a common knowledge that booking ahead often means cheaper tickets and smaller fees. 
              Booking even five weeks in advance can significantly decrease the prices.</p>
            </div>
          </div>

          <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="icon-box">
              <div class="icon"><i class="bi bi-card-checklist"></i></div>
              <h4 class="title"><a href=""style={{fontSize:"30px",textDecoration:"none"}}>Office pick and drop</a></h4>
              <img src={office} class="card-img-top" alt=""></img>
              <p class="description">Ride Sharing provide office pick and drop services at affordable rates. 
              We always ensure that the customers who avail our services are always happy and satisfied.General words for "pick up" and "drop off" and "both" are transportation and delivery. 
              Generally, they imply all three. The word transfer can also be used to convey both meanings by themselves or simultaneously. </p>
            </div>
          </div>
          <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="icon-box">
              <div class="icon"><i class="bi bi-binoculars" ></i></div>
              <h4 class="title"><a href=""style={{fontSize:"30px",textDecoration:"none"}}>Ride share</a></h4>
              <img src={cab} class="card-img-top" alt=""></img>
              <p class="description">sharing of car journeys so that more than one person travels in a car, 
              and prevents the need for others to have to drive to a location themselves.
              An arrangement or instance involving the sharing of rides in a motor vehicle with other people, especially commuters: a statewide campaign to encourage ridesharing. 
              Also called real-time ridesharing .</p>
            </div>
          </div>

          
        </div>

      </div>
    </section>
        )
    }
}

export default Services