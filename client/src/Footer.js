import React from 'react'
import './Footer.css'

import { FaTwitter,FaFacebookSquare,FaInstagramSquare,FaGoogle,FaYoutubeSquare } from 'react-icons/fa';
function Footer() {
    return (
    <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6">
            <div class="footer-info">
              <h3>Ride Sharing</h3>
              <p>
                Dillibazar <br/>
                Kathmandu, nepal<br/><br/>
                <strong>Phone:</strong> +977 987654321<br/>
                <strong>Email:</strong> ridesharing@email.com<br/>
              </p>
              <div class="social-links mt-3">
                <a href="#" class="twitter"><FaTwitter/></a>
                <a href="#" class="facebook"><FaFacebookSquare/></a>
                <a href="#" class="instagram"><FaInstagramSquare/></a>
                <a href="#" class="google-plus"><FaGoogle/></a>
                <a href="#" class="youtube"><FaYoutubeSquare/></a>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> Home</li>
              <li><i class="bx bx-chevron-right"></i>About us</li>
              <li><i class="bx bx-chevron-right"></i> Booking</li>
              <li><i class="bx bx-chevron-right"></i>Terms of service</li>
              <li><i class="bx bx-chevron-right"></i> Privacy policy</li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> Taxi Services</li>
              <li><i class="bx bx-chevron-right"></i> Advance Booking</li>
              <li><i class="bx bx-chevron-right"></i> Office Pick and Drop</li>
              <li><i class="bx bx-chevron-right"></i> Marketing</li>
              
            </ul>
          </div>
          
         
          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="" method="post">
              {/* <input type="email" name="email"/> */}
              <input type="submit" value="Subscribe"/>
            </form>

          </div>
          

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Ride Sharing</span></strong>. All Rights Reserved
      </div>
      <div class="credits">

        Designed by Initiators
      </div>
    </div>
  </footer>

    )
}

export default Footer;
