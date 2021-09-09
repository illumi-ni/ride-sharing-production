import React, { Component } from 'react';
import '../css/customer.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class customer extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            chklogin: false
        };
    }

    sendEmail = (e) => {
        e.preventDefault()
        const data = {
            email: this.state.email
        }

        axios.post("http://localhost:90/sendotp", data)
            .then(response => {
                this.setState({
                    chklogin: true
                })
            })
            .catch(error => {
                console.log(console.error())
            })
    }

    render() {
        if (this.state.chklogin === true) {
            //redirect to dashboard
            return <Redirect to='/customerlogin' />

        }

        return (
            <div class="container-fluid">
                <div class="row no-gutter">
                    <div className="col-md-1"></div>
                    <div class="col-md-5 d-none d-md-flex bg-image"></div>
                    <div class="col-md-5 bg-light">
                        <div class="login d-flex align-items-center py-5">
                            <div class="container">
                                <div class="row">
                                    <div class="all col-lg-10 col-xl-7 ">
                                        <h3 class="display-4">Customer Login!</h3>
                                        <p class="text-muted mb-4">Please enter your email to login.</p>
                                        <form className="demoform">
                                            <div class="form-group">
                                                <input type="text" placeholder="Enter your email"
                                                    value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }}
                                                    name="username" id="username" required class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" onClick={this.sendEmail}>Next</button>

                                            <div class="text-center d-flex justify-content-between mt-4"><p>Don't have an account??? <a href="/register" class="font-italic text-muted">
                                                <u>Register</u></a></p></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        )
    }
}

export default customer