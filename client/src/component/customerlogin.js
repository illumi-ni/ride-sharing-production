import React, { Component } from 'react';
import '../css/customer.css';
import axios from 'axios'
import { Redirect } from 'react-router-dom';

class customerlogin extends Component {
    state = {
        otp: "",
        chklogin: false
    }

    submitLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:90/verifyotp", this.state)
            .then((response) => {
                console.log(response);
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('email', response.data.customerData.email)
                localStorage.setItem('fullname', response.data.customerData.fullname)
                localStorage.setItem('contact', response.data.customerData.contact)
                localStorage.setItem('id', response.data.customerData._id)

                alert("Successful")
                this.setState({
                    chklogin: true
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    render() {
        if (this.state.chklogin === true) {
            //redirect to dashboard
            return <Redirect to='/Upcomingride' />

        }

        return (
            <div className="container-fluid">
                <div className="row no-gutter">
                    <div className="col-md-1"></div>
                    <div className="col-md-5 d-none d-md-flex bg-image"></div>
                    <div className="col-md-5 bg-light">
                        <div className="login d-flex align-items-center py-5">
                            <div className="container">
                                <div className="row">
                                    <div className="all col-lg-10 col-xl-7 ">
                                        <h3 className="display-4">Customer Login!</h3>
                                        <p className="text-muted mb-4">Please enter your OTP to login.</p>
                                        <form className="demoform">
                                            <div className="group">
                                                <input type="text" placeholder="OTP" name="otp" id="otp" value={this.state.otp}
                                                    onChange={(event) => { this.setState({ otp: event.target.value }) }}
                                                    required className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                            </div>
                                            <button type="submit" className='btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm' onClick={this.submitLogin}>Log In</button>
                                            <div> <p>" When you go on a road trip the road trip itself becomes part of the story."</p></div>
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

export default customerlogin;