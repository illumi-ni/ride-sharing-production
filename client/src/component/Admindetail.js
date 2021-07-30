import React, { Component } from 'react';
import '../css/Admindetail.css';
import { Link } from 'react-router-dom';
// import { FaLocationArrow,FaGoogleDrive,FaPhoneAlt } from 'react-icons/fa';

class Admindetail extends Component {
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
                                    <h1>Customer's Detail</h1>

                                    <table className="table table-striped table-hover" style={{position:"relative", marginBottom: "30px"}}>
                                        <thead>
                                            <tr>
                                                <th>Customer's Name</th>
                                                <th>Email ID</th>
                                                <th>Gender</th>
                                                <th>Phone Number</th>
                                            </tr>

                                            <tr>
                                                <td>asdfghj</td>
                                                <td>asdfgh</td>
                                                <td>sdfgh</td>
                                                <td>asdfghk</td>

                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>

                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>

                                            </tr>


                                        </thead>

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


export default Admindetail