import React, { Component } from 'react';
import '../css/Admindetail.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Adminbookingdetail extends Component {
    state = {
        details: []
    }

    //to get data automatically from database without any click event
    componentDidMount() {
        axios.get("http://localhost:90/booking/all")
            .then((response) => {
                console.log(response)
                this.setState({
                    details: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

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
                                    <h1>Booking Detail</h1>

                                    <table className="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>Fullname</th>
                                                {/* <th>Phone </th> */}
                                                <th>From</th>
                                                <th>To</th>
                                                <th>Date</th>
                                                <th>Time</th>
                                                <th>Distance</th>
                                                <th>Price</th>
                                            </tr>

                                            {
                                                this.state.details.map((booking) => {
                                                    return (

                                                        <tr>
                                                            <td>{booking.fullname}</td>
                                                            {/* <td>{booking.phone}</td> */}
                                                            <td>{booking.from}</td>
                                                            <td>{booking.to}</td>
                                                            <td>{booking.date}</td>
                                                            <td>{booking.time}</td>
                                                            <td>{booking.distance}</td>
                                                            <td>{booking.price}</td>
                                                        </tr>
                                                    )
                                                })
                                            }

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

export default Adminbookingdetail;