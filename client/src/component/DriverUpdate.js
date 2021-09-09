import React, { Component } from 'react';
import '../css/BookingUpdate.css';

class DriverUpdate extends Component {
    render() {
        return (
            <div className="container-fluid">
                <section id="bookingupdate">
                    <div className="row">
                        <div className="col-md-3">
                        </div>
                        <form className="updatebook ">
                            <h1>Driver Register Update</h1>
                            <div className="form2 col-md-6">
                                <div class="form-group">
                                    <label for="Fullname">Full Name</label>
                                    <input type="Fullname" class="form-control" id="FullName" placeholder="Enter fullName" />
                                </div>

                                <div class="form-group">
                                    <label for="Username">User Name</label>
                                    <input type="Fullname" class="form-control" id="FullName" placeholder="Enter username" />
                                </div>

                                <div class="form-group">
                                    <label for="Email">Email </label>
                                    <input type="Email" class="form-control" id="Email" placeholder="Enter your email" />
                                </div>

                                <div class="form-group">
                                    <label for="Phone">Phone No</label>
                                    <input type="Phone" class="form-control" id="Phone" placeholder="Enter Phone No" />
                                </div>

                                <div class="form-group">
                                    <label for="vechicle">Vechile num</label>
                                    <input type="vechile" class="form-control" id="vechile" placeholder="vechile.." />
                                </div>

                                <div class="form-group">
                                    <label for="model">Model</label>
                                    <input type="model" class="form-control" id="model" placeholder="model" />
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}

export default DriverUpdate