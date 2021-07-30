import React, { Component } from 'react';
import '../css/Admindetail.css';
import { Link } from 'react-router-dom';
// import { FaLocationArrow,FaGoogleDrive,FaPhoneAlt } from 'react-icons/fa';

class Admindriverdetail extends Component {
    render() {
        return (
            <div className="container-fluid">

                <section id="Admin">
                    <div className="Admin-container" data-aos="fade-up">
                        <h1>Admin Page</h1>

                    </div>
                </section>
                <div className="row customerdetail">
                    <div className="col-md-4 "></div>
                    <div className="col-md-4 ">
                        <ul>
                            <Link to="/Admindriverdetail">
                                <li> Driver </li>
                            </Link>
                            <Link to="/Admindetail">
                                <li> Customer </li>
                            </Link>
                            <Link to="/Adminbookingdetail">
                                <li> Booking </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="col-md-4 "></div>
                </div>

                <section id="Details">
                    <div className="customerdetailtable">
                        <div className="container-xl">
                            <div className="table-responsive">
                                <div className="table-wrapper">
                                    <h1>Driver's Detail</h1>

                                    <table className="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>Fullname</th>
                                                <th>Email </th>
                                                <th>Username</th>
                                                <th>Phone</th>
                                                <th>Citizenship</th>
                                                <th>License</th>
                                                <th>D.O.B</th>
                                                <th>Vechicle number</th>
                                                <th>Model</th>

                                            </tr>

                                        </thead>

                                        <tbody>
                                            
                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}


export default Admindriverdetail