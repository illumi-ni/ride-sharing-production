import React, { Component } from 'react';
import '../css/Customerprofile.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactRoundedImage from "react-rounded-image";
import { } from 'react-icons/fa';

class Customerprofile extends Component {
    state = {
        fullname: "",
        email: "",
        contact: "",
        gender: "",
        photo: "",
        id: "",
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    fileHandler = (e) => {
        this.setState({
            photo: e.target.files[0]
        })
    }

    changeHandler = (e) => {
        //type gareko value store gardai jancha     
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        const email = localStorage.getItem('email')
        console.log(email)

        axios.get('http://localhost:90/customer/single/' + email)
            .then((response) => {

                console.log(response.data)
                this.setState({
                    id: response.data.CustomerData._id,
                    fullname: response.data.CustomerData.fullname,
                    email: response.data.CustomerData.email,
                    contact: response.data.CustomerData.contact,
                    gender: response.data.CustomerData.gender,
                    photo: response.data.CustomerData.photo
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    updateUserData = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('id', this.state.id)
        data.append('fullname', this.state.fullname)
        data.append('email', this.state.email)
        data.append('contact', this.state.contact)
        data.append('gender', this.state.gender)
        data.append('photo', this.state.photo)
        // console.log(data)

        axios.put("http://localhost:90/customer/update", data, this.state.config)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    render() {
        return (
            <div>
                <section id="hero5">
                    <div className="hero5-container" data-aos="fade-up">
                        <h1>Welcome to Profile</h1>
                        <h2></h2>
                    </div>
                </section>
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
                </div>

                <div className="page-content page-container" id="page-content">
                    <div className="padding">
                        <div className="row container d-flex justify-content-center">
                            <div className="col-xl-6 col-md-12">
                                <div className="card user-card-full">
                                    <div className="row m-l-0 m-r-0">
                                        <div className="col-sm-4 bg-c-lite-green user-profile">
                                            <div className="card-block text-center text-white">
                                                <p className="text-center" style={{ float: "right" }}>
                                                    <ReactRoundedImage image={"http://localhost:90/" + this.state.photo} />

                                                    <input type="file" name="photo" className="form-control" onChange={this.fileHandler} style={{ marginTop: "10px" }} /></p>
                                                <h6 className="f-w-600" >{localStorage.getItem('fullname')}</h6>
                                            </div>
                                        </div>

                                        <div className="col-sm-8">
                                            <div className="card-block">
                                                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <p className="m-b-10 f-w-600">Fullname</p>
                                                        <input type="Fullname" className="form-control" name="fullname" placeholder="Enter fullName" value={this.state.fullname} onChange={this.changeHandler} />
                                                    </div>

                                                    <div className="col-sm-12">
                                                        <p className="m-b-10 f-w-600">Email</p>
                                                        <input type="email" className="form-control" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.changeHandler} />
                                                    </div>

                                                    <div className="col-sm-12">
                                                        <p className="m-b-10 f-w-600">Phone</p>
                                                        <input type="Phone" className="form-control" name="contact" placeholder="Enter Phone No" value={this.state.contact} onChange={this.changeHandler} />
                                                    </div>

                                                    <div className="col-sm-12">
                                                        <p className="m-b-10 f-w-600">Gender</p>
                                                        <input type="gender" className="form-control" name="gender" placeholder="Enter Gender" value={this.state.gender} onChange={this.changeHandler} />
                                                    </div>

                                                    <button className="btn btn-primary btn-block" onClick={this.updateUserData} style={{ marginTop: "20px" }}>Update</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Customerprofile