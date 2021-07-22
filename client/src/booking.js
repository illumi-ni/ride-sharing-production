// import { left } from '@popperjs/core';
import React, { Component } from 'react';
import './booking.css';
// import car from './car.jpg'
import axios from 'axios';


class booking extends Component {
    state = {
        fullname : "",
        phone:"",
        from:"",
        to:"",
        dob:"",
        time:"",
      
    }
    
ChangeItems=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}
//img handler

SendItems=(e)=>{
    //preventDefault== By default refresh hunxa so, blank nahoss vannah refresh nahoss vannah
    e.preventDefault();
    const data = new FormData();
    data.append('fullname',this.state.fullname)
    data.append('phone',this.state.phone)
    data.append('from',this.state.from)
    data.append('to',this.state.to)
    data.append('dob',this.state.dob)
    data.append('time',this.state.time)
   

    console.log(data)

    axios.post("http://localhost:90/customer/booking",data)

    
    .then((response)=>{
        console.log(response)
        window.location.reload(true);
    })
    .catch((error)=>{
        console.log(error.response)
    })
}
    render() {
        return (
            // <div style={{ backgroundImage: `url(${car})`, backgroundRepeat: 'no-repeat' }}>
            <div className="container-fluid">
                <div className ="jumbotron text-center">
                   
                <img src='./hire.jpg' alt='car' className='img-fluid' style={{width:"100%"}}/> 
                    
                </div>
                
                
                <div className="Booking">
                <div className="row">
                    <div className="  col-sm-3"></div>
                    <div className="Booking_container  col-sm-6">
                    <form>
                        <h1>Booking Your Ride</h1>
                        <h4>Complete your plans today by reserving a ride. Request a ride up to 30 days in advance</h4>

                            <h5 for="fullname"><label className="regstyle">Fullname</label>
                                <input type="text" placeholder="Fullname...... " name="fullname"  value={this.state.fullname} onChange={this.ChangeItems}required />

                            </h5>
                           
                            <h5 for="context"><label className="regstyle">Contact</label>
                                <input type="text" placeholder="Contact......." name="phone"   value={this.state.phone} onChange={this.ChangeItems}required />
                            </h5>
                            <h5 for="context"><label className="regstyle">From</label>
                                <input type="text" placeholder="destination......." name="from"  value={this.state.from} onChange={this.ChangeItems} required />
                            </h5>
                            <h5 for="context"><label className="regstyle">To</label>
                                <input type="text" placeholder="destination......." name="to"   value={this.state.to} onChange={this.ChangeItems}required />
                            </h5>
                            <h5 for="context"><label className="regstyle">Date</label>
                                <input type="date" placeholder="Date......." name="dob"   value={this.state.dob} onChange={this.ChangeItems}required />
                            </h5>
                            <h5 for="context"><label className="regstyle">Time</label>
                                <input type="time" placeholder="Time......." name="time"  value={this.state.time} onChange={this.ChangeItems} required />
                            </h5>

                            <button type="submit" className='Book_btn' onClick={this.SendItems}>Book</button>

                       

                        </form>
                    </div>

                    </div>
                 
                </div>
            </div>

        )
    }
}

export default booking;