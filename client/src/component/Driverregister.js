import React, { Component } from 'react';
import '../css/Driverregister.css';
import axios from 'axios';

class Driverregister extends Component {
    state = {
        fullname: "",
        email: "",
        username: "",
        phone: "",
        citizenship: "",
        license: "",
        dob: "",
        vechileNo: "",
        model: "",
        brand: "",
        photo: ""
    }

    ChangeItems = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //img handler
    fileHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.files[0],
            [e.target.name]: e.target.files[0]
        })
    }

    SendItems = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('fullname', this.state.fullname)
        data.append('email', this.state.email)
        data.append('username', this.state.username)
        data.append('phone', this.state.phone)
        data.append('citizenship', this.state.citizenship)
        data.append('licence', this.state.licence)
        data.append('dob', this.state.dob)
        data.append('vechileNo', this.state.vechileNo)
        data.append('model', this.state.model)
        data.append('brand', this.state.brand)
        data.append('photo', this.state.photo)

        // console.log(data)

        axios.post("http://localhost:90/admin/register", data, this.state.config)
            .then((response) => {
                console.log(response)
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
                <section id="herod">
                    <div class="herod-container" data-aos="fade-up">
                    </div>
                </section>

                <section id="driver" class="driver">
                    <div className="container">
                        <div className="row booking-form-row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <div className="card-body booking-form">
                                    <form action="" method="post">
                                        <h4 className="modal-title" style={{ color: "white" }}>Driver Details</h4>
                                        <div className="row">
                                            <div className="col-sm-6 form-group">
                                                <label style={{ color: "white" }}>Fullname</label>
                                                <input class="form-control" type="text" placeholder="fullname..." name="fullname" value={this.state.fullname} onChange={this.ChangeItems} required />
                                            </div>

                                            <div className="col-sm-6 form-group">
                                                <label style={{ color: "white" }}>Username</label>
                                                <input type="text" name="username" className="form-control" placeholder="username" value={this.state.username} onChange={this.ChangeItems} />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-6 form-group">
                                                <label style={{ color: "white" }}>Email</label>
                                                <input type="text" name="email" className="form-control" placeholder="email" required="required" value={this.state.email} onChange={this.ChangeItems} />
                                            </div>

                                            <div className="col-sm-6 form-group">
                                                <label style={{ color: "white" }}>Password</label>
                                                <input type="text" name="password" className="form-control" placeholder="password" required="required" value={this.state.password} onChange={this.ChangeItems} />
                                            </div>
                                        </div>

                                        <div className="row ">
                                            <div className="col-sm-6 form-group">
                                                <label style={{ color: "white" }}>Phone</label>
                                                <input type="text" name="phone" className="form-control" placeholder="phone" required="required" value={this.state.phone} onChange={this.ChangeItems} />
                                            </div>

                                            <div className="col-sm-6 form-group">
                                                <label style={{ color: "white" }}>Citizenship</label>
                                                <input type="text" name="citizenship" className="form-control" placeholder="citizenship" required="required" value={this.state.citizenship} onChange={this.ChangeItems} />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-6 form-group">

                                                <label style={{ color: "white" }}>Driver Photo</label>
                                                <input type="file" name="photo" className="form-control" required="required" onChange={this.fileHandler} />
                                            </div>

                                            <div className="col-sm-6 form-group">

                                                <label style={{ color: "white" }}>License Photo</label>
                                                <input type="file" name="licence" className="form-control" required="required" onChange={this.fileHandler} />
                                            </div>
                                        </div>

                                        <div className="row ">
                                            <div className="col-sm-6 form-group">
                                                <label style={{ color: "white" }}>DOB</label>
                                                <input type="text" name="dob" className="form-control" placeholder="dob" required="required" value={this.state.dob} onChange={this.ChangeItems} />
                                            </div>

                                            <div className="col-sm-6 form-group">
                                                <label style={{ color: "white" }}>VechileNo</label>
                                                <input class="form-control" type="text" placeholder="vechileNo..." name="vechileNo" value={this.state.vechileNo} onChange={this.ChangeItems} required />
                                            </div>
                                        </div>

                                        <div className="row ">
                                            <div className="col-sm-6 form-group">
                                                <label style={{ color: "white" }}>Car Model</label>
                                                <input type="text" name="model" className="form-control" placeholder="model" required="required" value={this.state.model} onChange={this.ChangeItems} />
                                            </div>
                                            <div className="col-sm-6 form-group">
                                                <label style={{ color: "white" }}>Car Brand</label>
                                                <input type="text" name="brand" className="form-control" placeholder="brand" required="required" value={this.state.brand} onChange={this.ChangeItems} />
                                            </div>
                                        </div>
                                        <input type="submit" className="btn btn-primary btn-block btn-lg" value="Add" onClick={this.SendItems} />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Driverregister;