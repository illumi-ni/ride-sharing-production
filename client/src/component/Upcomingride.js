import React, { Component } from 'react';
import '../css/Customerprofile.css';
import { Link } from 'react-router-dom';
import Delete from "@material-ui/icons/Delete"
import Update from "@material-ui/icons/Update"
import Date from "@material-ui/icons/DateRange"
import Time from "@material-ui/icons/Timer"
import From from "@material-ui/icons/TimeToLeave"
import To from "@material-ui/icons/TimelapseRounded"
import axios from "axios"

class UpcomingRide extends Component {
    state = {
        details: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    //to get data automatically from database without any click event
    componentDidMount() {
        axios.get("http://localhost:90/booking/single", this.state.config)
            .then((response) => {
                console.log("BookingData")
                console.log(response)
                this.setState({
                    details: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    DeleteBooking = (BookingId) => {
        axios.delete("http://localhost:90/delete/booking/" + BookingId)
            .then((response) => {
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
                                </ul>
                            </div>
                            <div className="col-md-4 "></div>
                        </div>
                    </section>
                </div>

                <div className="row">
                    {
                        this.state.details.map((booking) => {
                            return (
                                <div className="update">

                                    <h6><Date />{booking.date}<Time />{booking.time}</h6>
                                    <h4> </h4>

                                    <h5><From />{booking.from}</h5>
                                    <h5><To /> {booking.to}</h5>
                                    <h5>Price:{booking.price}</h5>
                                    <button className="buttoncan" onClick={this.DeleteBooking.bind(this, booking._id)}><Delete /> </button>
                                    <Link to={"/BookingUpdate/" + booking._id}> <button className="buttonup"><Update /></button></Link>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}

export default UpcomingRide