import React, { Component } from 'react';
import '../css/Customerprofile.css';
import { Link } from 'react-router-dom';
import Delete from "@material-ui/icons/Delete"

class History extends Component {
    render() {
        return (
            <div>
                <section id="hero5">
                    <div class="hero5-container" data-aos="fade-up">
                        <h1>Welcome to Profile</h1>
                        <h2></h2>
                    </div>
                </section>

                <div className="container-fluid">
                    <section id="CustomerProfile">
                        <div className="row customerdetail">
                            <div className="col-md-4 "></div>
                            <div className="col-md-4 ">
                                <ul>
                                    <Link to="/Customerprofile">
                                        <li> Profile </li>
                                    </Link>

                                    <Link to="/Upcomingride">
                                        <li> UpcomingRide </li>
                                    </Link>

                                    <Link to="/History">
                                        <li> History </li>
                                    </Link>
                                </ul>
                            </div>
                            <div className="col-md-4 "></div>
                        </div>
                    </section>
                </div>

                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className="update">
                            <h4>Date:</h4>
                            <h4>From:</h4>
                            <h4>To:</h4>
                            <button className="buttoncan"><Delete /> </button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-1"></div>
                    </div>

                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className="update">
                            <h4>Date:</h4>
                            <h4>From:</h4>
                            <h4>To:</h4>
                            <button className="buttoncan"><Delete /> </button>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        )
    }
}

export default History