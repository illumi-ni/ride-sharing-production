import React, { Component } from 'react';
import '../css/demo.css';

class demo extends Component {
  render() {
    return (
      <div className="container-fluid">
        <section id="team" class="team section-bg">
          <div class="container">
            <div class="section-title">
              <h2>Team</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div class="member">
                  <img src="Ujwal.jpg" alt="" />
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <p>
                    Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
                  </p>
                  <div class="social">
                    <a href=""><i class="icofont-twitter"></i></a>
                    <a href=""><i class="icofont-facebook"></i></a>
                    <a href=""><i class="icofont-instagram"></i></a>
                    <a href=""><i class="icofont-linkedin"></i></a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div class="member">
                  <img src="Reshika.jpg" alt="" />
                  <h4>Sarah Jhinson</h4>
                  <span>Product Manager</span>
                  <p>
                    Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
                  </p>
                  <div class="social">
                    <a href=""><i class="icofont-twitter"></i></a>
                    <a href=""><i class="icofont-facebook"></i></a>
                    <a href=""><i class="icofont-instagram"></i></a>
                    <a href=""><i class="icofont-linkedin"></i></a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div class="member">
                  <img src="Salina.jpg" alt="" />
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                  <p>
                    Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
                  </p>
                  <div class="social">
                    <a href=""><i class="icofont-twitter"></i></a>
                    <a href=""><i class="icofont-facebook"></i></a>
                    <a href=""><i class="icofont-instagram"></i></a>
                    <a href=""><i class="icofont-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default demo;