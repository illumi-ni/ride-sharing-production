import React, { Component } from 'react';
import '../css/login.css';
import axios from "axios"
import { Redirect } from 'react-router-dom';

class AdminRegister extends Component {
    state = {
        username: "",
        password: "",
        chklogin: false
    }
    
    submitLogin = (e) => {
        e.preventDefault();
        const data = {
            username: this.state.username,
            password: this.state.password
        }

        axios.post("http://localhost:90/admin/signup", data)
            .then(response => {
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
            return <Redirect to='/adminlogin' />
        }

        return (
            <div className="container-fluid" id="container">
                <div className="Admin-log row">
                    <div className="col-md-2"></div>
                    <div className="Admin col-md-8">
                        <div className="form-container log-in-container">
                            <form >
                                <h1>Admin Register</h1>
                                <input type="text" placeholder="Username" name="username" id="username" value={this.state.username} onChange={(event) => { this.setState({ username: event.target.value }) }} required />
                                <input type="text" placeholder="Password" name="password" id="password" value={this.state.password} onChange={(event) => { this.setState({ password: event.target.value }) }} required />
                                <button type="submit" className='button' onClick={this.submitLogin}>Register</button>
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

export default AdminRegister