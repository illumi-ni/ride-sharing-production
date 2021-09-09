import React, { useState, Component } from 'react';
import '../css/Contact.css';
import { FaLocationArrow, FaGoogleDrive, FaPhoneAlt } from 'react-icons/fa';
import axios from 'axios';

class Contact extends Component {
  state = {
    fullname: localStorage.getItem('fullname'),
    email: localStorage.getItem('email'),
    subject: "",
    message: "",
  }
  ChangeItem = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  SendItems = (e) => {
    //preventDefault== By default refresh hunxa so, blank nahoss vannah refresh nahoss vannah
    e.preventDefault();
    const data = {
      fullname: this.state.fullname,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message,
    }

    axios.post("http://localhost:90/customer/contact", data, this.state.config)
      .then((response) => {
        console.log(response)
        alert(response.data.message)
        window.location.reload(true);
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  render() {
    return (
      <div>
        <section id="hero1">
          <div class="hero1-container" data-aos="fade-up">
            <h1>Welcome to Contact Page</h1>
            <h2></h2>
          </div>
        </section>
        <section id="contact" class="contact">

          <div class="container">
            <div class="row mt-5">
              <div class="col-lg-4">
                <div class="info">
                  <h2>Contact Us</h2>
                  <div class="address">
                    <i class="bi bi-geo-alt"><FaLocationArrow /></i>
                    <h4>Location:</h4>
                    <p>Dillibazar <br />
                      Kathmandu, nepal</p>
                  </div>

                  <div class="email">
                    <i class="bi bi-envelope"><FaGoogleDrive /></i>
                    <h4>Email:</h4>
                    <p>ridesharing@email.com</p>
                  </div>

                  <div class="phone">
                    <i class="bi bi-phone"><FaPhoneAlt /></i>
                    <h4>Call:</h4>
                    <p>+977 987654321</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-8 mt-5 mt-lg-0">
                <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                  <h2>Feel free to ask anything</h2>
                  <div class="col-md-6 form-group mt-3">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" value={localStorage.getItem('fullname')} onChange={this.ChangeItem} />
                  </div>

                  <div class="col-md-6 form-group mt-3">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" value={this.state.subject} onChange={this.ChangeItem} required />
                  </div>

                  <div class="col-md-6 form-group mt-3">
                    <textarea class="form-control" name="message" rows="5" placeholder="Message" value={this.state.message} onChange={this.ChangeItem} required></textarea>
                  </div>

                  <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div class="text-center"><button type="submit" onClick={this.SendItems}>Send Message</button></div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Contact;