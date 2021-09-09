import React, { Component } from 'react';
import '../css/AdminDashboard.css';
import axios from 'axios';
import Delete from "@material-ui/icons/Delete";
import VerticalBar from './VerticalBar';
import PieChart from './PieChart';


class AdminDashboard extends Component {
  state = {
    details: []
  }

  //to get data automatically from database without any click event
  componentDidMount() {
    axios.get("http://localhost:90/contact/all")
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

  deleteAdmin = (id) => {
    axios.delete("http://localhost:90/delete/contact/" + id)
      .then((response) => {
        console.log(response)
        this.componentDidMount()
      })
      .catch((err) => {
        console.log(err.response)
      }
      )
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="AdminDashboard">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="box1 col-md-3" style={{ BackgroundColor: "rgba(255, 99, 132, 0.2)'," }}>
              <h1>Weekly gain</h1>
              <h2 class=""> Rs.20,0000</h2>
              <h6 class="card-text">Increased by 40%</h6>
            </div>

            <div className="box2 col-md-3">
              <h1>Total Customer</h1>
              <h2 class="">1,208</h2>
              <h6 class="card-text">Increased by 60%</h6>
            </div>

            <div className="box3 col-md-3">
              <h1>Total Driver</h1>
              <h2 class="">200</h2>
              <h6 class="card-text">Increased by 20%</h6>
            </div>
            <div className="col-md-2"></div>
          </div>

          <div className="row">
            <div className="col-md-1"></div>
            <div className="box4 col-md-3">
              <h1>Cancle Ride</h1>
              <h2 class="">80</h2>
              <h6 class="card-text">Increased by 10%</h6>
            </div>

            <div className="box5 col-md-3">
              <h1>Total Ride</h1>
              <h2 class="">1,500</h2>
              <h6 class="card-text">Increased by 62%</h6>
            </div>

            <div className="box6 col-md-3">
              <h1>Total Booking</h1>
              <h2 class="">200</h2>
              <h6 class="card-text">Increased by 49%</h6>
            </div>
            <div className="col-md-2"></div>
          </div>

          <div class="row">
            <div class="col-md-7 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <div class="clearfix">
                    <h4 class="card-title float-left">Monthly Chart of Ride Sharing</h4>
                    <div id="visit-sale-chart-legend" class="rounded-legend legend-horizontal legend-top-right float-right">
                      <VerticalBar />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-5 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Round Chart</h4>
                  <div id="traffic-chart-legend" class="rounded-legend legend-vertical legend-bottom-left pt-4">
                    <PieChart />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section id="Details">
            <div className="customerdetailtable">
              <div className="container-xl">
                <h2 style={{ textAlign: "center" }}>Contact Us Details</h2>
                <div className="table-responsive" style={{ marginTop: "10px" }}>
                  <div className="table-wrapper">
                    <table className="table table-striped table-hover" style={{ position: "relative", marginBottom: "30px" }}>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email ID</th>
                          <th>Subject</th>
                          <th>Message</th>
                          <th></th>
                        </tr>

                        {
                          this.state.details.map((admin) => {
                            return (
                              <tr>
                                <td>{admin.fullname}</td>
                                <td>{admin.email}</td>
                                <td>{admin.subject}</td>
                                <td>{admin.message}</td>
                                <td>
                                  <button className="cancel" title="Cancel" data-toggle="tooltip" onClick={this.deleteAdmin.bind(this, admin._id)} style={{ color: "black" }}><Delete /></button>
                                </td>
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
      </div>
    )
  }
}

export default AdminDashboard