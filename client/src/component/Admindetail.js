import React, { Component } from 'react';
import '../css/Admindetail.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Admindetail extends Component {
    state = {
        details: []
    }

    //to get data automatically from database without any click event
    componentDidMount() {
        axios.get("http://localhost:90/customer/all")
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
                                    <h1>Customer's Detail</h1>
                                    <table className="table table-striped table-hover" style={{ position: "relative", marginBottom: "30px" }}>
                                        <thead>
                                            <tr>
                                                <th>Customer's Name</th>
                                                <th>Email ID</th>

                                                <th>Phone Number</th>
                                                <th>Gender</th>
                                            </tr>

                                            {
                                                this.state.details.map((consumer) => {
                                                    return (

                                                        <tr>
                                                            <td>{consumer.fullname}</td>
                                                            <td>{consumer.email}</td>
                                                            <td>{consumer.contact}</td>
                                                            <td>{consumer.gender}</td>

                                                        </tr>
                                                    )
                                                })
                                            }

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