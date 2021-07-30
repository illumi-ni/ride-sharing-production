import React, { Component } from 'react';
import '../css/customer.css';
import log from "../images/log.jpg";
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
            <div className="CustomerLogin">
                
                {/* <img src='./log.jpg' alt='log' className='img-fluid'/> */}
      <div className="container-fluid">
      
          <div className="log">
          {/* <div className="img-fluid" style={{ backgroundImage: `url(${log})`,backgroundRepeat: 'no-repeat', width:'100%'  }} > */}
         
          
          {/* <img src='./havana.jpg' alt='havana' className='img-fluid'/>               */}
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
     
      
//     <div id="fullBg" >

//     <div className="container">
//       <form className="form-signin">       
//           <h1 className="form-signin-heading">Please Login</h1>
//           <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
//           <input type="password" class="form-control" name="password" placeholder="Password" required=""/>     
          
//           <button class="btn btn-lg btn-primary btn-block" type="submit">Log in</button>   
//         </form>
//       <p class="text-center sign-up"><strong>Sign up</strong> for a new account</p>
//     </div>
// </div>
    
      
        )
    }
}
export default customer
