import React, { Component } from 'react';
import '../css/register.css';
import axios from 'axios';
import pic from "../images/pic.jpg"
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class register extends Component {
    constructor() {
        super();
        this.state = {
            fullname: "",
            email: "",
            contact: "",
            gender: "",
            chklogin: false

        };
        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(event) {
        this.setState({
            gender: event.target.value
        });
    }

    sendUserData = (e) => {
        e.preventDefault()
        const data = {
            fullname: this.state.fullname,
            email: this.state.email,
            contact: this.state.contact,
            gender: this.state.gender
        }

        axios.post("http://localhost:90/customer/insert", data)
            .then(response => {
                localStorage.setItem('contact', response.data.customerData.contact)
                console.log(response)
                alert(response.data.message)
                window.location.reload(true);

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
            return <Redirect to='/customer' />
        }

        return (
            <div class="page-content">
                <div class="form-v4-content">
                    <div style={{ backgroundImage: `url(${pic})`, backgroundRepeat: 'no-repeat', width: '100%' }}>
                        <div class="form-left" >
                            <h2 style={{ color: "white" }}>INFOMATION</h2>
                            <p class="text-1" style={{ color: "white" }}>If you already have an account than you can click here.</p>
                            <Link to="/customer">
                                <div class="form-left-last">
                                    <input type="submit" name="account" class="account" value="Have An Account" />
                                </div>
                            </Link>

                            <p class="text-2" style={{ color: "white" }}><span>Admin?</span>Click here to register your name.</p>
                            <Link to="/adminregister">
                                <div class="form-left-last">
                                    <input type="submit" name="account" class="account" value="Register for Admin" />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <form class="form-detail" action="#" method="post" id="myform">
                        <h2>REGISTER FORM</h2>

                        <div class="form-row">
                            <label for="first_name">Fullname</label>
                            <input type="text" placeholder="Fullname" name="name" value={this.state.fullname} onChange={(event) => { this.setState({ fullname: event.target.value }) }} />
                        </div>

                        <div class="form-row">
                            <label for="your_email" style={{ marginTop: "5px" }}>Your Email</label>
                            <input type="text" placeholder="Email" name="email" value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }} />
                        </div>

                        <div class="form-row">
                            <label for="your_contact" style={{ marginTop: "5px" }}>Your Contact</label>
                            <input type="text" placeholder="Contact" name="contact" value={this.state.contact} onChange={(event) => { this.setState({ contact: event.target.value }) }} />
                        </div>

                        <div class="form-row " style={{ display: "flex", marginTop: "20px", marginBottom: "20px" }}>
                            <label for="gender">Gender</label>
                            <input type="radio" value="Male" name="gender" checked={this.state.gender === "Male"}
                                onChange={this.onValueChange} style={{ marginTop: "5px" }} /> Male
                            <input type="radio" value="Female" name="gender" checked={this.state.gender === "Female"}
                                onChange={this.onValueChange} style={{ marginTop: "5px" }} /> Female
                            <input type="radio" value="Other" name="gender" checked={this.state.gender === "Other"}
                                onChange={this.onValueChange} style={{ marginTop: "5px" }} /> Other
                        </div>

                        <div class="form-row-last">
                            <input type="submit" name="register" class="register" value="Register" onClick={this.sendUserData} />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default register;