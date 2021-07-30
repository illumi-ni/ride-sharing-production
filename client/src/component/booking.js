// import { left } from '@popperjs/core';
import React, { Component } from 'react';
import '../css/booking.css';
import axios from 'axios';


class booking extends Component {
    state = {
        fullname : "",
        phone:"",
        from:"",
        to:"",
        date:"",
        time:"",
        distance:"",
        price:""
      
    }
    
ChangeItem=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}
//img handler

SendItems=(e)=>{
    //preventDefault== By default refresh hunxa so, blank nahoss vannah refresh nahoss vannah
    e.preventDefault();

    axios.post("http://localhost:90/customer/booking",this.state)
    .then((response)=>{
        console.log(response)
		alert(response.data.message)
		window.location.reload(true);
    })
    .catch((error)=>{
        console.log(error.response)
    })
}
    render() {
        return (
            <div>
            <section id="hero2">
            <div class="hero2-container" data-aos="fade-up">
                <h1>Welcome to Booking Page</h1>
                <h2></h2>
            
            </div>
            </section> 
        
            <section id="booking" class="booking">
		    <div class="section-center">
			<div class="container">
				<div class="row">
					<div class="booking-form">
						<div class="form-header">
							<h1>Make Advanced Booking</h1>
						</div>
						<form>
                            <div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<input class="form-control" type="text" placeholder="Fullname..." name="fullname"  value={this.state.fullname} onChange={this.ChangeItem}/>
										<span class="form-label">Fullname</span>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<input class="form-control" type="text" placeholder="Phone..." name="phone"   value={this.state.phone} onChange={this.ChangeItem}required />
										<span class="form-label">Phone</span>
									</div>
								</div>
							</div>
                            <div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<input class="form-control" type="text" placeholder="From..." name="from"  value={this.state.from} onChange={this.ChangeItem} required/>
										<span class="form-label">From</span>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<input class="form-control" type="text" placeholder="To..." name="to"  value={this.state.to} onChange={this.ChangeItem} required/>
										<span class="form-label">To</span>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<input class="form-control" type="date" placeholder="Date..." name="date"  value={this.state.date} onChange={this.ChangeItem} required/>
										<span class="form-label">Date</span>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<input class="form-control" type="text" placeholder="Time..." name="time"  value={this.state.time} onChange={this.ChangeItem} required/>
										<span class="form-label">Time</span>
									</div>
								</div>
							</div>
							
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<input class="form-control" type="text" placeholder="Distance..." name="distance" value={this.state.distance} onChange={this.ChangeItem} required/>
										<span class="form-label">Distance</span>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<input class="form-control" type="text" placeholder="Price" name="price" value={this.state.price} onChange={this.ChangeItem} required/>
										<span class="form-label">Price</span>
									</div>
								</div>
							</div>
							<div class="form-btn">
								<button class="submit-btn" onClick={this.SendItems}>Book Now</button>
							</div>
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

export default booking;