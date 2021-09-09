import React, { Component } from 'react';
import '../css/About.css';

class About extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="Aboutus">
          <div className="img">
            <div className="col-sm-12">
              <div className="about">
                <h1>About Us</h1>
                <h2> Car Rent is a transportation technology providing a full range of app-based services including ride-sharing.
                  We want a better way to plan and manage our own travel. </h2>
              </div>
            </div>
          </div>

          <div className=" jumbotron car">
            <div className="row">
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

          <section id="team" class="team section-bg">
            <div class="container">
              <div class="section-title">
                <h2>Team</h2>
                <p>Our team members.</p>
              </div>

              <div class="row">
                <div class="col-lg-1 col-md-6 d-flex align-items-stretch"></div>
                <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                  <div class="member">
                    <img src="Ujwal.jpg" alt="" />
                    <h4>Ujwal Lamichhane</h4>
                    <span>Scrum master/ Product owner</span>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                  <div class="member">
                    <img src="Meezu.jpg" alt="" />
                    <h4>Meezu Lawot</h4>
                    <span>Development Team</span>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                  <div class="member">
                    <img src="Salina.jpg" alt="" />
                    <h4>Salina Shrestha</h4>
                    <span>Development Team</span>
                  </div>
                </div>
                <div class="col-lg-2 col-md-6 d-flex align-items-stretch"></div>

              </div>
              <div class="row">
                <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                  <div class="member">
                    <img src="Reshika.jpg" alt="" />
                    <h4>Reshika Shrestha</h4>
                    <span>Development Team</span>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                  <div class="member">
                    <img src="Prativa.jpg" alt="" />
                    <h4>Prativa Shrestha</h4>
                    <span>Development Team</span>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                  <div class="member">
                    <img src="Rahul.jpg" alt="" />
                    <h4>Rahul Roy</h4>
                    <span>Development Team</span>
                  </div>
                </div>
                
                <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                  <div class="member">
                    <img src="" alt="" />
                    <h4>Suprit Sharma</h4>
                    <span>Development Team</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default About;