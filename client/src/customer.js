import React, { Component } from 'react';
import './customer.css';
import log from "./log.jpg";
import axios from 'axios';
import {Redirect } from 'react-router-dom';

class customer extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            chklogin : false
        };
    }

    sendEmail = (e) => {
        e.preventDefault()
        const data = {
            email: this.state.email
        }

        axios.post("http://localhost:90/sendotp", data)
            .then(response => {
                // console.log(response.data.success)
                // if(response.data.success == true) {
                //     return <Redirect to ="/customerlogin"/>
                // }
                this.setState({
                    chklogin : true
                })
            })
            .catch(error => {
                console.log(console.error())
            })
    }

    render() {
        if(this.state.chklogin === true){
            //redirect to dashboard
            return <Redirect to ='/customerlogin' />

        }
        return (
            // <div className="container-fluid">
            // <div style={{ backgroundImage: `url(${bryte})`,backgroundRepeat: 'no-repeat', width:'100%'  }}>

            // <div className="jumbotron Register">
            //     <div className='Register_container'>
            //     <div className="row">
            //     <div className="book col-sm-4"></div>
            //     <div className="book col-sm-4">
            //         <h1>Customer Login</h1>
            //         <form>
            //             <h5 for="email"><label className="regstyle">Email</label>
            //                 <input type="text" placeholder="Please enter your email" 
            //                 value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }}
            //                  name="username" id="username" required />
            //             </h5>
                        
            //             <button type="submit" className='Login_btn' onClick={this.sendEmail}>Next</button>
            //         </form>
            //         </div>
            //         <div className="book col-sm-4"></div>

            //     </div>
            // </div>
            //  </div>
            //  </div>
            //  </div>

            
        
           

            
      <div className="container-fluid">
          <div style={{ backgroundImage: `url(${log})`,backgroundRepeat: 'no-repeat', width:'100%'  }} className="img-fluid">
              
          <div className="Customer">
              <div className="CusLog">
              <div className=" row">
                <div className=" col-sm-4"></div>
                <div className="  col-sm-4">
                    <div className="CusForm">
                    <form>
                        <h1>Please Enter your email to login</h1>
                    <h5 for="email"><label className="regstyle">Email</label>
                           <input type="text" placeholder="Enter your email......" 
                             value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }}
                              name="username" id="username" required />
                         </h5>
                        
                         <button type="submit" className='cusLogin_btn' onClick={this.sendEmail}>Next</button>
                     </form>
                    </div>
                </div>
                <div className=" col-sm-4"></div>
              </div>
            </div>
          </div>
      </div>
      </div>
     
      
        )
    }
}
export default customer
