import React, { Component } from 'react';
import '../css/register.css';
// import car from './car.jpg'
import axios from 'axios';
import carrent from "../images/carrent.jpg"
import { Link } from 'react-router-dom';


class register extends Component {
    constructor() {
        super();
        this.state = {
            fullname: "",
            email: "",
            contact: "",
            gender: ""
            
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
                console.log(response)
                
            })
            .catch(error => {
                console.log(console.error())
            })
    }

    render() {
      
        return (


            <div class="page-content">
		<div class="form-v4-content">
        <div style={{ backgroundImage: `url(${carrent})`,backgroundRepeat: 'no-repeat' , width :'100%'  }}>
			<div class="form-left">
         
				<h2>INFOMATION</h2>
				<p class="text-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed. Diam volutpat commodo.</p>
				<p class="text-2"><span>Eu ultrices:</span> Vitae auctor eu augue ut. Malesuada nunc vel risus commodo viverra. Praesent elementum facilisis leo vel.</p>
                <Link to ="/customer">
                <div class="form-left-last">
					<input type="submit" name="account" class="account" value="Have An Account"/>
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
					<label for="your_email">Your Email</label>
                    <input type="text" placeholder="Email" name="email" value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }} />
				</div>
				
					<div class="form-row ">
						<label for="gender">Gender</label>
                        <input type="radio" value="Male" name="gender" checked={this.state.gender === "Male"}
                                    onChange={this.onValueChange} /> Male
                                <input type="radio" value="Female" name="gender" checked={this.state.gender === "Female"}
                                    onChange={this.onValueChange} /> Female
                                <input type="radio" value="Other" name="gender" checked={this.state.gender === "Other"}
                                    onChange={this.onValueChange} /> Other
					</div>
			
                <div class="form-row">
					<label for="your_contact">Your Contact</label>
                    <input type="text" placeholder="Contact" name="contact"  value={this.state.contact} onChange={(event) => { this.setState({ contact: event.target.value }) }}/>
				</div>
				
				<div class="form-row-last">
					<input type="submit" name="register" class="register" value="Register" onClick={this.sendUserData}/>
				</div>
			</form>
		</div>
	</div>
    

    
           
        )
    }
}

export default register;