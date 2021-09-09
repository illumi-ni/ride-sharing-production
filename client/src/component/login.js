import React, { Component } from 'react';
import '../css/login.css';
import axios from "axios"
import { Redirect } from 'react-router-dom';

class login extends Component {
    state = {
        username: "",
        password: "",
        chklogin: false
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:90/admin/login", this.state)
            .then((response) => {
                console.log(response);
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('username', response.data.data)
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
            return <Redirect to='/AdminDashboard' />
        }

        return (
            <div className="container-fluid" id="container">
                <div className="Admin-log row">
                    <div className="col-md-2"></div>
                    <div className="Admin col-md-8">
                        <div className="form-container log-in-container">
                            <form >
                                <h1>Admin Login</h1>
                                <input type="text" placeholder="Username" name="username" id="username" value={this.state.username} onChange={this.changeHandler} required />
                                <input type="text" placeholder="Password" name="password" id="password" value={this.state.password} onChange={this.changeHandler} required />
                                <button type="submit" className='button' onClick={this.submitLogin}>Login</button>
                            </form>
                        </div>

                        <div class="overlay-container">
                            <div class="overlay">
                                <div class="overlay-panel overlay-right">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        )
    }
}

export default login